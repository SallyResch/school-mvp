import {type QueryData} from '@supabase/supabase-js'
import {type Database } from "./database.types";
import { searchCourses } from './queries';

export type SearchResultType = QueryData<ReturnType<typeof searchCourses>>;