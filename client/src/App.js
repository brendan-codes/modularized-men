import React, {useEffect, useState} from 'react';
import { Router, Link } from '@reach/router';
import axios from 'axios';
import Dogs from './views/Dogs';
import NewDog from './views/NewDog';
import ShowDog from './views/ShowDog';
import EditDog from './views/EditDog';

function App() {

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
      console.log('Fetching dogs at "/api/dogs"')
      getDogs();
    }, [])


  const getDogs = () => {
    axios.get('http://localhost:8002/api/dogs')
    .then((res) => {
      console.log(res);
      setDogs(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }


  const removeDogs = (id) => {
    setDogs(dogs.filter(dog => dog._id !== id));
  }

  const toggleIsAdopted = (idx) => {
    const dogsCopy = [...dogs];

    const selectedDog = dogsCopy[idx];
    selectedDog.isAdopted = !selectedDog.isAdopted;

    setDogs(dogsCopy);
  }

  const likeDog = (idx) => {
    const dogsCopy = [...dogs];
    const selectedDog = dogsCopy[idx];
    selectedDog.likes++;
    setDogs(dogsCopy);
  }


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Router>
        <Dogs path="/" dogs={dogs} removeDogs={removeDogs} toggleIsAdopted={toggleIsAdopted} likeDog={likeDog}></Dogs>
        <NewDog path="/new" setDogs={setDogs} dogs={dogs}></NewDog>
        <ShowDog path="/dog/:id"></ShowDog>
        <EditDog path="/dog/edit/:id" getDogs={getDogs}></EditDog>
      </Router>
    </div>
  );
}

export default App;
