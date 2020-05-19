import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const Dogs = ({dogs, removeDogs}) => {

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8002/api/dogs/${id}`)
            .then(res => {
                console.log(res);
                removeDogs(id);
            })
            .catch(err => {
                console.log(err);
            })
    }

// vue.js, angular

    return (
        <div>
            <p>Dogs is working!</p>
            <Link to="/new">Add your dog!</Link>
            {
                dogs.map((dog, i) => {
                    return (
                        <div key={i}>
                            <hr />
                            <p>name: <Link to={`/dog/${dog._id}`}>{dog.name}</Link></p>

                            <p>color: {dog.color}</p>
                            <p>age: {dog.age}</p>
                            <p>delete: <button onClick={(e) => {deleteHandler(dog._id)}}>delete {dog.name}</button></p>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Dogs;