import React, {useState} from 'react'



function CheckForm(props) {

    
    return (
        <div>
            <div className="InputContainer">
                  <h3>1. Confirmation Number:</h3>
                  <span>In the space below, type the confirmation number that was given when you applied.</span>
                  <input placeholder="2022xxxxxxxxxx or 2021xxxxxxxxxx" type="text" className="input" value={props.value} onChange={props.setValue}/>
                </div>
                <div className="InputContainer">
                  <h3>2. Last/Family Name:</h3>
                  <span>Provide the Last/Family Name that was used on the Electronic Diversity Visa Entry Form, including punctuation.</span>
                  <input placeholder="" type="text" className="input" />
                </div>
                <div className="InputContainer">
                  <h3>3. Year of Birth:</h3>
                  <span>Provide the year of birth for the primary entrant.</span>
                  <input placeholder="yyyy" type="text" className="input" />
                </div>
        </div>
    )
}

export default CheckForm;

