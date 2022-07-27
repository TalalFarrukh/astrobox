import React from 'react'
import Grid from '@mui/material/Grid'
import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'

const Working = () => {
  return (
    <div id='work'>
    <Grid container sx={{ backgroundImage:'url(workingBg.png)', marginTop:'150px', backgroundSize:'cover' }}>
      <div className='workingDiv'>

        <Typography variant='h5' sx={{ color:'white', fontWeight:600, textAlign:'center' }}>Here's How It Works!</Typography>
        <br></br> 
        <Typography variant='p' sx={{ fontFamily:'Arial', color:'white', wordSpacing:'3px' }}>We ship all orders around the 10th of 
        the month. When you sign up before the end of the month, you will get the following month’s mystery power box around 
        the 10th of the following month.</Typography>
        <br></br> <br></br>
        <Typography variant='p' sx={{ fontFamily:'Arial', color:'white', wordSpacing:'3px' }}>Quality is our #1 goal! 
        Every mystery power box will be hand selected with the hottest new items each month. Choose one or more of our three 
        themes that interest you and we will customize the items we include in your box</Typography>

      </div>

      <Grid container sx={{ marginTop:'30px', display:'flex' }}>

        <Grid item md={3} className='threeGrids' sx={{ marginLeft:{md:'40px', xs:'auto'}, marginRight:'auto', 
        marginBottom:{md:'0px', xs:'90px'}, width:{md:'auto', xs:'80%'} }}>
          <div>
            <img className='_3gridImg' src='theme.png' alt='theme'></img>

            <Typography variant='h5' sx={{ color:'white', fontWeight:600, textAlign:'center' }}>Pick Your Theme(s)</Typography>

            <Box sx={{ fontFamily:'Arial', color:'white', marginTop:'20px', marginBottom:'40px', textAlign:'center' }}><Typography variant='p' >
              Choose which theme(s) interest you and we will customize the items in Your Mystry Power Box
            </Typography></Box>
          </div>
        </Grid>

        <Grid item md={3} className='threeGrids' sx={{ width:{md:'auto', xs:'80%'}, marginLeft:{xs:'auto'}, marginRight:{xs:'auto'}, 
        marginBottom:{md:'0px', xs:'90px'} }}>
          <div>
            <img className='_3gridImg' src='monthlyPlan.png' alt='Monthly Plan'></img>

            <Typography variant='h5' sx={{ color:'white', fontWeight:600, textAlign:'center' }}>Select Monthly Plan</Typography>

            <Box sx={{ fontFamily:'Arial', color:'white', marginTop:'20px', marginBottom:'40px', textAlign:'center' }}><Typography variant='p' >
              Go month to month or save money with a 3 or 6 month plan
            </Typography></Box>
          </div>
        </Grid>

        <Grid item md={3} className='threeGrids' sx={{ marginRight:{md:'40px', xs:'auto'}, marginLeft:'auto', 
        width:{md:'auto', xs:'80%'} }}>
          <div>
            <img className='_3gridImg' src='checkout.png' alt='Checkout'></img>
            
            <Typography variant='h5' sx={{ color:'white', fontWeight:600, textAlign:'center' }}>Checkout and Enjoy</Typography>

            <Box sx={{ fontFamily:'Arial', color:'white', marginTop:'20px', marginBottom:'40px', textAlign:'center' }}><Typography variant='p' >
              In a few weeks your monthly Power Box will be on its way.
            </Typography></Box>
          </div>
        </Grid>

      </Grid>

      <Button href='#plan' sx={{ marginTop:'40px', marginBottom:'30px', width:'50%', bgcolor:'#f20c59', color:'white', marginLeft:'auto', 
      marginRight:'auto', "&.MuiButtonBase-root:hover":{bgcolor:'#f20c59'} }}>
        Get Started Today!
      </Button>

    </Grid>
    </div>
  )
}

export default Working