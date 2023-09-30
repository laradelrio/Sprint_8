import { Component, OnInit } from '@angular/core';
import { StarwarsApiService } from '../services/starwars-api.service';
import { ApiResponse, Starship } from '../interfaces/starship.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starships: Starship[] = [ ]
  
  constructor(
    private starwarsApiService: StarwarsApiService
  ){}

  ngOnInit(): void {
    this.getAllStarships();
  }

  getAllStarships():void{
      this.starships = []; 
      this.starwarsApiService.getAllStarships()
      .subscribe( (starshipsResponse) => 
      this.starships=starshipsResponse.results
      );
  }

  
  

}
