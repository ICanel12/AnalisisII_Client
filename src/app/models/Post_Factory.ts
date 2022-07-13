import { Publication } from "./Publication";
import { FeedPublication } from "./FeedPublication";

export abstract class Post_Factory {
    createPost(title1:string, image1:string, description1:string, date1:Date, ubication1:string): Publication{
        return new FeedPublication(title1, image1,description1,date1,ubication1)
    }
  }