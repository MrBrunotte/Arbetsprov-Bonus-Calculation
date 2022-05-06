import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'startsida',
  templateUrl: './startsida.component.html',
  styleUrls: ['./startsida.component.css']
})
export class StartsidaComponent implements OnInit {

  constructor(private router: Router) { }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }

}
