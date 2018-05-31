import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  user: Observable<{}>;
  authenticated: boolean;
  title= "tite avec pipe";
  todaydate = new Date();
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
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
