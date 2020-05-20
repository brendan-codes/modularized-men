import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const ShowDog = (props) => {


    const [thisOneDog, setThisOneDog] = useState({
        color: "",
        age: 0,
        name: "",
        isAdopted: false
    })

    useEffect(() => {
        axios.get(`http://localhost:8002/api/dogs/${props.id}`)
            .then(res => {
                console.log(res);
                setThisOneDog(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <div>
            <p>name: {thisOneDog.name}</p>
            <p>color: {thisOneDog.color}</p>
            <p>age: {thisOneDog.age}</p>
            <p>is adopted: {thisOneDog.isAdopted.toString()}</p>
            <p><Link to={"/dog/edit/"+thisOneDog._id}>Edit</Link></p>
        </div>
    )
}

export default ShowDog;