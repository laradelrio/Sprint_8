import { CanActivateFn, Router } from '@angular/router';
import { StarwarsApiService } from '../services/starwars-api.service';
import { inject } from '@angular/core';
import { take, tap } from 'rxjs';

export const authGuardGuard: CanActivateFn = () => {
  const starwarsApiService = inject(StarwarsApiService);
  const router = inject(Router);
  return starwarsApiService.validateToken$().pipe(
    take(1),
    tap((isValidToken: boolean) => 
    !isValidToken ? router.navigate(['/login']) : true ));
 
};
