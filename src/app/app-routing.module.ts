import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './pages/starships/starships.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: 'starships', component: StarshipsComponent},
  {path: 'home', component: HomeComponent},
  {path:'**', redirectTo:'/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
