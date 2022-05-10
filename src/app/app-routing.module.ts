import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BonusComponent } from './bonus/bonus.component';
import { NavBarComponent } from './nav/navbar.component';
import { StartsidaComponent } from './startsida/startsida.component';
import { Error404Component } from './errors/404.component';
import { KonsultDashboardComponent } from './konsult-dashboard/konsult-dashboard.component';

const routes: Routes = [
  { path: 'startsida', component: StartsidaComponent},
  { path: '', redirectTo: 'startsida', pathMatch: 'full' },
  { path: 'bonus', component: BonusComponent},
  { path: 'navbar', component: NavBarComponent },
  { path: '404', component: Error404Component },
  { path: 'konsult-dashboard', component: KonsultDashboardComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
