import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Firestation } from '../models/firestation';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class FirestationService {
  apiUrl = environment.AUTH_API;

  constructor(private http : HttpClient) { }

  findAll() : Observable<Firestation[]> {
    return this.http.get<Firestation[]>(`${this.apiUrl}/firestation`);
  }

  findPersonsByStationName(params: any) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/firestation/params`, {params});
  }
}
