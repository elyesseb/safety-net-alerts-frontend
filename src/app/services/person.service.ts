import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) {}

  findByCity(city: any): Observable<any> {
    return this.http.get<any>(`${baseUrl}/communityEmail?city=${city}`);
  }
}
