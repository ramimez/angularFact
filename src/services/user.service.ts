import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { User } from 'model/model.user';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class UserService {

  constructor(private http: Http) { }
   getUsers(): Observable<User[]>{
    return this.http.get("http://kadri-hamza.com/json/")
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}
