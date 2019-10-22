import { Course, compareCourses } from './../model/course';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CoursesActions } from '../action-types';

/* export interface CourseState {
  entities: { [key: number]: Course };
  ids: number[];
} */

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
  selectId: course => course.id
});

export const initialCourses = adapter.getInitialState({
  allCoursesLoaded: false
});

export const coursesReducer = createReducer(
  initialCourses,
  on(CoursesActions.allCoursesLoaded, (state, action) =>
    adapter.addAll(action.courses, { ...state, allCoursesLoaded: true })
  ),
  on(CoursesActions.courseUpdate, (state, action) =>
    adapter.updateOne(action.update, state)
  )
);

export const { selectAll } = adapter.getSelectors();
