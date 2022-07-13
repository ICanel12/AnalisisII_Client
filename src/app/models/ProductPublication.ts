import { Publication } from "./Publication";

export class ProductPublication extends Publication{
    private price:number;
    constructor(title1:string, image1:string, description1:string, date1:Date, ubication1:string, price1:number){
        super(title1,image1,description1,date1,ubication1)
        this.price = price1
    }

    GetPrice(){
        return this.price
    }
}