import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(): Observable<any> {
    return this.http.get('https://swapi.dev/api/films/1');
  }

  public getPlanet(url: string): Observable<any>{
    return this.http.get(url)
  }
}
