import React from 'react'

const Skills = ({ item }) => {
    return (
        <div>
            <h3>
                {item.meta.skills ? (item.meta.skills?.map((skill, index) => <ul key={index}><li>{skill}</li></ul>)):(<h2>No Skills required</h2>)}
            </h3>
        </div>
    )
}

export default Skills