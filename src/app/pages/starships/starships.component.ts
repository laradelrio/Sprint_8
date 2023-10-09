import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { StarwarsApiService } from 'src/app/services/starwars-api.service';
import { Starship } from 'src/app/interfaces/starship.interface';
import { StarshipComponent } from './components/starship/starship.component';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {
  @ViewChild(StarshipComponent) starshipComponent!: StarshipComponent;

  starships: Starship[] = [];
  clickedShipName: string = "";
  infoOpen: boolean = false;
  pagesNum: number = 2;
  scrolled: boolean = false

  constructor(
    private starwarsApiService: StarwarsApiService,
  ) { }

  ngOnInit(): void {
    this.getAllStarships();
  }
  
  getAllStarships():void{      
        this.starwarsApiService.getAllStarships(1)
        .subscribe( (starshipsResponse) => 
          this.starships=starshipsResponse.results
        );      
  }

  @HostListener('window:scroll' )  
  onScroll() {

    let docHeight= document.documentElement.getBoundingClientRect().height;
    let amountScrolled = document.documentElement.scrollTop+window.innerHeight;
    let initialGet = this.starships.length === 0;
    
    if (this.pagesNum <= 6 && !initialGet && (amountScrolled >= docHeight)) { 
     
      this.starwarsApiService.getAllStarships(this.pagesNum)
        .subscribe((starshipsResponse) => starshipsResponse.results.forEach((result) => 
          this.starships.push(result))
      );
      this.pagesNum++;    
    }

    this.backToTopBtnDisplay();  
  }

  backToTopBtnDisplay(){
    if (window.scrollY >= window.innerHeight){
      this.scrolled = true;
    } else{
      this.scrolled = false;
    }; 
  }

  backToTop(){
    scrollTo(0, 0);
  }
  
  showStarship(starship: Starship, event: any) {
    event.target.class = "btn btn-primary text-light invisible"
    this.infoOpen = true;
    this.starwarsApiService.setStarship(starship)
    this.clickedShipName = starship.name;
  }

  hideShipInfo() {
    this.infoOpen = false;
    this.clickedShipName = "";
  }
}
