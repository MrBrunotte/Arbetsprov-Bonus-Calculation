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
    dateToday: any;
    startDate: any;
    day: any;
  constructor(private router: Router, private formbuilder: FormBuilder, private api: ApiService) {
    this.bonusAmount = 0;
    this.bonusPercentage = 0.05;
    this.netResult = 700000;
    this.displayNetResult = '0';
    this.konsultModelObj.startingDate;
  }
  displayNetResult: string;
  netResult: number;
  bonusAmount: number;
  bonusPercentage: number;
  startingDate!: Date;
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
        //alert("Konsultens timmar är nu uppdaterade!");
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
    /*this.dayDiff(this.startingDate, Date.now):number*/
  }

  // räkna ut dagar sedan anställning
  calculateEmploymentDays(dataDate:any) {
    //console.log('Anställningsdatum ',dataDate)
    // hämtar startdatum för konsult
    let startDate = new Date(dataDate)
    this.startDate = Math.abs(startDate.getDay())
    //console.log('GetTime() startDate: ', startDate.getTime())

    // hämtar dagens datum
    let dateToday = new Date()
    //console.log('GetTime() DateDate: ', dateToday.getTime())

   // räknar ut skillnaden i dagar mellan anställningsdatum och dagensdatum
    let diffDay = Math.abs(dateToday.getTime() - startDate.getTime())
    let days = Math.floor(diffDay / 86400000); // day calculate (1000*3600*24=86400000)
    //console.log('Skillnad i dagar', days)

    // > 1 year
    if (days < 365 ) {
      console.log("LF 1")
      return 1
    }
    // 1 year < and > 2 years
    if (days > 365 && days < 730) {
      console.log("LF 1,1")
      return 1.1
    }
    // 2 year < and > 3 years
    if (days > 730 && days < 1095) {
      console.log("LF 1,2")
      return 1.2
    }
    // 4 year < and > 4 years
    if (days > 730 && days < 1095) {
      console.log("LF 1,3")
      return 1.3
    }
    // 4 year < and > 5 years
    if (days > 1095 && days < 1460) {
      console.log("LF 1,4")
      return 1.2
    }
    // 5 years <
    else
      console.log("LF 1,5")
      return 1.5
  }

  // lojalitetsfaktor
  //lojaltyFactor() {

  //  switch (this.day) {
  //    case 1:
  //      if (this.day < 365) {
  //        console.log("Lojalitetsfaktor = 1")
  //      }
  //      break;
  //    case 2:
  //      if (this.day < 365) {
  //        console.log("Lojalitetsfaktor = 2")
  //      }
  //      break;
  //  }
  //}

}

function dataDate(dataDate: any, any: any) {
    throw new Error('Function not implemented.');
}
