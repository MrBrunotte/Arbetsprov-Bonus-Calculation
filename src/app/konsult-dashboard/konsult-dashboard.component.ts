import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms'
import { KonsultModel } from './konsult-dashboard.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'konsult-dashboard',
  templateUrl: './konsult-dashboard.component.html',
  styleUrls: ['./konsult-dashboard.component.css']
})
export class KonsultDashboardComponent implements OnInit {

  formValue!: FormGroup;
  konsultModelObj: KonsultModel = new KonsultModel();
  konsulterData!: any;
  constructor(private router: Router, private formbuilder: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id : [''],
      firstName : [''],
      lastName : [''],
      startingDate : Date,
    })
    this.getAllKonsulter();
  }
  // POST konsult method
  postKonsultDetails() {
    this.konsultModelObj.firstName = this.formValue.value.firstName;
    this.konsultModelObj.lastName = this.formValue.value.lastName;
    this.konsultModelObj.startingDate = this.formValue.value.startingDate;

    this.api.postKunsult(this.konsultModelObj)
      .subscribe(res=> {
        console.log(res);
        alert("Konsulten är nu tillagd!")
        // ångra knappen, ångra referensen 
        let ref = document.getElementById('cancel')
        ref?.click();
        // reset form
        this.formValue.reset();
        this.getAllKonsulter();
      },
      err => {
        alert("Något gick fel, konsulten är ej tillagd!")
      })
  }

  // GET konsult method
  getAllKonsulter() {
    this.api.getKunsult()
      .subscribe(res => {
        this.konsulterData = res;
      })
  }
  //DELETE konsult
  deleteKonsult(row : any) {
    this.api.deleteKunsult(row.id)
      .subscribe(res => {
        alert("Konsulten är raderad!");
        this.getAllKonsulter()
      })
  }
}
