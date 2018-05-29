import { Component, OnInit } from '@angular/core';
import { FacturationService } from 'services/facturation.service';
import { ArtFamily } from 'model/model.ArtFamily';
import { Article } from 'model/model.article';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  familiesLst:ArtFamily[];
  article:Article=new Article();
  famille:ArtFamily;
  constructor(public facturationService:FacturationService,public router:Router) { }

  ngOnInit() {
   this.familiesList();
   this.article.code="CCCC";
  }
  onSaveArticle(dataForm){
  console.log(dataForm);
   
   this.facturationService.saveArticle(dataForm)
   .subscribe(data=>{
   console.log(data); 
   });
  this.router.navigate(['articles']);
  
  }
  familiesList(){
      this.facturationService.familyList()
      .subscribe(data=>{
        this.familiesLst=data;
      });
    }
}
