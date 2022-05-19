import { Component, OnInit } from '@angular/core';
import { IKonsult } from '../Interfaces/table-thing';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {
  konsulter: IKonsult[] = [];
  

  constructor() { }

  ngOnInit(): void {
  }

}
