import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Station } from '../models/station';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  apiUrl = environment.AUTH_API;

  constructor(private http : HttpClient) { }

  findAll() : Observable<Station[]> {
    return this.http.get<Station[]>(`${this.apiUrl}/station`);
  }


}
