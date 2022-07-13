import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Publication } from '../../models/Publication';
import { ConnectUrlService } from '../../services/connect-url.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FeedPublication } from '../../models/FeedPublication';
import { ProductPublication } from '../../models/ProductPublication';
import { PublicationFormat } from '../../models/PublicationFormat';
import { ProductPost_Factory } from '../../models/ProductPost_Factory';
import { Post_Factory } from '../../models/Post_Factory';
import { FeedPost_Factory } from '../../models/FeedPost_Factory';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.css']
})
export class PublicationFormComponent implements OnInit {
  
  publicationf: PublicationFormat={
    id_publication: 0,
    title:'',
    image:'',
    description: '',
    date: new Date(),
    ubication: '',
    price:  0}
  edit: boolean = false
    isProduct:boolean = true
    prodPostFac : ProductPost_Factory = new ProductPost_Factory();
    feedPostFac : FeedPost_Factory = new FeedPost_Factory();
  constructor(private connectUrlService: ConnectUrlService, private route: Router, private activatedRoute: ActivatedRoute ) {
    
   }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    console.log(params['id'])

  }

  saveNewPublication(){

    if(this.isProduct){
      this.prodPostFac.setPrice(Number(this.publicationf.price))
      const publi = this.prodPostFac.createPost(String(this.publicationf.title), String(this.publicationf.image),String(this.publicationf.description),new Date('20220101'),String(this.publicationf.ubication))
      this.connectUrlService.saveProduct(publi)
      .subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/publication']);
        },
        err => console.error(err)
      );
    }
    else{
      const publi = this.feedPostFac.createPost(String(this.publicationf.title), String(this.publicationf.image),String(this.publicationf.description),new Date('20220101'),String(this.publicationf.ubication))
      this.connectUrlService.savePublication(publi)
      .subscribe(
        res => {
          console.log(res);
          this.route.navigate(['/publication']);
        },
        err => console.error(err)
      );
    }
    
    
  }

}
