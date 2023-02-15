import React, { useState } from 'react'

export default function Searchbar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
            <form>
                <input type="text" placeholder="Enter a search term here"></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}