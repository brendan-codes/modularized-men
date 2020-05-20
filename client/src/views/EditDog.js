import React, {useState, useEffect} from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const EditDog = (props) => {
    const {getDogs} = props;
    const [dog, setDog] = useState({});
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [color, setColor] = useState("");
    const [errs, setErrs] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8002/api/dogs/${props.id}`)
            .then(res => {
                setDog(res.data);
                setName(res.data.name);
                setAge(res.data.age);
                setColor(res.data.color);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const thisSubmit = (event) => {
        event.preventDefault();

        // put
        axios.put(`http://localhost:8002/api/dogs/${dog._id}`, {
            name: name,
            age: age,
            color: color
        })
        .then(res => {
            console.log(res);
            getDogs();
            navigate('/');
        })
        .catch(err => {
            console.log(err);
            const errorArray = [];
            for(const key of Object.keys(err.response.data.errors)){
                errorArray.push(err.response.data.errors[key].message)
            }
            setErrs(errorArray);
        })
    }

    return (
        <div>
            <p>EditDog is working!</p>
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

export default EditDog;