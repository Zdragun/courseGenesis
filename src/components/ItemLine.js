import React from 'react'
import Skills from './Skills'

const ItemLine = ({item}) => {
    return (
        <div>
            <div key={item.id}>
                <p>{item.title}</p>
                <h3>{item.lessonsCount}</h3>
                <h3>{item.rating}</h3>
                <h3>{item.meta.slug}</h3>
                <img src={item.previewImageLink + `/cover.webp`} alt={item.title} />
               <Skills item={item}/>
            </div>
        </div>
    )
}

export default ItemLine