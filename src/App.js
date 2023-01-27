import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(90)
  const [gender, setGender] = useState("male")
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [result, setResult] = useState(0)
  return (
    <>
    <h3>Alcometer</h3>
    <form>
      <div>
        <label>Weight:</label>
        <input name="weight" type="number" step="1"></input>
      </div>
      <div>
        <label>Gender:</label>
        <input type="radio" name="gender" value="male" defaultChecked ></input><label>Male</label>
        <input type="radio" name="gender" value="female"></input><label>Female</label>
      </div>
      <div>
        <label>Number of beer bottles drunk:</label>
        <select name="bottles">
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
       <select name="time">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
       </select>
      </div>
      <div>
      <output></output>
      </div>
      <button>Calculate</button>
   </form>
    
    </>
    
  );
}

export default App;
