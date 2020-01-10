import React from 'react'

const Name =({person,handleDelete}) => {
    return (
        <div>
         {person.name}   {person.number} <button onClick={handleDelete}>delete</button>
        </div>
    )
}
export default Name