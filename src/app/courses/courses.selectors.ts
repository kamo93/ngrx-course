import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './reducers/course.reducers';
import * as fromCoursesReducer from './reducers/course.reducers';
import { AppState } from '../reducers';

export const selectCoursesState = createFeatureSelector<CoursesState>(
  'courses'
);

export const selectAllCourses = createSelector(
  selectCoursesState,
  fromCoursesReducer.selectAll
);

export const selectBeginnerCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.category === 'ADVANCED')
);

export const selectPromoTotal = createSelector(
  selectAllCourses,
  courses => courses.filter(course => course.promo).length
);

export const areCoursesLoaded = createSelector(
  selectCoursesState,
  courses => courses.allCoursesLoaded
);
