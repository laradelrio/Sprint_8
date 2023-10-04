import { SafePropertyRead } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';
import { ApiResponse, Starship, StarshipImg} from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {
  baseInfoUrl: string = `https://swapi.dev/api/`;
  baseImgUrl: string = `https://starwars-visualguide.com/assets/img/starships/`;

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

  getShipImg() {
      let id = parseInt(this.starship.url!.slice(32,(this.starship.url!.length-1)))
      return this.http.get(`${this.baseImgUrl}${id}.jpg`, { responseType: 'blob' })
      .pipe(
        catchError(this.handleImgError)
      )
  }


  handleImgError(error: HttpErrorResponse): string{
  //    if (error.status === 0) {
  //   // A client-side or network error occurred. Handle it accordingly.
  //   console.error('An error occurred:', error.error);
  // } else {
  //   // The backend returned an unsuccessful response code.
  //   // The response body may contain clues as to what went wrong.
  //   console.error(
  //     `There is no image available. Error Status: ${error.status}`);
  // }
    return  "../../../../assets/images/starwarsLogo.svg";
  }

  
}




