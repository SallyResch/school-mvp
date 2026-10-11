import {type QueryData} from '@supabase/supabase-js'
import { getAllAssignments, getAllCourses, searchCourses } from './queries';

export type AllCoursesType = QueryData<ReturnType<typeof getAllCourses>>;
export type AllAssignmentsType = QueryData<ReturnType<typeof getAllAssignments>>;
export type SearchResultType = QueryData<ReturnType<typeof searchCourses>>;