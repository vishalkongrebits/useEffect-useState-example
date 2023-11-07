import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import { useCallback, useMemo, useRef, useState } from 'react';
import WithoutHooksForm from './components/WithoutHooksForm';
import WithHooksForms from './components/WithHooksForms';

function App() {

  const [counter, setCounter] = useState(0)

  const [mountFirst, setmountFirst] = useState(true)
  const [mountSecond, setmountSecond] = useState(false)

  const [inputValue, setinputValue] = useState('')

  const inputRef = useRef('')



  // console.log("App component rendered");

  const handleMountFirst = () => {
    setmountSecond(false)
    setmountFirst(true)
  }

  const handleMountsecond = () => {
    setmountSecond(true)
    setmountFirst(false)
  }

  const handleInput = useCallback((e) => {
    setinputValue(e.target.value)
  },[])

  // console.log('inputValue',  inputRef.current.value)

  // const handleInputRef = (e) => {
  //   inputRef.current.value = e.target.value
  // }

  const firstComponentRenderer = useMemo(() => {
    return(
      <>
      {mountFirst && <FirstComponent/>}
      </>
    )
  },[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>Counter : {counter}</h1>
        <div>
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
          <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>

          {firstComponentRenderer}

        <SecondComponent/> */}

        {/* <div>
          <button onClick={handleMountFirst}>Toggle First Component</button>
          <button onClick={handleMountsecond}>Toggle Second Component</button>
        </div> */}
         {/* <h1>Input Text : {inputValue}</h1>

         <h1>Input Text using ref : {inputRef.current.value}</h1>

        <div>
          <input type="text" ref={inputRef} value={inputValue} style={{height:50,width:300,fontSize:30}} onChange={handleInput} placeholder='Enter Text'/>
        </div> */}

        {/* <WithoutHooksForm/> */}
        <WithHooksForms/>
      
      </header>
    </div>
  );
}

export default App;
