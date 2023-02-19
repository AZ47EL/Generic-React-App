import React from 'react'

const Form = () => {
    const [formContentState, setFormContentState] = React.useState(
        {
        Firstname: "",
        Lastname: "",
        Email: "",
        Comments: "",
        IsHuman: false,
        Employment: "",
        FavColor: ""
        }
    )

    const changeContentState = event => {
        const {name, value, type, checked} = event.target
        setFormContentState(prevContent => {
        return{
            ...prevContent,
            [name]:type === "checkbox"? checked: value
            
        }
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formContentState)
    }

    return(
        <form className='actual-form' onSubmit={handleSubmit} autoComplete="off">
            <input 
                type="text" 
                value={formContentState.Firstname}
                name="Firstname"
                placeholder="First name"
                onChange={changeContentState}
            />

            <input 
                type="text" 
                value={formContentState.Lastname}
                name="Lastname"
                placeholder="Last name"
                onChange={changeContentState}
            />

            <input 
                type="email" 
                value={formContentState.Email}
                name="Email"
                placeholder="...@email"
                onChange={changeContentState}
            />

            <label className="human-label">
                <input 
                    type="checkbox"
                    checked={formContentState.IsHuman}
                    name="IsHuman"
                    id="IsHuman"
                    onChange={changeContentState}
                />
                Are you human?
            </label>

            <br />
            <br />

            <fieldset>
                <legend>Current Employment Status</legend>
                    
                    <label>
                        <input 
                            type="radio"
                            value="unemployed"
                            checked={formContentState.Employment === "unemployed"}
                            name="Employment"
                            id="unemployed"
                            onChange={changeContentState}
                        />
                        Unemployed
                    </label>

                    <label>
                        <input 
                            type="radio"
                            value="employed"
                            checked={formContentState.Employment === "employed"}
                            name="Employment"
                            id="employed"
                            onChange={changeContentState}
                        />
                        Employed
                    </label>

                    <label>
                        <input 
                            type="radio"
                            value="part-time"
                            checked={formContentState.Employment === "part-time"}
                            name="Employment"
                            id="part-time"
                            onChange={changeContentState}
                        />
                        Part-time
                    </label>

                    <label>
                        <input 
                            type="radio"
                            value="full-time"
                            checked={formContentState.Employment === "full-time"}
                            name="Employment"
                            id="full-time"
                            onChange={changeContentState}
                        />
                        Full-time
                    </label>
            </fieldset>

            <br />
            <br />

            <label>Favorite Color</label>
            <select
                id="FavColor" 
                value={formContentState.favColor}
                onChange={changeContentState}
                name="FavColor"
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="cyan">Cyan</option>
                <option value="magenta">Magenta</option>
                <option value="yellow">Yellow</option>
            </select>

            <textarea 
                value={formContentState.Comments}
                name="Comments"
                placeholder="Your comments..."
                onChange={changeContentState}
            />

            <hr />
            <button className="submit">Submit</button>
        </form>
    )
}

const FormArea = props => {
    return(
        <div className='surround-form'>
            <button className="form-exit-btn" type="button" onClick={props.exit}></button>
            <Form />
        </div>
    )
}

export default FormArea;