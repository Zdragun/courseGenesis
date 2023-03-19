import React from 'react'
import '../scss/skills.scss'
const Skills = ({ item }) => {
    return (
        <div className='skillscontainer'>
         {item.meta.skills ? (item.meta.skills?.map((skill, index) =><ul  key={index}><li>{'#'+skill}</li></ul>)):(<h2>No Skills required</h2>)}
        </div>
    )
}

export default Skills