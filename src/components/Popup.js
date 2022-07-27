import React from 'react'
import { FormControl, Input, Button } from '@mui/material'

const Popup = ({ handleClose }) => {
  return (
    <div className='popup-box'>
        <div className='box'>
            <span className='close-icon' onClick={handleClose}>x</span>
            Please enter your e-mail address and we'll send you a link to reset your password
            <br></br> <br></br> <br></br>
            <FormControl fullWidth>
            <Input color='primary' disableUnderline sx={{ fontSize:'14px', bgcolor:'#dee0df', borderRadius:'5px', paddingLeft:'15px', paddingTop:'5px', paddingBottom:'5px'  }} />
            </FormControl>
            <Button sx={{ float:'right', color:'#1b155c', marginTop:'15px' }}>Send</Button>
            
        </div>
    </div>
  )
}

export default Popup