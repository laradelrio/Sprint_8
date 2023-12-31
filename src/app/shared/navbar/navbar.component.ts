import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  homeClass: string = "inactive";
  starshipClass: string = "inactive";

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) { this.changeClass(window.location.pathname)}
    });
  }

  changeClass(pathName: string){
    if(pathName === "/home"){
      this.homeClass = "active";
      this.starshipClass = "inactive";
    } else if (pathName === "/starships"){
      this.starshipClass = "active";
      this.homeClass = "inactive";
    }
  }

}



