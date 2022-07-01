import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class MedicalAssistGuard implements CanActivate {
  constructor(private router: Router, private token: TokenStorageService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const role = this.token.getUser().roles;
    console.log(role);

    const medicalAssist = 'MEDICAL_ASSIST';

    if (role && role[0] === medicalAssist) {
      return true;
    } else {
      this.router.navigate(['notfound']);
      return false;
    }
  }
}
