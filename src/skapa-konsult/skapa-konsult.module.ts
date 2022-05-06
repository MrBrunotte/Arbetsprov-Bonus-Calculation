import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SkapaNyKonsultRoutes } from './skapa-konsult.routes';
import { NyKonsultComponent } from './nykonsult.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SkapaNyKonsultRoutes)
  ],
  declarations: [
    NyKonsultComponent
  ],
  providers: [

  ]
})
export class NyKonsultModule {

}
