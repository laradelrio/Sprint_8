import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsComponent } from './starships.component';
import { HttpClient } from '@angular/common/http';
import { StarwarsApiService } from 'src/app/services/starwars-api.service';

describe('StarshipsComponent', () => {
  let component: StarshipsComponent;
  let fixture: ComponentFixture<StarshipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
     declarations: [StarshipsComponent]
    });
    fixture = TestBed.createComponent(StarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('collect 10 starships', () =>{
    expect(component.starships.length).toBe(0);
    component.ngOnInit();
    expect(component.starships.length).toBe(10);

  })



});
