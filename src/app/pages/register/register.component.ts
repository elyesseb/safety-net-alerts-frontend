import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { MedicalRecord } from 'src/app/models/medical-record';
import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  listAddress: Address[] = [];
  listMedicalRecord: MedicalRecord[] = [];

  listMedication: string[] = [];
  newMedication: string = '';

  listAllergie: string[] = [];
  newAllergie: string = '';

  form: any = {
    firstname: null,
    lastname: null,
    birthdate: null,
    phone: null,
    email: null,
    password: null,
    address: Address,
    medicalRecord: {
      description: 'Clean Mind !',
      medications: ['smecta', 'smicta'],
      allergies: ['Contre les saloupe'],
    },
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {
    this.getAllAdress();
    console.log(this.form);
  }

  addMedications(event: any) {
    event.preventDefault();
    this.listMedication.push(this.newMedication);
    console.log(this.listMedication.push(this.newMedication));
    this.newMedication = '';
  }

  addAllergies(event: any) {
    event.preventDefault();
    this.listAllergie.push(this.newAllergie);
    console.log(this.listAllergie.push(this.newAllergie));
    this.newAllergie = '';
  }

  getAllAdress() {
    this.addressService.findAllAddress().subscribe((data: Address[]) => {
      this.listAddress = [...data];
    });
  }

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
