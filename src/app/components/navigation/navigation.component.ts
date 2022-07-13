import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public auth: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.auth.logout();
    this.route.navigate(['/login']);
  }


}
