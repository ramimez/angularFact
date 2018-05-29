import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FacturationService } from 'services/facturation.service';
import { Router } from '@angular/router';
import { Article } from 'model/model.article';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  pageArticle:any;
  size:number=5;
  currentPage:number=0;
  motCle:string="";
  pages:Array<number>;

  constructor(public http:Http,public router:Router,public facturationService:FacturationService) { }

  ngOnInit() {

  }


  articleList(){
    this.facturationService.findArticles(this.motCle,this.currentPage,this.size)
    .subscribe(data=>{
      this.pageArticle=data;
      this.pages=new Array(data.totalPages);
    });
  }
  chercher(){
    this.articleList();
  }
 goToNewAtricle(){
   this.router.navigate(['article-new']);
 }
 deleteArticle(c:Article){
  let confirm=window.confirm('Est vous sure ?');
  if(confirm==true){
 this.facturationService.deleteArticle(c.articleId)
  .subscribe(data=>{
    this.pageArticle.content.splice(
      this.pageArticle.content.indexOf(c),1
    ); 
  }) 
}
 }
}


 