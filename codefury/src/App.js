import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
function App() {
  const [workers, setWorkers] = useState([]);
  useEffect(() => {
   fetch("http://127.0.0.1:5000/labourData").then(res=>res.json()).then(data=>console.log(data.workers))
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
