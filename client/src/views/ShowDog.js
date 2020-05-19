import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowDog = (props) => {


    const [thisOneDog, setThisOneDog] = useState({
        color: "",
        age: 0,
        name: ""
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
        </div>
    )
}

export default ShowDog;