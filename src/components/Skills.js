import React from 'react'

const Skills = ({ item }) => {
    return (
        <div>
            <h3 style={{ color: 'red' }}>
                {item.meta.skills?.map((skill,index)=><ul key={index}><li>{skill}</li> </ul>)}
            </h3>
        </div>
    )
}

export default Skills