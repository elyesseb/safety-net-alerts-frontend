import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/services/address.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnChanges {
  listAddress: Address[] = [];
  listMedication: string[] = [];
  listAllergie: string[] = [];

  form: any = {
    firstname: null,
    lastname: null,
    birthdate: null,
    phone: null,
    email: null,
    password: null,
    address: Address,
    medicalRecord: {
      description: null,
      medications: [null],
      allergies: [null],
    },
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private addressService: AddressService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.addMedications(changes);
    this.addAllergies(changes);
  }

  ngOnInit(): void {
    this.getAllAdress();
    console.log(this.form);
    console.log(this.listAddress);
    console.log(Address);
  }

  addMedications(event: any) {
    event.preventDefault();
    let inputMedication = this.form.medicalRecord.medications;
    this.listMedication.push(inputMedication);
    this.form.medicalRecord.medications = '';
  }

  addAllergies(event: any) {
    event.preventDefault();
    let inputAllergies = this.form.medicalRecord.allergies;
    this.listAllergie.push(inputAllergies);
    this.form.medicalRecord.allergies = '';
  }

  getAllAdress() {
    this.addressService.findAllAddress().subscribe((data: Address[]) => {
      this.listAddress = [...data];
      console.log(this.listAddress);
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
