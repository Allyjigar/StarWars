
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilot } from '../interfaces/pilot';



@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {

  url: string = 'https://swapi.dev/api/starships/?page=';
  url2: string = 'https://swapi.dev/api/';


  constructor( private http: HttpClient) { }

  viewDetails(url: string){
    const idUrl = url.replace(/[^0-9]/ig,"");
    return parseInt(idUrl);
  }

  getAllSpaceships(page: number = 1): Observable<any>{
    return this.http.get(this.url + page);
  }

  getSpaceship(id: string): Observable<any> {
    console.log('id:'+id )
    return this.http.get(this.url2+ 'starships/' +id);
  }

  getPilot(id: number): Observable<any> {
    return this.http.get(this.url2 + 'people/' + id);
  }
}
