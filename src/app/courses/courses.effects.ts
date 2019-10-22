import { allCoursesLoaded } from './course.action';
import { concatMap, map, mergeMap } from 'rxjs/operators';
import { CoursesHttpService } from './services/courses-http.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { CoursesActions } from './action-types';

@Injectable()
export class CoursesEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.loadAllCourses),
      concatMap(action => this.coursesHttpService.findAllCourses()),
      map(courses => allCoursesLoaded({ courses }))
    )
  );
  saveCourses$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoursesActions.courseUpdate),
        mergeMap(action =>
          this.coursesHttpService.saveCourse(
            action.update.id,
            action.update.changes
          )
        )
      ),
    {
      dispatch: false
    }
  );
  constructor(
    private actions$: Actions,
    private coursesHttpService: CoursesHttpService
  ) {}
}
