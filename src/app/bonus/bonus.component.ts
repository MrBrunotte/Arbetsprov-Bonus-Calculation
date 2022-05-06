import { Component } from '@angular/core'
import { Router} from '@angular/router'

@Component({
  selector: 'bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent {
  constructor(private router: Router) { }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
