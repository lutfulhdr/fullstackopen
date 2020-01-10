import React,{useState}from 'react';
import axios from 'axios'
import './App.css';
const api_key='f5ac75a735988b8c19e2bec4632aa6c0'

const App =() => {
  const [countryName,setCountryName]=useState([])
  const [searchCountry,setSearchCountry]=useState('')
  const [filteredCountry,setFilteredCountry]=useState([])
  const [weather ,setWeather]=useState([])
  
  console.log(weather)
  

  React.useEffect(() => {
axios.get('https://restcountries.eu/rest/v2/all').then(response => {
const countries=response.data

setCountryName(countries)
})

  
  }, [])
  
  React.useEffect(() => {
    if (filteredCountry.length===1) {
      const data2= `http://api.weatherstack.com/current?access_key=${api_key}&query=${filteredCountry.map((m)=>m.capital)}`
      axios.get(data2).then(response1 => {
        const weatherData=response1.data
        console.log(weatherData)
        setWeather([
          ...weather,
          {
            temperature:weatherData.current.temperature,
            location:weatherData.location.name,
            iconUrl:weatherData.current.weather_icons,
            windSpeed:weatherData.current.wind_degree,
            windDirection:weatherData.current.wind_dir
          }
        ])
         

         })
    } 
      
    
    
    }, [filteredCountry])
      
  React.useEffect(() => {
    const filter=countryName.filter((data) =>data.name.toLowerCase().includes(searchCountry.toLowerCase()))

    setFilteredCountry(filter)

  },[countryName,searchCountry])
  
 const handleSearch = (e) => {
    setSearchCountry(e.target.value)
    console.log(searchCountry)

  }
  
  
  const display = () =>{
    
    if(filteredCountry.length>1 && filteredCountry.length<10){
     return filteredCountry.map((cname,i) => <h1 key={cname.name[i]}>{cname.name}<button>{'show'}</button></h1>)
  }else if (filteredCountry.length===1){
    
    return filteredCountry.map((cname,i) => <div key={cname.name[i]}>capital:{cname.capital}
  
      
    <h3>Languages</h3>
    <ul>
      {cname.languages.map((lang) => <li>{lang.name}</li>)}
    </ul>
    <img src={cname.flag} alt={'flag'}/>
    </div>) 
    
     
  } else {
    return <p>Too many</p>
  }
  }
  const displayWeather = () => {
    return weather.map((datas)=> <div>
      <h2>temperature in {datas.location}</h2>
       <h3>temperature:</h3>{datas.temperature} Celsius
       <img src={datas.iconUrl} alt={'icon'}/>
       <h4>Wind:</h4> {datas.windSpeed}kmph {datas.windDirection}
    </div>)
    
  } 
  
  return (
    <div className="App">
    find countries
    <input 
      onChange= {handleSearch}
      value={searchCountry}
    />
    {display()}
    <div>
      {displayWeather()}
    </div>
    </div>
  );
}

export default App;
