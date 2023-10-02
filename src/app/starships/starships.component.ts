import { Component, OnInit, ViewChild } from '@angular/core';
import { StarwarsApiService } from '../services/starwars-api.service';
import { ApiResponse, Starship } from '../interfaces/starship.interface';
import { StarshipComponent } from './components/starship/starship.component';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  @ViewChild(StarshipComponent) starshipComponent!: StarshipComponent;

  starships: Starship[] = [ ]

  constructor(
    private starwarsApiService: StarwarsApiService,
  ){}

  ngOnInit(): void {
    this.getAllStarships();
  }

  getAllStarships():void{      
      this.starwarsApiService.getAllStarships()
      .subscribe( (starshipsResponse) => 
        this.starships=starshipsResponse.results
      );  
  }

  showStarship(starship: Starship){
    this.starshipComponent.showStarship(starship);
  }

  
  

}
