import React from 'react'
import globe from '../../../images/Globe.png';
import '../../../index.css'
export class Signup extends React.Component {

   constructor(props) {
       super(props);
    }

    render() {
        
     return (<div className="base-container"> 
            <h1> Sign Up! </h1>
            <div className="content">
                 <div className="images">
                  <img src = {globe} alt = "globe" />
                </div>
                <div className="form">
                    <div className="form-gorup">
                        <label htmlFor="username">Username </label>
                        <input type="text" name="username" placeholder = "username"/>
                    </div>
                    <div className="form-gorup">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder = "email"/>
                    </div>
                    <div className="form-gorup">
                        <label htmlFor="password">Password </label>
                        <input type="password" name="password" placeholder = "password"/>
                    </div>
                </div>
            </div>
            <div className = "footer">
                <button type = "button" className = "btn">
                    Register
                </button>
            </div>
        </div>
     );
    }

}
export default Signup; 

