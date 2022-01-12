
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {

  url: string = 'https://swapi.dev/api/starships/';

  constructor( private http: HttpClient) { }

  getAllSpaceships(): Observable<any>{
    return this.http.get(this.url);
  }
}
