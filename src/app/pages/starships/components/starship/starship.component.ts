import { Component, Input, OnInit } from '@angular/core';
import { Starship, StarshipImg } from 'src/app/interfaces/starship.interface';
import { StarwarsApiService } from 'src/app/services/starwars-api.service';

@Component({
  selector: 'app-starships-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit{

  starship: Starship = {
    name: "",
    model: "",  
  }

  shipImg: any;

  constructor(private starwarsApiService: StarwarsApiService ){}

  ngOnInit(): void {
    this.starship = this.starwarsApiService.getStarShip();  
    this.getStarshipImg();
  }

  getStarshipImg(){
    let id = parseInt(this.starship.url!.slice(32,(this.starship.url!.length-1)))
    this.starwarsApiService.getImg("starships",id)!.subscribe((data) =>
      this.showImg(data));
  }

  showImg(data: Blob | string){
    if((typeof data) === "string"){
      this.shipImg = data;
    } else {
      this.createImageFromBlob(data as Blob);
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
    event.target.src =  "../../../../assets/images/noImage.webp";
  }
  
}
