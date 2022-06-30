import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const AUTH_API = 'http://localhost:8080/api/';
const apiUrl = environment.AUTH_API;

const httpOptions = {
  headers: new HttpHeaders().set(
    'Content-Type',
    'application/x-www-form-urlencoded'
  ),
};

const httpOptionsJson = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post(AUTH_API + 'login', body.toString(), httpOptions);
  }

  register(
    firstname: string,
    lastname: string,
    birthdate: any,
    phone: string,
    email: string,
    password: string,
    address: any,
    medicalRecord: any,
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'registration',
      {
        firstname,
        lastname,
        birthdate,
        phone,
        email,
        password,
        address,
        medicalRecord,
      },
      httpOptionsJson
    );
  }
}
