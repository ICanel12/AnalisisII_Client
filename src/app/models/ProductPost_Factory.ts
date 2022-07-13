import { Post_Factory } from "./Post_Factory";
import { Publication } from "./Publication";
import { ProductPublication } from "./ProductPublication";
export class ProductPost_Factory extends Post_Factory{
    price:number = 0;
    public setPrice (price1:number){
        this.price = price1
    }
    override createPost(title1:string, image1:string, description1:string, date1:Date, ubication1:string): Publication {
        return new ProductPublication(title1, image1,description1,date1,ubication1, this.price)
    }
}