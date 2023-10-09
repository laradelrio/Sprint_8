import { Component, OnInit } from '@angular/core';
import { StarwarsApiService } from 'src/app/services/starwars-api.service';

@Component({
  selector: 'app-starship-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit{

  filmsImgs: string[] = [];
  filmNames: string[] = [];
  filmImg: any;

  constructor(private starwarsApiService: StarwarsApiService){}
  
  ngOnInit(): void {
    this.getFilmNames();
    console.log("length",this.filmsImgs.length)
  }

  getFilmNames(){
    (this.starwarsApiService.starship.films)?.forEach(
      (film) => {
      (console.log(film))
      let filmId: number =  parseInt(film!.slice(28,(film.length-1)));
      console.log("films",filmId )

      this.starwarsApiService.getFilmName(filmId)
        .subscribe( (response) => 
        this.filmNames.push(response.title)
        )

      let imgRecived : Blob;
      this.starwarsApiService.getImg("films", filmId)
      .subscribe({
        next:  (img)=> { this.filmsImgs.push( URL.createObjectURL(img))} });
    })
  }
  
}
