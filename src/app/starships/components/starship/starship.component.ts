import { Component, Input } from '@angular/core';
import { Starship, StarshipImg } from 'src/app/interfaces/starship.interface';
import { StarwarsApiService } from 'src/app/services/starwars-api.service';

@Component({
  selector: 'app-starships-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent {

  starship: Starship = {
    name: "",
    model: "",  
  }
  
  shipImg: any;

  constructor(private starwarsApiService: StarwarsApiService ){}

  showStarship(starship: Starship){
    this.starship = starship;
  
    this.getStatshipImg(starship);  
  }

  getStatshipImg(starship:Starship){
    let id: number = parseInt(starship.url!.slice(32,(starship.url!.length-1))  )
    this.starwarsApiService.getShipImg(id)!.subscribe((data) =>
  
    this.showImg(data))
    // this.shipImg = img);   
  }

  showImg(data: Blob | string){

    if((typeof data) === "string"){
      this.shipImg = data
    } else {
      this.createImageFromBlob(data as Blob)
    }
  }
  createImageFromBlob(data: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.shipImg = reader.result;
    }, false);
 
    if (data) { 
       reader.readAsDataURL(data);//initiates the reading operation and converts the contents of the Blob into a data URL
    }

 }
  
 handleImageError(event: any){
  event.target.src =  "../../../../assets/images/starwarsLogo.svg";
 }


  // getStarship(id: string){      
  //     this.starwarsApiService.getStarships(id)
  //     .subscribe( (starshipResponse) => 
  //       this.starships=starshipsResponse.results
  //     );  
  // }
  

  
}
