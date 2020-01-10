import React,{useState} from 'react';

import './App.css';


const anecdotes =["Adding manpower to a late software project makes it later!",
"The best way to get a project done faster is to start sooner",
"How does a project get to be a year late?... One day at a tim",
"Plan to throw one (implementation) away; you will, anyhow.",
"Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away",
"Any fool can write code that a computer can understand. Good programmers write code that humans can understand"
]

const  App =() => {

  const[selected,setSelected]=useState([])
  const [points,setPoints]=useState(new Array(anecdotes.length).fill(0))

  const handleClick = () =>{
    setSelected(Math.floor(Math.random()*anecdotes.length))

  
  }
  const handleRateClick = () => {
   let vote=[...points]
   vote[selected]+=1
   setPoints(vote)
  
  }
  const mostVoted = () => {
    
    const indexHighestVote=points.indexOf(Math.max(...points))
    const highestVote=(Math.max(...points))
    return <div>{anecdotes[indexHighestVote]} has hightest value {highestVote}</div>

  }
  mostVoted()
  console.log(points)
  return (
    <div className="App">
    <div>
    {anecdotes[selected]} has {points[selected]} votes
    

    </div>
    <button onClick={handleClick}>next anecdots</button>
    <button onClick={handleRateClick}>rate</button>

    <h1>Anecdotes with most votes</h1>
{mostVoted()}
      
    </div>
  );
}

export default App;
