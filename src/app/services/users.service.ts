import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = environment.AUTH_API;

  constructor(private http : HttpClient) { }

  findUsersByFirstAndOrLastName(params: any) : Observable<any> {
    return this.http.get<any>(`http://localhost:8080/person/personInfo`, {params})
  }

  findUserByEmail(params: any) : Observable<any> {
    return this.http.get<any>(`http://localhost:8080/person/getPerson`, {params});
  }
}
