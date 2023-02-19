import React from 'react'
import Form from './Form.js'

const List = props => {
    return(
        <li>
            {props.name}
            <div className='list-window'>
                {props.name==='content' && <h6 onClick={props.handleClick}>fill in the form</h6>}
            </div>
        </li>
    )
}

export default List