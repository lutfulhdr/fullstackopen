import React from 'react'

export default function AddNote(props) {
    return (
        <div>
            
    <form onSubmit={props.addNote}>
      <div>
        name: <input 
        value={props.newName}
        
        onChange={(e)=>props.handleNameInput(e.target.value)}/>
      </div>
      <div>number: <input 
        
        value={props.newNumber}
        onChange={(e)=>props.handleNumberInput(e.target.value)}
      /></div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
        </div>
    )
}
