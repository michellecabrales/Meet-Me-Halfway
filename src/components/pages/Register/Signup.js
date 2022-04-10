import React , {useState} from 'react';
import '../../../index.css'
import './Signup.css'

function SignupPage({Signup, error}) {

    const [details, setDetails] = useState({username: "", email: "", password: ""});
    
    const submitHandler = e =>{
        e.preventDefault();

        Signup(details);
    }
        
    return (
        <form onsubmit={submitHandler}>
            <div className = "form-inner">
                <h2>Sign Up!</h2>
                {(error !== "") ? (<div className = "error">{error}</div>) : ""}
                <div className="credientials-group">
                    <label htmlFor="username">Username:</label>
                    <input type= "text" name = "username" id="username" onChange={e=> setDetails({...details, username: e.target.value})} value={details.username}/>
                </div>
                <div className="credientials-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e=> setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
                <div className = "credientials-group">
                    <label htmlFor="password">Password:</label>
                    <input type = "password" name="password" id="password" onChange={e=> setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <button type = "submit" className ="btn" style = {{height: '30px', width : '85px'}} >Sign Up!</button>
                
            </div>
        </form>
    )
}


export default SignupPage; 

