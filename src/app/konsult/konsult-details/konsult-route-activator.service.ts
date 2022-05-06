import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { KonsultService} from '../shared/konsult.service';


@Injectable()
export class KonsultRouteActivator implements CanActivate {
  constructor(private konsultService:KonsultService, private router:Router) {}
  
  canActivate(route:ActivatedRouteSnapshot):any {
    const konsultExists = !!this.konsultService.getKonsult(+route.params['id'])
    console.log(route.params['id'])

    if (!konsultExists) {
      this.router.navigate(['/404'])
     return konsultExists
    }
  }
}
