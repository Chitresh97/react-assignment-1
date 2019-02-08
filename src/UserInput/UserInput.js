import React from 'react'

const UserInput=(props)=>{
    return(
        <div className="UserInput">
            <input type="text" onChange={props.setname} value={props.name}/>
        </div>
    )
};
export default UserInput;