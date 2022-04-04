import React from 'react'
import './Signup.css'
//import Signuplogic from './Signuplogic';

export class Signup extends React.Component {

    render() {
        
     return (<div className="base-container"> 
            <h1> Sign Up! </h1>
            <div className="content">
                 <div className="images">
                
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" placeholder = " Username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" placeholder = " Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" placeholder = " Password"/>
                    </div>
                </div>
            </div>
            <div className = "button-container">
                <button type = "button" className = "btn">
                    Register
                </button>
            </div>
        </div>
     );
    }

}
export default Signup; 

