import {type QueryData} from '@supabase/supabase-js'
import {type Database } from "./database.types";
import { getAllCourses, searchCourses } from './queries';

export type AllCoursesType = QueryData<ReturnType<typeof getAllCourses>>;
export type SearchResultType = QueryData<ReturnType<typeof searchCourses>>;