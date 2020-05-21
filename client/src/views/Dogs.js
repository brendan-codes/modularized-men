import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const Dogs = ({dogs, removeDogs, toggleIsAdopted, likeDog}) => {

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

    const adoptHandler = (status, id, idx) => {
        axios.put(`http://localhost:8002/api/dogs/${id}`, {"isAdopted": !status})
            .then(res => {
                console.log(res);
                toggleIsAdopted(idx);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const likeHandler = (likeCount, id, idx) => {
        axios.put(`http://localhost:8002/api/dogs/${id}`, {"likes": likeCount+1})
            .then(res => {
                console.log(res);
                likeDog(idx);
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
                            <p>is adopted: {dog.isAdopted.toString()}</p>
                            <p>adopt or undo! <button onClick={(e)=> {adoptHandler(dog.isAdopted, dog._id, i)}}>go!</button></p>
                            <p>likes: {dog.likes}</p>
                            <p>like this dog! <button onClick={()=>{likeHandler(dog.likes, dog._id, i)}}>like!</button></p>
                            <p>delete: <button onClick={(e) => {deleteHandler(dog._id)}}>delete {dog.name}</button></p>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Dogs;