import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private baseUrl = 'https://tekdi-challenges.appspot.com/api/People';

  constructor(private http: HttpClient) { }

  getPeople(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPeople(people: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, people);
  }

  updatePeople(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePeople(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPeopleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
