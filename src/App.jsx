
import { useState } from 'react'
import './App.css'
var isSqrt = false;
function App() {
  
  const [Calc, setCalc] = useState("");
  const [Res, setRes] = useState("");

  const ops=['+', '-', '*', '/']
  const digits=[1, 2, 3, 4, 5, 6, 7, 8, 9]
  const opS = ["+", "-", "*", "/", "."];
  const deleteLast = () => {
    if (Calc == "") {
        return;
    }

    const value = Calc.slice(0, -1);

    setCalc(value);
};

  const updateCalc = value =>{
    
    if (
        (opS.includes(value) && Calc === "") ||
        (opS.includes(value) && opS.includes(Calc.slice(-1)))
    ) {
        return;
    }

    setCalc(Calc + value);

    {/*if (!ops.includes(value)) {
        setRes(eval(Calc + value).toString());
    }*/}
  }

  const calculate = () =>{
    setCalc(eval(Calc).toString());
  }

  const resetAll = () => {
    setRes("");
    setCalc("");
  }

  const updateSqrt = () => {
    
    if(isSqrt==false){
      updateCalc('Math.sqrt(');
      isSqrt = true;
    } else if (isSqrt == true ){
      updateCalc(')');
      isSqrt = false;
    }
    


  }
  return(
    <div className="Screen">
      <div className="Result">
        {Res ? <span>({Res})</span> : ""}
        {Calc || "0"}
      </div>
      <div className="ops"> {/*operator*/}
        {
          ops.map(op => (
            <button onClick={() => updateCalc(op)}>{op}</button>
          ))
        }
      </div>

      <div className="digits"> {/*digits*/}
        {
          digits.map(digit => (
            <button onClick={() => updateCalc(digit.toString())}>{digit}</button>
          ))
        }
        <button onClick={() => updateCalc('.')}>.</button>
        <button onClick={() => updateCalc('0')}>0</button>
      </div>
      <div>
        <button onClick={calculate}>=</button>
      </div>
      <div>
        <button onClick={deleteLast}>Del</button>
      </div>
      <div>
        <button onClick={resetAll}>E</button>
      </div>
      <div>
        <button onClick={updateSqrt}>sqrt(x)</button>
      </div>
    </div>

  )
}

export default App
