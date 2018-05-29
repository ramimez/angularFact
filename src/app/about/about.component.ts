import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info = { name: 'Ramirez' , email:'mezghanni.rami@gmailcom' };

  user: Observable<{}>;
  authenticated: boolean;

  ngOnInit() {
    this.authenticated = false;
    this.user = this.getAsyncData();
  }

  login(){
    this.authenticated=true;
  }

  logout(){
    this.authenticated=false;
  }
  getAsyncData() {
    return Observable.of({ firstName: 'Steve', lastName: 'Jobs' }).delay(2000);
  }
}
