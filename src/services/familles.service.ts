import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { ArtFamily } from 'model/model.ArtFamily';
import { error } from 'selenium-webdriver';

@Injectable()
export class FamillesService {

  private lstFamilleUrl='http://localhost:9090/artFamily/lstFamilies';
  private addFamilleUrl='http://localhost:9090/artFamily/addFamily';
  private editFamilleUrl= 'http://localhost:9090/artFamily/updateFamily/';
  private getFamilleUrl= 'http://localhost:9090/artFamily/findId/';
  private deleteFamilleUrl= 'http://localhost:9090/artFamily/delete/';
  
  constructor(private http: Http) { 
  }

 findAll(): Observable<ArtFamily[]>{
   return this.http.get(this.lstFamilleUrl)
   .map((res: Response) => res.json())
   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));  
 }
 
 findById(id: number): Observable<ArtFamily>{
   return this.http.get(this.getFamilleUrl+id)
   .map((res: Response) => res.json())
   .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 }

 saveFamily(famille: ArtFamily): Observable<ArtFamily>{
    return this.http.post(this.addFamilleUrl,famille)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
 }

 deleteFamilyById(id: number): Observable<boolean>{
   return this.http.delete(this.deleteFamilleUrl+id)
   .map((res:Response) => res.json())
  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

 updateFamily(famille: ArtFamily): Observable<ArtFamily>{
   return this.http.put(this.editFamilleUrl,famille)
   .map((res: Response) => res.json())
   .catch((error:any) => Observable.throw(error.json() || 'Server error'));
 }
}
