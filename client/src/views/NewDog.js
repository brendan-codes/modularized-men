import React, {useState} from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewDog = (props) => {

    const {dogs, setDogs} = props;
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [color, setColor] = useState("");

    const thisSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8002/api/dogs', {
            name: name,
            age: age,
            color: color
        })
        .then(res => {
            console.log(res.data);

            if(res.data.hasOwnProperty('errors')){
                console.log('errors happened!');
            }else{
                console.log('no errors!');
                setDogs([...dogs, res.data]);
                navigate('/');
            }

        })
        .catch(err => {
            console.log(err);
        })

    }

    return (
        <div>
            <p>NewDog is working!</p>
            <Link to="/">See all the dogs!</Link>
            <h4>Create a new dog</h4>
            <form onSubmit={thisSubmit}>
                <div>
                    <p>Name:</p>
                    <input
                        type="test"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}>
                    </input>
                </div>
                <div>
                    <p>Color:</p>
                    <input
                        type="test"
                        name="color"
                        value={color}
                        onChange={e => setColor(e.target.value)}>
                    </input>
                </div>
                <div>
                    <p>Age:</p>
                    <input
                        type="number"
                        name="name"
                        value={age}
                        onChange={e => setAge(e.target.value)}>
                    </input>
                </div>
                <button>Submit</button>
            </form>
        </div>

    )
}

export default NewDog;