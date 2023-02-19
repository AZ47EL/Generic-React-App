import React from 'react'

const Card = (props) => {
    return(
        <div className='card'>
            <h3><span>Card ID number: </span>{props.id}</h3>
            <p>{props.number}</p>
        </div>
    )
}


export default Card