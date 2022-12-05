import { useState } from 'react'
import iconDice from "./images/icon-dice.svg"
import './App.css'
import CardAdvice from './componentes/card-advice'

function App() {

  const [advices, setAdvices] = useState({ id: "", advice: "Click the button below to generate an advice" })
  function fetchData() {
    const url = "https://api.adviceslip.com/advice"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAdvices({
          id: data.slip.id,
          advice: data.slip.advice
        })
      })
      .catch(error => console.log("Infelizmente ocorreu um erro na aplicação: " + error))
  }
  return (
    <div className="App">
      <div className="container">
        <CardAdvice id={advices.id} advice={advices.advice} />
        <button onClick={fetchData}><img src={iconDice} alt="" /></button>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://karlamilenna.netlify.app/">Karla Milenna</a>.
      </div>
    </div>
  )
}

export default App
