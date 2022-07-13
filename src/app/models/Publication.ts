export abstract class Publication {
    protected id_publication?: number;
    protected title?: string;
    protected image?: string;
    protected description?: string;
    protected date?: Date;
    protected ubication?: string;

    constructor(title1:string, image1:string, description1:string, date1:Date, ubication1:string){
        this.title = title1
        this.image = image1
        this.description = description1
        this.date = date1
        this.ubication = ubication1
    }
    GetID(){
        return this.id_publication
    }

    GetTitle(){
        return this.title
    }
    GetImage(){
        return this.image
    }
    GetDesc(){
        return this.description
    }
    GetDate(){
        return this.date
    }
    GetUbication(){
        return this.ubication
    }
}