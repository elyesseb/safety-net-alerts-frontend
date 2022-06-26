import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    firstname: null,
    lastname: null,
    birthdate: null,
    phone: null,
    email: null,
    password: null,
    address: {
      address: null,
      city: null,
      state: null,
      zip: null,
    },
    medicalRecord: {
      description: [null],
      medications: [null],
      allergies: [null],
    },
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const {
      firstname,
      lastname,
      birthdate,
      phone,
      email,
      password,
      address,
      medicalRecord,
    } = this.form;

    this.authService
      .register(
        firstname,
        lastname,
        birthdate,
        phone,
        email,
        password,
        address,
        medicalRecord
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }
}
