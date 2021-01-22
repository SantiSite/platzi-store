import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService } from './core/service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  // tmrReady = setInterval(this.isPageFullLoaded, 100);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  // isPageFullLoaded() {
  //   if (document.readyState === 'complete' || document.readyState === 'interactive') {
  //     this.hideShowService.hideShowIn();
  //     this.hideShowService.hideShowContainerIn();
  //     clearInterval(this.tmrReady);
  //   }
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.stateUser().pipe(
      map(user => user !== null ),
      tap(stateUser => {
        if (stateUser === false) {
          this.router.navigate(['/home']);
          if (document.readyState === 'complete') {
            alert('Inicia sesión para acceder a esta ruta');
          }
        }
      })
    );
  }

}
