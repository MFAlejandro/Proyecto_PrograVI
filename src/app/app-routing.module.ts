import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import{ LogicComponent } from './pages/login/login.component';
import{ RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent},
  {path:'login',component:LogicComponent},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
