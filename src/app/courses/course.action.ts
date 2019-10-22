import { Course } from './model/course';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
export const loadAllCourses = createAction(
  '[Courses Resolver] Load all courses'
);

export const allCoursesLoaded = createAction(
  '[Load Courses Effect] All courses Loaded',
  props<{ courses: Course[] }>()
);

export const courseUpdate = createAction(
  '[Edit Course Dialog] Course Updated',
  props<{ update: Update<Course> }>()
);
