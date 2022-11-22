import React, { useState } from "react";
import './index.css';

function App() {

  //state
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi,setBmi] = useState('')
  const [message,setMessage] = useState('')

  // Logic for calculating BMI
  let calBMI = (e)=>{
    //prevent submit
    e.preventDefault();

    if (weight ===0 || height === 0)
    {
      alert('Please Enter valid Values')
    }
    else
    {
      let bmi = (weight / ((height/100)*(height/100)))
      setBmi(bmi.toFixed(1))


      //logic for message

      if(bmi < 25){
        setMessage('You are UnderWeight')
      }
      else if (bmi >=25 && bmi<30){
        setMessage('You are Healthy')
      }
      else{
        setMessage('You are OverWeight')
      }
    }
  }


  
  // Logic for reload Button
  let reload = ()=>{
    window.location.reload();
  }

  let imgsrc =''

  if(bmi <= 0){
    imgsrc = null
  }
  else {
    if(bmi < 25){
      imgsrc = require('../src/asset/underweight.jpg')
    }
    else if (bmi >=25 && bmi < 30){
      imgsrc = require('../src/asset/healthy.jpg')
    }
    else{
      imgsrc = require('../src/asset/overweight.jpg')
    }
  }


  return (
    <div className="App">
     <div className="container">
        {/* Heading  */}
        <h2 className="center">BMI CALCULATOR</h2>
        
        {/* our main input section where we take data from user */}
        <form onSubmit={calBMI}>
          <div>
            <label>Weight (Kg)</label>
            <input value={weight} onChange={(event)=> setWeight(event.target.value)} />
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(event)=> setHeight(event.target.value)} />
          </div>
        {/* button container */}
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-reload" type="submit" onClick={reload}>Reload</button>
          </div>
        </form>

                {/* here we display our output */}
                <div className="center">
                      <h3>Your BMI is: {bmi}</h3>
                      <p>{message}</p>
                </div>
          
          
          <div className="img-container">
            <img src={imgsrc} alt=''></img>
          </div>
     </div>
    </div>
  );
}

export default App;
