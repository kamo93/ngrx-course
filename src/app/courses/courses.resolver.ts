import { areCoursesLoaded } from './courses.selectors';
import { first, finalize, tap, filter } from 'rxjs/operators';
import { loadAllCourses } from './course.action';
import { AppState } from './../reducers/index';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Store, select } from '@ngrx/store';

@Injectable()
export class CoursesResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areCoursesLoaded),
      tap(coursesLoaded => {
        if (!this.loading && !coursesLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllCourses());
        }
      }),
      filter(coursesLoaded => coursesLoaded),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
