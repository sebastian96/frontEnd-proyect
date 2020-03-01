import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public api = 'http://localhost:4000/api';

  constructor(private http:HttpClient) { }

  getQuestions(id:string) {
    return this.http.get<Object>(this.api.concat(id));
  }
}
