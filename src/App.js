import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputChange, setInputChange] = useState("");

  const inputChangeHandler = (e) => {
    setInputChange(e.target.value);
  };

  const previousMonthHandler = () => {
    let date = inputChange;
    let splitingDate = date.split("-");
    let year = parseInt(splitingDate[0]);
    let month = parseInt(splitingDate[1]) - 1;
    let day = parseInt(splitingDate[2]);
    if(month === 0){
     year -= 1;
     month = 12;
    }

    // let previousMonthDate = `${year}`
    setInputChange(`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
  }
  
  const nextMonthHandler = () => {
    let date = inputChange;
    let splitingDate = date.split("-");
    let year = parseInt(splitingDate[0]);
    let month = parseInt(splitingDate[1]) + 1;
    let day = splitingDate[2];
    if(month === 13){
     year += 1;
     month = 12;
    }
    
    // let previousMonthDate = `${year}`
    setInputChange(`${year}-${String(month).padStart(2, '0')}-${day}`);
  }
  console.log(inputChange); 

  return (
    <div className="App">
          <button onClick={previousMonthHandler}>Previous</button>
          <input type="date" onChange={inputChangeHandler} value={inputChange}/>
          <button onClick={nextMonthHandler}>Next</button>
    </div>
  );
}

export default App;
