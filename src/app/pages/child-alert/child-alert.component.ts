import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-child-alert',
  templateUrl: './child-alert.component.html',
  styleUrls: ['./child-alert.component.scss'],
})
export class ChildAlertComponent implements OnInit {
  address: string = '';
  childs: any[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  getRequestParams(searchAddress: string): any {
    let params: any = {};

    if (searchAddress) {
      params[`address`] = searchAddress;
    }
    return params;
  }

  searchChild(): void {
    this.personService.getChildByAddress(this.address).subscribe(
      (data) => {
        this.childs = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
