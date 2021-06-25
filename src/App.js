import React,{useState, useMemo} from 'react';
import './App.css';
import ComponentA from './components/ComponentA';

function App() {

  const [countA, setCountA] = useState(0)

  const increment =() =>{
    setCountA( countA + 1)
  }

  const memoComponentA = useMemo (() => {
    return <ComponentA />
  }, [])
  return (
    <div className="App">
      <p>
        App js count A: {countA}
      </p>
      <button onClick={increment}>Increment</button>
      <p></p>
      {memoComponentA}
    </div>
  );
}

export default App;
