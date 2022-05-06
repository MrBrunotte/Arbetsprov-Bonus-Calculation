import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'konsult-dashboard',
  templateUrl: './konsult-dashboard.component.html',
  styleUrls: ['./konsult-dashboard.component.css']
})
export class KonsultDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
