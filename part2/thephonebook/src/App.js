import React,{useState}from 'react';
import axios from 'axios'
import './App.css';
import Name from './Components/Name';
import Filter from './Components/Filter';
import AddNote from './Components/AddNote';
const baseUrl="http://localhost:3001/persons"

const  App =() => {
  const [persons, setPersons] = useState([])
  const [newName,setNewName]=useState(' ')
  const [newNumber,setNewNumber]=useState(' ')
  const [searchPerson,setSearchPerson]=useState('')
  
  React.useEffect(() =>{
  axios.get(baseUrl).then(response => {
    const person=response.data
    setPersons(person)

  })

  },[])
  
  //filter search
   const list = persons.filter((person) => person.name.toLowerCase().includes(searchPerson.toLowerCase())
)
 //filter search
  //rendering to the screen
const displayName= () => list.map((person)=><Name key={person.id}
 person={person} 
 handleDelete={()=>deleteNote(person.id)} 
/>)
const deleteNote = (id) => {
  const personData=persons.find(persons =>persons.id===id)
  const r=window.confirm(`Deleted ${personData.name} ?`)
  if (r) {
    const url=`${baseUrl}/${id}`
    axios.delete(url)
    const post =persons.filter(m =>m.id!==id)
    console.log(post)
    setPersons(post)
  }
    
}

 //adding notes
const addNote = (e) => {
  e.preventDefault();
  const NameObject = {
    name:newName,
    number:newNumber,
    }
    const check=persons.map(m => m.name===NameObject.name)
   
  if (check) {
   
    if(window.confirm(`${newName} is already exist`)){
      axios.post(baseUrl,NameObject).then(res =>{
        setPersons(persons.concat(res.data))
        }
      )
    }
    
  }
  
  
  
    
 
setNewName(' ')
setNewNumber(' ')

}

  return (
    <div className="App">
   <Filter
     value={searchPerson}
    handleSearch={setSearchPerson}
   />
    
    <h2>Phonebook</h2>
    <AddNote 
      addNote={addNote}
      newName={newName}
      handleNameInput={setNewName}
      newNumber={newNumber}
      handleNumberInput={setNewNumber}
      handleDelete= {deleteNote}
    />
    <h2>Numbers</h2>
    <div>{displayName()}</div>

      
    </div>
  );
  }

export default App;
