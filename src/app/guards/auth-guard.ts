import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  debugger;
  console.log('AuthGuard: Checking authentication status...');
  // Here you would typically check if the user is authenticated

  const router = inject(Router);

  const isLoggedIn = localStorage.getItem('angular20token');
  if(isLoggedIn != null)
  {
    return true;
  }
  else
  {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
