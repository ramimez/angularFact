import { Component, OnInit } from '@angular/core';
import { UserService } from 'services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users;
  constructor(private userService: UserService) {
    this.users=userService.getUsers();
   }

  ngOnInit() {
  }

}
