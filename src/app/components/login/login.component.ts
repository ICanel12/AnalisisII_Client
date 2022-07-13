
import { Component, HostBinding, OnInit } from '@angular/core';
import { ConnectUrlService } from '../../services/connect-url.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Login } from '../../models/Login';
import { AuthService } from '@auth0/auth0-angular'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: Login = {
    id_user: 0,
    carnet: ''
  }

  users: any = [];
  isLoggedIn: boolean = true;

  constructor(private connectUrlService: ConnectUrlService, private route: Router, public auth: AuthService) { }

  ngOnInit(): void {

    this.getUsers();
    
    if(localStorage.getItem('isLoggedInGoogle') == 'true'){
      this.route.navigate(['/publication']);
    } 
  }


  ingresar(){
    console.log("Google");
   
    localStorage.setItem('isLoggedInGoogle', 'true');
    this.auth.loginWithRedirect();
  }
  
  getUsers(){
    this.connectUrlService.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(res);

      },
      err => console.log(err)
    );

  }


  verify(){
    console.log("Usuarios", this.users);

    this.users.forEach((item: any) =>{
      console.log(item);

      if(item.carnet == this.login.carnet){
        console.log(this.login.carnet);
        this.route.navigate(['/publication']);
      }else{
        this.isLoggedIn = false;
      }
    });


  }


}
