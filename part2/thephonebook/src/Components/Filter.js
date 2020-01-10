import React from 'react'

export default function Filter({value,handleSearch}) {
    return (
        <div>
         Filter shown with
            <input 
            value={value}
            onChange={(e) => handleSearch(e.target.value)}/>
        </div>
    )
}
