import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WizytaService {

  private baseUrl = 'http://localhost:8080/wizyty';

  constructor(private http: HttpClient) { }

  getVisit(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateVisit(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getVisitsList(): Observable <any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
