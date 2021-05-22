import React, {useState, useEffect } from 'react';
import axios from 'axios'
import InputCity from './components/input'
import History from './components/history'
import ViewCity from './components/view'

function App() {
  const [cities, setCities] = useState([])
  const [currentCity, setCity] = useState(null)  
  const [pending, setPending] = useState(false)

  useEffect(() => {
    console.log(cities)
  }, [cities])  

  function addCity(city) {    
    setCities(prevState => [...prevState.filter((item) => {
      return item !== city.name
    }), city.name])
    setCity(city)    
    console.log(city)    
  }

  // function fetchInfo(city) {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4c839afeaa4d2c6f5f9539a1f9f3ae57`)
  //           .then(response => response.json())
  //           .then(cities => addCity(cities))
  //           .catch(() => alert('Ti durak?'))             
  // }

  function axiosInfo(city) {      
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4c839afeaa4d2c6f5f9539a1f9f3ae57`)
      .then(response => addCity(response.data))
      .catch(() => alert('Такого города нет'))
    
  }
  
  return (
    <div className="App">
      <div className="wrapper">
        <History cities={cities} postCity={axiosInfo}/>
        {currentCity && <ViewCity city={currentCity}/>}
      </div>
      <InputCity postCity={addCity} axiosInfo={axiosInfo}/>
    </div>
  );
}

export default App;
