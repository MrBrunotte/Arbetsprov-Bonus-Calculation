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
  constructor(private router: Router, private formbuilder: FormBuilder, private api: ApiService) {
    this.bonusAmount = 0;
    this.bonusPercentage = 0.05;
    this.netResult = 700000;
    this.displayNetResult = '0';
  }
  displayNetResult: string;
  netResult: number;
  bonusAmount: number;
  bonusPercentage: number;
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

  // get nettoresultat input from user
  getNettoResultatInput(netResult: any) {
    console.log(netResult)
    this.displayNetResult = netResult
  }
  // method to calculate total company bonus
  calculateBonus() {
    this.bonusAmount = Number(this.displayNetResult) * this.bonusPercentage
  }
}
