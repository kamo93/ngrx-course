import { User } from '../model/user.model';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import * as AuthActions from '../action-types';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    console.log('this is an login reducer');
    return {
      user: action.user
    };
  }),
  on(AuthActions.logout, (state, action) => ({
    user: undefined
  }))
);
