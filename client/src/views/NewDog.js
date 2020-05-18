import React from 'react'
import { Link } from '@reach/router';

const NewDog = (props) => {


    return (
        <div>
            <p>NewDog is working!</p>
            <Link to="/">See all the dogs!</Link>
        </div>

    )
}

export default NewDog;