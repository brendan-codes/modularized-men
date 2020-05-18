import React from 'react'
import { Link } from '@reach/router';


const Dogs = ({dogs}) => {


    return (
        <div>
            <p>Dogs is working!</p>
            <Link to="/new">Add your dog!</Link>
            {
                dogs.map((dog, i) => {
                    return (
                        <div key={i}>
                            <p>name: {dog.name}</p>
                            <p>color: {dog.color}</p>
                            <p>age: {dog.age}</p>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Dogs;