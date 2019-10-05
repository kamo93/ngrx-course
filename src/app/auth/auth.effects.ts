import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { filter, tap } from 'rxjs/operators';
import { login } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {
    const login$ = this.actions$.pipe(
      ofType(login),
      tap(action => {
        localStorage.setItem('user', JSON.stringify(action.user));
      })
    );
    login$.subscribe();
  }
}
