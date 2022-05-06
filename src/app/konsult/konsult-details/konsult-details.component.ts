import { Component } from '@angular/core'
import { KonsultService } from '../shared/konsult.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  templateUrl: './konsult-details.component.html',
  styles: [`
    .container { padding: 0 20px;}
  `]
 })
export class KonsultDetailsComponent {
  konsult: any
  constructor(private konsultService: KonsultService, private route:ActivatedRoute) {

  }

  ngOnInit() {
    this.konsult = this.konsultService.getKonsult(+this.route.snapshot.params['id'])
  }
}
