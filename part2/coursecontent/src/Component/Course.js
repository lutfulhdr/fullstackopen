import React from 'react'

const Course = ({course}) =>{
    

    const displayCourse= () =>{

        return course.map((data) =>{ 
            return(
            <div key={data.id}>
              <h1>{data.name} </h1>
              {data.parts.map((content) => <div key={content.id}>{content.name} {content.exercises}
              </div>)}
               <h1>Total of {data.parts.reduce((sum,value)=>
               sum+value.exercises,0)} exercises</h1>
               
            </div>
            
                ) 
        
        }
       
        )
    }
    
 
    
    return (
        <div>
        {displayCourse()}
            
        </div>
    )
}

export default Course;