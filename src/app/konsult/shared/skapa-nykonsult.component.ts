import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  templateUrl: './skapa-nykonsult.component.html'
})
export class SkapaNyKonsult{
  isDirty: boolean = true
  constructor(private router: Router) {

  }
  cancel() {
    this.router.navigate(['/konsulter'])
  }
}
