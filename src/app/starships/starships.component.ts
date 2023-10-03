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

  starships: Starship[] = [ ];
  clickedShipName: string = "";
  infoOpen: boolean = false;

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
    this. infoOpen = true;
    this.starwarsApiService.setStarship(starship)
    this.clickedShipName = starship.name;
    // this.starshipComponent.showStarship(starship); 
  }
  
  hideShipInfo(){
    this.infoOpen = false;
    this.clickedShipName = "";
  }

  scrollLoad: boolean=false;
  onScroll(){
    
    this.scrollLoad = true;
    console.log(this.scrollLoad)
    console.log("scrolled")
    this.starwarsApiService.getAllStarships()
    .subscribe((starshipsResponse) => 
      starshipsResponse.results.forEach((result)=>
      this.starships.push(result))
      );  
    this.scrollLoad = false;

  }
}
