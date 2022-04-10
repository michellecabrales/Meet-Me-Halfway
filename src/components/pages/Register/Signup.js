import React , {useState} from 'react';
import '../../../index.css'

function Signup({Signup, error}) {

    const [details, setDetails] = useState({Username: "", Email: "", Password: ""});
    
    const submitHandler = e =>{
        e.preventDefault();

        Signup(details);
    }
        
     return (<div className="base-container"> 
            <h2> Sign Up! </h2>
            <div className="content">
                 <div className="images">
                 
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
                <input type = "submit" value = "Sign Up!"/>
                
               
            </div>
        </div>
     );
    }


export default Signup; 

