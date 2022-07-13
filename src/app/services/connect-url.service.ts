import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Publication } from '../models/Publication'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectUrlService {

  API_URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient ) { 
  }
  
      
  getPublications(){
    return this.http.get(`${this.API_URL}/publication`);
  }

  getProducts(){
    return this.http.get(`${this.API_URL}/product`);
  }

  getPublication(id: string){
    return this.http.get(`${this.API_URL}/publication/${id}`);
  }

  savePublication(publication: Publication){
    return this.http.post(`${this.API_URL}/publication`, publication);
  }

  saveProduct(publication: Publication){
    return this.http.post(`${this.API_URL}/product`, publication);
  }


  deletePublication(id: string){
    return this.http.delete(`${this.API_URL}/publication/${id}`);
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.API_URL}/product/${id}`);
  }

  getUsers(){
    return this.http.get(`${this.API_URL}/login`);
  }



}
