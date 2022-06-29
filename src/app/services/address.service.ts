import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  apiUrl = environment.AUTH_API;

  constructor(private http: HttpClient) {}

  findAllAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.apiUrl}/address/all`);
  }
}
