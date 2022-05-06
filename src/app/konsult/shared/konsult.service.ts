import { Injectable } from '@angular/core'

@Injectable()
export class KonsultService {
  getKonsulter() {
    return KONSULTER
  }
  getKonsult(id:number) {
    return KONSULTER.find(konsult => konsult.id === id)
  }
}

const KONSULTER = [
  {
    id: 1,
    firstName: "Stefan",
    lastName: "Brunotte",
    startingDate: "2022\-04\-01"
    },
  {
    id: 2,
    firstName: "Peter",
    lastName: "Karlsson",
    startingDate: "2021\-12\-01"
    },
  {
    id: 3,
    firstName: "Eva",
    lastName: "Grundel",
    startingDate: "2019\-05\-12"
    },
  {
    id: 4,
    firstName: "Gina",
    lastName: "Aguilera",
    startingDate: "2021\-01\-01"
    },
  {
    id: 5,
    firstName: "Nina",
    lastName: "Pratt",
    startingDate: "2020\-09\-20"
    },
  {
    id: 6,
    firstName: "Johan",
    lastName: "Person",
    startingDate: "2020\-06\-05"
    }
  ,
  {
    id: 7,
    firstName: "Julia",
    lastName: "Dahlberg",
    startingDate: "2020\-06\-01"
    }
]
