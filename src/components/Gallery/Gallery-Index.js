import React, { useContext } from 'react'

import GalleryItem from './Gallery-Item'

import DataContext from '../../Context/DataContext'

export default function Gallery() {
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}