import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { KonsultService } from './shared/konsult.service';

@Component({
  template: `
    <button class="btn myBtn myBtnCreate mt-2 mb-2" [routerLink]="['/konsulter/ny']">Skapa ny konsult</button>
  
    <div class="row align-items-start myBorder">
      <div class="col konsultHeader">Konsult Id</div>
      <div class="col konsultHeader">Förnamn</div>
      <div class="col konsultHeader"> Efternamn</div>
      <div class="col konsultHeader">Startdatum</div>
      <div class="col konsultHeader">Ändra konsult</div>
      <div class="col konsultHeader">Radera konsult</div>
    </div>
  
      <konsult-thumbnail *ngFor="let konsult of konsulter" [konsult]="konsult"></konsult-thumbnail>
    <button class="btn myBtn myBtnHome" (click)="goToPage('/')"><< Tillbaka till start</button>
`,
  styleUrls: ['./konsult.component.css']
})
export class KonsultComponent implements OnInit {
  konsulter: any[] = [];

  constructor(private router: Router, private konsultService: KonsultService) {}

  ngOnInit() {
    this.konsulter = this.konsultService.getKonsulter()
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
  
}


