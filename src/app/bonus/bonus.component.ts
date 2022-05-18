import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  konsulterData: KonsultModel[] = [];
  displayNetResult: string;
  netResult: number;
  Bonuspott: number;
  totalBonusHours: number;
  debHours: number;
  bonusPercentage: number;
  lojFactor: number;
  startingDate!: Date;
  formValue!: FormGroup;
  konsultModelObj: KonsultModel = new KonsultModel();
  constructor(private router: Router, private formbuilder: FormBuilder, private api: ApiService) {
    this.Bonuspott = 0;
    this.totalBonusHours = 0
    this.lojFactor = 0;
    this.bonusPercentage = 0.05;
    this.debHours = 0;
    this.netResult = 0;
    this.displayNetResult = '0';
    this.konsultModelObj.startingDate;
  }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      startingDate: Date,
      debHours: [''],
    })
    this.getAllKonsulter();
    
  }
  // hämta konsult för att lägga till timmar
  onEdit(row: any) {
    this.konsultModelObj.id = row.id;

    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['startingDate'].setValue(row.startingDate);
    this.formValue.controls['debHours'].setValue(row.debHours);
  }
  //EDIT konsult debiterade timmar
  updateKonsultDetails() {
    this.konsultModelObj.firstName = this.formValue.value.firstName;
    this.konsultModelObj.lastName = this.formValue.value.lastName;
    this.konsultModelObj.startingDate = this.formValue.value.startingDate;
    this.konsultModelObj.debHours = this.formValue.value.debHours;

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
        this.calculateTotalBonusHours(this.konsulterData)
      })
  }

  // get nettoresultat input from user
  getNettoResultatInput(netResult: any) {
    console.log(netResult)
    this.displayNetResult = netResult
  }

  // method to calculate total company bonus
  calculateTotalBonus() {
    this.Bonuspott = Number(this.displayNetResult) * this.bonusPercentage
  }

  // calculate total bonus hours
  calculateTotalBonusHours(konsulter: any) {
    this.totalBonusHours = 0;
    for (var i = 0; i < konsulter.length; i++) {
      let konsult = konsulter[i]
      this.totalBonusHours += this.calculateEmploymentDays(konsult.startingDate) * konsult.debHours
    } 
  }

  // räkna ut dagar sedan anställning
  calculateEmploymentDays(sinceStartDate:any) {
    
    let dateStart = new Date(sinceStartDate)    // hämtar startdatum för konsult
    let dateToday = new Date()                  // hämtar dagens datum
    let daysDiff = Math.abs(dateToday.getTime() - dateStart.getTime())     // räknar ut skillnaden i dagar mellan anställningsdatum och dagensdatum
    let days = Math.floor(daysDiff / 86400000);    // Calculate days (1000*3600*24=86400000)

    // IF-statement checks lojalty factor from starting date
    if (days < 365)                        // > Anställd mindre än 1 år
      return 1
    else if (days >= 365 && days < 730)     // Anställd 1 år
      return 1.1    
    else if (days >= 730 && days < 1095)    // Anställd 2 år
      return 1.2    
    else if (days >= 1095 && days < 1460)    // Anställd 3 år
      return 1.3    
    else if (days >= 1460 && days < 1825)   // Anställd 4 år
      return 1.4
    else
      return 1.5                           // Anställd 5 år eller längre
  }

  // räkna ut lojalitetsfaktor
  calculateLojFactor(days:any) {
    this.lojFactor = this.calculateEmploymentDays(days)
    //console.log(this.lojFactor)
    return this.lojFactor
  }
}


