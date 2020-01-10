import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = props => <button onClick={props.handleClick}>{props.text}</button>
    

const Statistics = (props) => {
    if (props.all===0) {
        return <div>No feedback is given</div>
      
    } else {
    return (
            
        <div>
        <Statistic textGood ={'good'} valueGood={props.good}/>
        <Statistic textNeutral ={'neutral'} valueNeutral={props.neutral}/>
        <Statistic textBad ={'bad'} valueBad={props.bad}/>
        <Statistic textAll ={'all'} valueAll={props.all}/>
        <Statistic textAverage ={'average'} valueAverage={props.averageFeedback}/>
        <Statistic textPositive ={'positive'} valuePositive={props.positiveFeedbackPersent}/>
        
          
        </div>
    )
 
    }
}
const Statistic = (props) => {
    return (
        
        <table>
     
        <tbody>
        <tr>
            <td>{props.textGood}</td>
            <td>{props.valueGood}</td>
            <td>{props.textNeutral}</td> 
            <td>{props.valueNeutral}</td>
            <td>{props.textBad} {props.valueBad}</td>
            <td>{props.textAll} {props.valueAll}</td>
            <td>{props.textAverage} {props.valueAverage}</td>
            <td>{props.textPositive} {props.valuePositive}</td>
            </tr>
        </tbody>
            

            </table>
            
        
    )

}

const App = () =>{
      
    const [good,setGood]= useState(0)
    const [neutral,setNeutral]= useState(0)
    const [bad,setBad]= useState(0)
    const total =(good+neutral+bad)
    
   const averageFeedback= total/3
   const positiveFeedbackPersent=(good/total*100)

  

    const handleClickGood = () => setGood(good+1)
    
    const handleClickNeutral = () =>setNeutral(neutral+1)

    const handleClickbad = () => setBad(bad+1)
    
    return (

        <div>
            <h1>Give feedback</h1>
            <Button handleClick={handleClickGood} text={'good'}/>
            <Button handleClick={handleClickNeutral} text={'neutral'}/>
            <Button handleClick={handleClickbad} text={'bad'}/>
            <h1>Statistics</h1>
            <Statistics good={good}
                bad={bad}
                neutral={neutral}
                all={total}
                averageFeedback={averageFeedback}
                positiveFeedbackPersent={positiveFeedbackPersent}
            />
          
           
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

