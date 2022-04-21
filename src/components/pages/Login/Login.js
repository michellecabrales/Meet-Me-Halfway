//import '../../../App';
//import "./LoginIndex.css"
import {signInWithGoogle} from '../../../firebase'
import { logOut } from '../../../firebase';
import { auth } from '../../../firebase';
import Button from '@mui/material/Button'
//import "bootstrap/dist/css/bootstrap.min.css"

function Login(){
  return (
    
    <div>
    <Button variant='contained' onClick={signInWithGoogle} > Sign In With Google</Button>
    <h1>{localStorage.getItem("name")}</h1>
    <h1>{localStorage.getItem("email")}</h1>
    
    </div>
  );
}
export default Login
