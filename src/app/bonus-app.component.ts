import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'bonus-app',
  templateUrl: './bonus-app.component.html'
})
export class BonusAppComponent {
  title = 'Bonusberäkning';

  constructor(private router: Router) { }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

}

