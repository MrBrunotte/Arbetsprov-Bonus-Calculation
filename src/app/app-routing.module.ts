import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KonsultComponent } from './konsult/konsult.component';
import { BonusComponent } from './bonus/bonus.component';
import { NavBarComponent } from './nav/navbar.component';
import { StartsidaComponent } from './startsida/startsida.component';
import { SkapaNyKonsult } from './konsult/shared/skapa-nykonsult.component';
import { KonsultDetailsComponent } from './konsult/konsult-details/konsult-details.component';
import { Error404Component } from './errors/404.component';
import { KonsultDashboardComponent } from './konsult-dashboard/konsult-dashboard.component';
import { KonsultRouteActivator } from './konsult/konsult-details/konsult-route-activator.service';

const routes: Routes = [
  { path: 'startsida', component: StartsidaComponent},
  { path: '', redirectTo: 'startsida', pathMatch: 'full' },
  { path: 'konsulter/ny', component: SkapaNyKonsult, canDeactivate: ['canDeactivateSkapaKonsult']},
  { path: 'konsulter/:id', component: KonsultDetailsComponent },
  { path: 'konsulter', component: KonsultComponent},
  { path: 'bonus', component: BonusComponent},
  { path: 'navbar', component: NavBarComponent },
  { path: '404', component: Error404Component },
  { path: 'konsult-dashboard', component: KonsultDashboardComponent },
  {
    path: 'user',
    loadChildren: () => import('../user/user.module')
    .then(m => m.UserModule)
  },
  {
    path: 'skapa-konsult',
    loadChildren: () => import('../skapa-konsult/skapa-konsult.module')
      .then(m => m.NyKonsultModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
