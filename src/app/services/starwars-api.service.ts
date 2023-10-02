import { SafePropertyRead } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { ApiResponse, StarshipImg} from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {
  baseInfoUrl: string = `https://swapi.dev/api/`;
  baseImgUrl: string = `https://starwars-visualguide.com/assets/img/starships/`;
  
  constructor(
    private http: HttpClient,
  ) { }

  getAllStarships(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.baseInfoUrl}/starships/`);
  }

  getShipImg(id: number) {
    
      return this.http.get(`${this.baseImgUrl}${id}.jpg`, { responseType: 'blob' })
      
    
   
  
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




