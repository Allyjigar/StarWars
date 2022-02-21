import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _userService: UserService, private router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this._userService.loginUser){
        return resolve (true);
      } else {
        Swal.fire(
          'Error',
          'You must be logged in to access this content',
          'error'
        );
        this.router.navigate(['/login']);
        return resolve (false);
      }
    });
  }
}
