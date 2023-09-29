import { SafePropertyRead } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse} from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {
  baseUrl: string = `https://swapi.dev/api/`;
  
  constructor(
    private http: HttpClient,
  ) { }

  getAllStarships(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseUrl}/starships/`);
  }
}
