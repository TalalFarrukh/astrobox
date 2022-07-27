import React from 'react'
import Grid from '@mui/material/Grid'
import { Button, Typography } from '@mui/material'

const Welcome = () => {
  return (
    <>
    <Grid container spacing={0}>

      <Grid item md={5} className='xsGrid1'>
        <div className='welcomeSide1'>
          
          <Typography variant='h4' sx={{ fontFamily:'Arial', fontWeight:550, color:'#1b155c', marginLeft:'10px' }}>Welcome To</Typography>
          <img src='bigAstro.png' alt='Astro Logo' width='300vw'></img>

          <div className='welcomeDesc'>
          
            <Typography variant='p'>"Whether you are a gamer, comic fanatic or anime fan, we have got a box for you"</Typography>
            <br></br> <br></br>
            <Typography variant='p'>We make a bundle of collectibles, figures , comic books and more, 
            that will be delivered to your door every month. Each box will be a hand picked suprise of awesomeness!</Typography>
          
            <Button href='#plan' sx={{ marginTop:'15px', width:'330px', fontSize:'12px', color:'white', 
            backgroundImage:'linear-gradient(to right,#090979,#750544,#ff0000)', display:{xs:'block'},
            marginRight:{xs:'auto'}, marginLeft:{xs:'auto'}, width:{xs:'100%'}, textAlign:'center' }}>Pick a Plan</Button>
          
          </div>

        </div>
      </Grid>

      <Grid item md={7} className='xsGrid2'>
        <img className='welcomeImg xsImg' alt='Astro Man' src='welcomeAstro.png'></img>
      </Grid>

    </Grid>
    
    </>
  )
}

export default Welcome