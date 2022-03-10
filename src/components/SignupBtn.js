import React from 'react'
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const themebtn = createTheme({
    palette: {
        primary:{
            main: "#15cdfc",
        } 
    }
});
const SignupBtn = () => {
    return (
        <div>
            <ThemeProvider theme={themebtn}>
                <Button variant="contained"> Sign Up </Button>
            </ThemeProvider>
        </div>
    );
}
export default SignupBtn
