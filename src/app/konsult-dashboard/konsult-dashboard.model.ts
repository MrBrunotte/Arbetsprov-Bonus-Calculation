import { Data } from "@angular/router";

export class KonsultModel {
  id: number = 0;
  firstName : string = '';
  lastName : string = '';
  startingDate!: Date;
  hours: number = 0;
}

// behöver jag denna?
export class BonusModel {
  bonusAmount: number = 0;
  bonusPercentage: number = 0;
  netResult: number = 0;
  
}
