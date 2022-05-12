import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { KonsultModel } from '../konsult-dashboard/konsult-dashboard.model';

@Component({
  selector: 'bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent implements OnInit{
  constructor(private router: Router, private formbuilder: FormBuilder, private api: ApiService) { }

  formValue!: FormGroup;
  konsultModelObj: KonsultModel = new KonsultModel();
  konsulterData!: any;

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      startingDate: Date,
      hours: [''],
    })
    this.getAllKonsulter();
  }
  // POST Nettoresultat
  postNettoResultat() {

  }

  // POST konsult debiterade timmar
  //postKonsultBonus() {
  //  this.konsultModelObj.hours = this.formValue.value.hours;

  //  this.api.postKonsult(this.konsultModelObj)
  //    .subscribe(res => {
  //      alert("Debiterade timmar är nu tillagda!")
  //      // ångra knappen, ångra referensen 
  //      let ref = document.getElementById('cancel')
  //      ref?.click();
  //      // reset form
  //      this.formValue.reset();
  //      this.getAllKonsulter();
  //    },
  //      err => {
  //        alert("Något gick fel, timmarna är ej tillagda!")
  //      })
  //}

  //EDIT konsult debiterade timmar
  onEdit(row: any) {
    this.konsultModelObj.id = row.id;

    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['startingDate'].setValue(row.startingDate);
    this.formValue.controls['hours'].setValue(row.hours);
  }
  updateKonsultDetails() {
    this.konsultModelObj.firstName = this.formValue.value.firstName;
    this.konsultModelObj.lastName = this.formValue.value.lastName;
    this.konsultModelObj.startingDate = this.formValue.value.startingDate;
    this.konsultModelObj.hours = this.formValue.value.hours;

    this.api.updateKunsult(this.konsultModelObj, this.konsultModelObj.id)
      .subscribe(res => {
        alert("Konsultens timmar är nu uppdaterade!");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllKonsulter();
      })
  }

  // GET konsult method
  getAllKonsulter() {
    this.api.getKunsult()
      .subscribe(res => {
        this.konsulterData = res;
      })
  }
}
