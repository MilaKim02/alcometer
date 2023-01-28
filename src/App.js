import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0)
  const [gender, setGender] = useState("male")
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [result, setResult] = useState(0)
  


  function handleSubmit(e) {
    e.preventDefault();
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
    let resultMale = gramsLeft / (weight * 0.7)
    let resultFemale = gramsLeft / (weight * 0.6)
    let count = 0


    if (gender === 'male') {
    count = resultMale
    }
    if (gender === 'female'){
      count = resultFemale
    }
    if (count < 0 ){
      count = 0
    }
    
      setResult(count)
  }
    


  return (
    <>
    <h3>Alcometer</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight:</label>
        <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Gender:</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input><label>Male</label>
        <input type="radio" name="gender" value="female"onChange={e => setGender(e.target.value)}></input><label>Female</label>
      </div>
      <div>
        <label>Number of beer bottles drunk:</label>
        <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div>
        <label>Time:</label>
       <select name="time" value={time} onChange={e => setTime(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
       </select>
      </div>
      <div>
      <output>{result.toFixed(1)}</output>
      </div>
      <div>
      <button>Calculate</button>
      </div>
   </form>
    
    </>
    
  );
}

export default App
