import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiResponse, Film, Starship } from '../interfaces/starship.interface';
import jwt_decode from "jwt-decode";
import { decodedToken } from '../interfaces/form.interface';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {
  baseInfoUrl: string = `https://swapi.dev/api/`;
  baseImgUrl: string = `https://starwars-visualguide.com/assets/img`;
  isLoggedIn: boolean = false;

  starship: Starship = {
    name: "",
    model: "",
  }

  constructor(
    private http: HttpClient,
  ) { }

  getAllStarships(pageNum: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseInfoUrl}/starships/?page=${pageNum}`);
  }

  setStarship(starship: Starship) {
    this.starship = starship;
  }

  getStarShip(): Starship {
    return this.starship;
  }

  getImg(endpoint: string, id: number) {
    return this.http.get(`${this.baseImgUrl}/${endpoint}/${id}.jpg`, { responseType: 'blob' });
  }

  getFilmName(filmId: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseInfoUrl}/films/${filmId}`);
  }

  validateToken$(): Observable<boolean> {
    let token = localStorage.getItem("token");
    let isValidToken: boolean = false;
    if (token) {
      let decodedToken: decodedToken = jwt_decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        isValidToken= false;
      } else {
        isValidToken = true;
      }
    } else {
      isValidToken = false;
    }
    return of(isValidToken);
  }

  logOut() {
    localStorage.removeItem("token");
  }

}






