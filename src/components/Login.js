import React, { useState } from 'react'
import { Button, Typography, FormControl, FormLabel, Input, Grid, Box } from '@mui/material'
import Popup from './Popup'

const Login = () => {

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <Grid container sx={{ backgroundImage:'url(workingBg.png)', backgroundSize:'cover' }}>

      <div className='loginDiv'>
        <Typography variant='h5' sx={{ color:'white', fontWeight:600, textAlign:'center' }}>Account Login</Typography>
        <br></br> <br></br>
        <Typography variant='body2' sx={{ color:'white', textAlign:'center', fontSize:'18px' }}>
          Don't have an account? Subscribe to Sign Up!
        </Typography>

        <Box className='fieldsBox'>
          <Box>
            <FormControl fullWidth>
              <FormLabel sx={{ color:'#1b155c', fontSize:'18px' }}>Email</FormLabel>
              <Input color='primary' disableUnderline sx={{ fontSize:'14px', bgcolor:'#dee0df', borderRadius:'5px', paddingLeft:'15px', paddingTop:'5px', paddingBottom:'5px'  }} />
            </FormControl>
          </Box>

          <Box marginTop='20px'>
            <FormControl fullWidth>
              <FormLabel sx={{ color:'#1b155c', fontSize:'18px' }}>Password</FormLabel>
              <Input color='primary' disableUnderline sx={{ fontSize:'14px', bgcolor:'#dee0df', borderRadius:'5px', paddingLeft:'15px', paddingTop:'5px', paddingBottom:'5px'  }} />
            </FormControl>
          </Box>

          <Button onClick={togglePopup} sx={{ float:'right', color:'#1b155c' }}>FORGOT PASSWORD</Button>
          {isOpen && <Popup handleClose={togglePopup} />}

          <Button disableElevation disableRipple sx={{ marginTop:'40px', color:'white', bgcolor:'#050347', width:'490px', "&.MuiButtonBase-root:hover":{bgcolor:'#050347'} }}>Login</Button>
        </Box>
        
      </div>
      
    </Grid>
    </>
  )
}

export default Login