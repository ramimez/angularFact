import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Article } from "model/model.article";

@Injectable()
export class FacturationService{
    constructor(public http:Http){

    }
    findArticles(motCle:string,page:number,size:number){
        return this.http.get("http://localhost:9090/article/findArticles?mc="
        +motCle+"&size="+size+"&page="+page)
        .map(resp=>resp.json());
    }
    saveArticle(article:Article){
        console.log(article);
        return this.http.post("http://localhost:9090/article/addArticle",article)
        .map(resp=>resp.json());
    }
    familyList(){
        return this.http.get("http://localhost:9090/artFamily/lstFamilies")
        .map(resp=>resp.json());
    }
    deleteArticle(id:number)
    {
        return this.http.delete("http://localhost:9090/article/remove/"+id)
        .map(resp=>resp.json());
    }
}