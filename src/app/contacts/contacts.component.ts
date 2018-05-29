import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Router } from '@angular/router';
import "rxjs/add/operator/map";
import { ContactService } from 'services/contacts.service';
import { Contact } from 'model/model.contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:Array<number>;
  constructor(public http:Http,public contactService:ContactService,
  public router:Router) { 

  }
  ngOnInit() {
   
  }
  doSearch(){
    this.contactService.getContact(this.motCle,this.currentPage,this.size)
    .subscribe(data=>{
      this.pageContacts=data,
      this.pages=new Array(data.totalPages);
    }); 
  }

 chercher(){
  this.doSearch();
 }
 gotoPage(i:number){
  this.currentPage=i;
  this.doSearch();
 }
 onEditContact(id:number){
  this.router.navigate(['editContact',id]);
 }
 onDeleteContact(c:Contact){
   let confirm=window.confirm('Est vous sure ?');
   if(confirm==true){
  this.contactService.deleteContact(c.id)
   .subscribe(data=>{
     this.pageContacts.content.splice(
       this.pageContacts.content.indexOf(c),1
     );
   }) 
 }
}
}