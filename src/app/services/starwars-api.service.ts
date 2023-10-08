import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ApiResponse, Film, Starship } from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {
  baseInfoUrl: string = `https://swapi.dev/api/`;
  baseImgUrl: string = `https://starwars-visualguide.com/assets/img`;
  

  starship: Starship = {
    name: "",
    model: "",  
  }

  constructor(
    private http: HttpClient,
  ) { }

  getAllStarships(pageNum:number): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseInfoUrl}/starships/?page=${pageNum}`);
  }
 
  setStarship(starship: Starship){
    this.starship = starship;
  }

  getStarShip():Starship{
    return this.starship;
  }

  getImg(endpoint: string,id:number) {
      return this.http.get(`${this.baseImgUrl}/${endpoint}/${id}.jpg`, { responseType: 'blob' });
  }

  getFilmName(filmId:number): Observable<Film>{
    return this.http.get<Film>(`${this.baseInfoUrl}/films/${filmId}`);
  }
  
}




