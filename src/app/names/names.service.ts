import { Name } from './store/name';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(private http: HttpClient) { }

  getNames(){
    return this.http.get<Name[]>("http://localhost:3000/names");
  }
}
