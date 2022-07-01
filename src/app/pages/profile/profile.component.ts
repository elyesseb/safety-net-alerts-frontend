import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  userInfo: any;

  constructor(
    private token: TokenStorageService,
    private userService : UsersService
    ) {}

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.token.getUser());
    this.findByMail();
  }

  findByMail(){
    const params = this.getRequestParams(this.currentUser.sub);
    this.userService.findUserByEmail(params).subscribe(
      (data) => {
        console.log(data);
        this.userInfo = data;
      }
    )
  }

  getRequestParams(email: string): any {
    let params = {
      mail : email
    };
    return params;
  }
}
