import { Component, HostBinding, OnInit } from '@angular/core';
import { ConnectUrlService } from '../../services/connect-url.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  publications: any = [];
  products:any = [];

  constructor(private connectUrlService: ConnectUrlService) { }

  ngOnInit(): void {
    this.getPublications();
    this.getProducts();
  }

  getPublications(){
    this.connectUrlService.getPublications().subscribe(
      res => {
        this.publications = res;
      },
      err => console.log(err)
    );
  }

  getProducts(){
    this.connectUrlService.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    );
  }

  deletePublication(id: string){
    this.connectUrlService.deletePublication(id).subscribe(
      res => {
        console.log(res)
        this.getPublications();
    this.getProducts();
      }, 
      err => console.log(err)
    )
  }
  deleteProduct(id: string){
    this.connectUrlService.deleteProduct(id).subscribe(
      res => {
        console.log(res)
        this.getPublications();
    this.getProducts();
      }, 
      err => console.log(err)
    )
  }

}
