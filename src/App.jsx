import { useEffect, useState } from 'react'


import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count !== null) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 500);

      return () => clearTimeout(timer); 
    }
  }, [count]);

  return (
   <div>
   <div style={{minHeight:"50px"}}>
   <h2>{count}</h2>
   </div>
    <button onClick={()=> setCount(null)}>Reset</button>
    <button onClick={()=> setCount(0)}>Restart</button>
   </div>
  )
}

export default App
