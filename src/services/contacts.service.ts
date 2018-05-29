import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Contact } from "model/model.contact";

@Injectable()
export class ContactService{
    constructor(public http:Http){

    }
    getContact(motCle:string,page:number,size:number){
        return this.http.get("http://localhost:9090/chercher/Contacts?mc="
        +motCle+"&size="+size+"&page="+page)
        .map(resp=>resp.json());
    }
    saveContact(contact:Contact){
        return this.http.post("http://localhost:9090/contacts",contact)
        .map(resp=>resp.json());
    }
    getPerson(id:number){
        return this.http.get("http://localhost:9090/contact/"+id)
        .map(resp=>resp.json());
    }
    updateContact(contact:Contact){
        console.log("******Update Service******");
        return this.http.put("http://localhost:9090/contact/"+contact.id,contact)
        .map(resp=>resp.json());
    }
    deleteContact(id:number){
        console.log("******Delete Service******");
        return this.http.delete("http://localhost:9090/contact/"+id)
        .map(resp=>resp.json());
    }
}