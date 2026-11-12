"use client"

import { searchCourses } from "@/lib/supabase/queries"
import { SearchResultType } from "@/lib/supabase/types"
import Link from "next/link"
import { SetStateAction, useState } from "react"

const Search = () => {
    const [input, setInput] = useState<string>('')
    const [searchResults, setSearchResult] = useState<SearchResultType | null>(null)
    const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
        setInput(e.target.value)
    }

    const handleClick = async () => {
        const { data, error } = await searchCourses(input)
        //console.log("Error: ", error)
        setSearchResult(data)
    }

    return (
        <div className="flex flex-col justify-center items-center mt-2">
            <div className="flex flex-col items-center md:flex md:flex-row">
                <input className="border py-1 px-2 bg-white border-lightGreen rounded" onChange={handleChange} type="text" placeholder="Search for course" value={input} />
                <button className="border rounded m-2 px-2 bg-gold font-semibold w-fit hover:cursor-pointer" onClick={handleClick}>Search</button>
            </div>
            {searchResults &&
                <div className="flex flex-col  text-lightOrange">
                    <h3 className="font-semibold">SearchResult:</h3>
                    {searchResults.map((result, index) => <Link className="underline" key={index} href={`/teacher/courses/${result.slug}`}>{result.name}</Link>)}
                </div>}
        </div>
    )
}

export default Search