import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'konsult-thumbnail',
  templateUrl: './konsult-thumbnail.components.html',
  styleUrls: ['./konsult.component.css']
})

export class KonsultThumbnailComponent {
  constructor(private router: Router) { }

  @Input() konsult: any
  @Output() eventClick = new EventEmitter()

  handleClickMe() {
    this.eventClick.emit('foo')
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}

