import React, { useContext } from 'react'

import SearchContext from '../Context/SearchContext'

export default function Searchbar() {
    let { term, handleSearch } = useContext(SearchContext)

    return (
        <div>
            <form >
                <input type="text"
                    placeholder="Enter a search term here"
                    ref={term}
                ></input>
                <input type="submit"
                    onClick={(e) => handleSearch(e, term.current.value)}
                ></input>
            </form>
        </div>
    )
}