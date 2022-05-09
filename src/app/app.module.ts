import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BonusAppComponent } from './bonus-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { KonsultComponent } from './konsult/konsult.component';
import { BonusComponent } from './bonus/bonus.component';
import { KonsultThumbnailComponent } from './konsult/konsult-thumbnail.components';
import { StartsidaComponent } from './startsida/startsida.component';
import { KonsultService } from './konsult/shared/konsult.service';
import { SkapaNyKonsult } from './konsult/shared/skapa-nykonsult.component';
import { KonsultDetailsComponent } from './konsult/konsult-details/konsult-details.component';
import { Error404Component } from './errors/404.component'
import { KonsultRouteActivator } from './konsult/konsult-details/konsult-route-activator.service';
import { KonsultDashboardComponent } from './konsult-dashboard/konsult-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BonusAppComponent,
    NavBarComponent,
    KonsultComponent,
    BonusComponent,
    KonsultThumbnailComponent,
    StartsidaComponent,
    SkapaNyKonsult,
    KonsultDetailsComponent,
    Error404Component,
    KonsultDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:
    [
      KonsultService,
      {
        provide: 'canDeactivateSkapaKonsult',
        useValue: checkDirtyState
      }
  ],
  bootstrap: [BonusAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: SkapaNyKonsult): any {
  if (component.isDirty) {
    return window.confirm('Du har inte sparat den nya konsulten, vill du verkligen ångra?')
    return true
  }
}
