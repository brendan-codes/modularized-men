import React, {useState} from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewDog = (props) => {

    const {dogs, setDogs} = props;
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [color, setColor] = useState("");

    const [errs, setErrs] = useState([]);

    const thisSubmit = (event) => {
        event.preventDefault();
        let valid = true;

        if(name.length < 2){
            valid = false;
            setErrs([...errs, "Name must be longer than one character!"])
        }

        if(valid){
            axiosCall();
        }
    }

    const axiosCall = () => {
        axios.post('http://localhost:8002/api/dogs', {
            name: name,
            age: age,
            color: color
        })
        .then(res => {
            console.log(res.data);
            setDogs([...dogs, res.data]);
            navigate('/');
        })
        .catch(err => {
            // console.log(err.response.data.errors);
            const errorArray = [];
            for(const key of Object.keys(err.response.data.errors)){
                errorArray.push(err.response.data.errors[key].message)
            }
            setErrs(errorArray);
        })
    }

    return (
        <div>
            <p>NewDog is working!</p>
            <Link to="/">See all the dogs!</Link>
            <h4>Create a new dog</h4>
            {errs.map((err, i) => <p key={i}>{err}</p>)}
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