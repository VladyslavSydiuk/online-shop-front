import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';



@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private router: Router,

  ) {}

  async canActivateChild() {
    const token = localStorage.getItem('token');

    if (!token) {
      await this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
