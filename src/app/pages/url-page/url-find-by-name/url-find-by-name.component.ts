import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-url-find-by-name',
  templateUrl: './url-find-by-name.component.html',
  styleUrls: ['./url-find-by-name.component.scss']
})
export class UrlFindByNameComponent implements OnInit {
  firstname !: string;
  lastname !: string;
  userFound!: any[];

  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
  }

  firstnameValue(e:any) {
    this.firstname = e.target.value;
  }
  lastnameValue(e:any) {
    this.lastname = e.target.value;
  }

  findUsersByFirstAndOrLastName(firstname: string, lastname: string) {
    const params = this.getRequestParams(firstname, lastname);
    this.usersService.findUsersByFirstAndOrLastName(params).subscribe(
      (data) => {
        //console.log(data);
        this.userFound = data;
      }
    )
  }

  getRequestParams(firstname: string, lastname: string): any {
    let params = {
      firstname : firstname,
      lastname : lastname
    };
    return params;
  }

}
