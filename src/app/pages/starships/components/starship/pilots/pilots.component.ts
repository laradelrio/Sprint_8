import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { StarwarsApiService } from 'src/app/services/starwars-api.service';

@Component({
  selector: 'app-starship-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss']
})
export class PilotsComponent {


  pilotsImgs: string[] = [];
  pilotNames: string[] = [];
  pilotImg: any;

  constructor(private starwarsApiService: StarwarsApiService){}
  
  ngOnInit(): void {
    this.getPilotNames();
  }

  getPilotNames(){
    (this.starwarsApiService.starship.pilots)?.forEach(
      (pilot) => {
      let pilotId: number =  parseInt(pilot!.slice(29,(pilot.length-1)));

      this.starwarsApiService.getPilotName(pilotId)
      .pipe(
        finalize(()=>
          console.log(this.pilotNames)
        )
      ).subscribe( (response) => 
        this.pilotNames.push(response.name)
        )
  

      this.starwarsApiService.getImg("characters", pilotId)
      .pipe(
        finalize(()=>
          console.log(this.pilotsImgs)
        )
      )
      .subscribe({
        next:  (img)=> { this.pilotsImgs.push( URL.createObjectURL(img))} });
    })
  }

}
