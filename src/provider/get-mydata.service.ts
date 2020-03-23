import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMydataService {
  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get('./assets/thabang.json');
  }
}
