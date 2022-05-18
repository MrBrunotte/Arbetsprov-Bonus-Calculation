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
  konsulterData!: any[];
  showLTBtn!: boolean;
  showUDBtn!: boolean;
  constructor(private router: Router, private formbuilder: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
   
    this.formValue = this.formbuilder.group({
      id : [''],
      firstName : [''],
      lastName : [''],
      startingDate: Date,
      debHours : [''],
    })
    this.getAllKonsulter();
  }
  // Hide Lägg till button method
  clickAddKonsult() {
    this.formValue.reset();
    this.showLTBtn = true;
    this.showUDBtn = false;
  }
  
  // POST konsult method
  postKonsultDetails() {
    this.konsultModelObj.firstName = this.formValue.value.firstName;
    this.konsultModelObj.lastName = this.formValue.value.lastName;
    this.konsultModelObj.startingDate = this.formValue.value.startingDate;

    this.api.postKonsult(this.konsultModelObj)
      .subscribe(res=> {
        //alert("Konsulten är nu tillagd!")
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
  deleteKonsult(row: any) {
    console.log(`delete ${row.id}`);
    this.api.deleteKunsult(row.id)
      .subscribe(res => {
        //alert("Konsulten är raderad!");
        this.getAllKonsulter();
      })
  }
  //EDIT konsult
  onEdit(row: any) {
    this.showLTBtn = false;
    this.showUDBtn = true;

    this.konsultModelObj.id = row.id;

    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['startingDate'].setValue(row.startingDate);
  }
  updateKonsultDetails() {
    this.konsultModelObj.firstName = this.formValue.value.firstName;
    this.konsultModelObj.lastName = this.formValue.value.lastName;
    this.konsultModelObj.startingDate = this.formValue.value.startingDate;

    this.api.updateKunsult(this.konsultModelObj, this.konsultModelObj.id)
      .subscribe(res => {
        //alert("Konsulten är uppdaterad!");
        let ref = document.getElementById('cancel')
        ref?.click();
       this.formValue.reset();
        this.getAllKonsulter();
      })
  }
}


