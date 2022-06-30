import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-mail-by-city',
  templateUrl: './mail-by-city.component.html',
  styleUrls: ['./mail-by-city.component.scss'],
})
export class MailByCityComponent implements OnInit {
  city: string = '';
  emails: string[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {}

  getRequestParams(searchCity: string): any {
    let params: any = {};

    if (searchCity) {
      params[`city`] = searchCity;
    }
    return params;
  }

  retrieveEmails(): void {
    const params = this.getRequestParams(this.city);

    this.personService.findByCity(params).subscribe(
      (data) => {
        this.emails = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchEmail(): void {
    this.personService.findByCity(this.city).subscribe(
      (data) => {
        this.emails = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
