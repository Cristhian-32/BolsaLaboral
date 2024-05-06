import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {

  realRole!: string;
  realRole2!: string;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //const expectedRole = route.data.expectedRole;
    const expectedRole = route.data?.["expectedRole"];
    // this.realRole = this.tokenService.isAdmin() ? 'admin' : 'user';
    // this.realRole2 = this.tokenService.isAdviser() ? 'adviser' : 'user';
    if (!this.tokenService.isLogged() || expectedRole.indexOf(this.realRole ) < 0 && expectedRole.indexOf(this.realRole2) < 0 ) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
