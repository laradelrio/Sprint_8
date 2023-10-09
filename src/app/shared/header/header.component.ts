import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { StarwarsApiService } from 'src/app/services/starwars-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false; 
  
  constructor(private starwarsApiService: StarwarsApiService){}
  ngOnInit(): void {
    this.checkIfLoggedIn();
  }

 

  checkIfLoggedIn(){
    this.starwarsApiService.validateToken$()
    .subscribe((tokenStatus) => this.isLoggedIn = tokenStatus.valueOf())
  };

  logOut(){
    this.starwarsApiService.logOut();
  }
    
}


