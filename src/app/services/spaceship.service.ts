
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {

  url: string = 'https://swapi.dev/api/starships/?page=';
  url2: string = 'https://swapi.dev/api/starships/'


  constructor( private http: HttpClient) { }

  getAllSpaceships(page: number = 1): Observable<any>{
    return this.http.get(this.url + page);
  }

  getSpaceship(id: string): Observable<any> {
    console.log('id:'+id )
    return this.http.get(this.url2+id);
  }
}
