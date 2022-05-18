import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-thing',
  templateUrl: './table-thing.component.html',
  styleUrls: ['./table-thing.component.css']
})
export class TableThingComponent implements OnInit {
  total: number = 0;
  data: Some[] = [];
  mockData: any;


  constructor() {
    this.mockData = MockData;
  }

  ngOnInit(): void {
    this.calcSum(this.mockData)
  }

  calcSum(data: Some[]) {
    data.forEach(element => {
      this.total += element.value;
    });
  }

}

export interface Some {
  name: string;
  value: number;
}

export const MockData = [
  { name: 'John', value: 14 },
  { name: 'Mark', value: 1321 },
  { name: 'Ana', value: 95 },
  { name: 'Ove', value: 44 },
  { name: 'Pol', value: 142 }
];
