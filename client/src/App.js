import React, {useEffect} from 'react';
import { Router, Link } from '@reach/router';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {

  const [dogs, setDogs] = useState([])

  useEffect(() => {
      console.log('Fetching dogs at "/api/dogs"')
      axios.get('http://localhost:8002/api/dogs')
        .then((res) => {
          console.log(res);
          setDogs(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }, [])


  const hoverHandler = (e) => {
    e.preventDefault();

    axios.get()
  }


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Link to="/dog/{id}">Go to this dog.</Link>
      <Router>
        <CreateDog path="dog/new"/>
        <DogDetails path="dog/:id" />
      </Router>
    </div>
  );
}

export default App;
