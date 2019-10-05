import { createAction, props } from '@ngrx/store';
import { User } from './model/user.model';

export const login = createAction(
  '[Login page] User login',
  props<{ user: User }>()
);

export const logout = createAction('[Top Menu] Logout');
