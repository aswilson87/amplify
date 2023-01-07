import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
  const [poof, setPoof] = useState(null)

  useEffect(() => {
    axios.get('https://random-data-api.com/api/v2/users').then(r => r.data).then(data => setPoof(data.id))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is our app to test Amplify service!
          { poof }
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
