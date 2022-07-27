import React from 'react'
import Grid from '@mui/material/Grid'
import { Button, Typography, Box, IconButton } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

const Footer = () => {
  return (
    <>
      <Grid container sx={{ backgroundImage:'url(workingBg.png)', marginTop:'50px', backgroundSize:'cover', justifyContent:{xs:'center'} }}>

        <Grid item md={1}></Grid>

        <Grid item md={3}>
            <img src='footerimg.png' alt='Footer image' className='footerImg'></img>
        </Grid>
        
        <Grid item md={3}>
          <div className='footerText'>
            <Typography variant='h6' sx={{ color:'white', fontSize:'22px' }}>Our Company</Typography>

            <Typography variant='p' sx={{ fontFamily:'Arial', color:'white', fontSize:'17px' }}>
              Astro Box <br></br> 8547 E. Arapahoe Rd. Ste J #429 <br></br> Greenwood Village CO 80112
              <br></br> astropowerbox@gmail.com <br></br> (720)-239-2382 <br></br>
            </Typography>

            <Typography variant='p' sx={{ fontFamily:'Arial', color:'purple', fontSize:'17px' }}>
              <a>Terms of Service</a> <br></br> <a>Privacy Policy</a>
            </Typography>

          </div>
        </Grid>

        <Grid item md={1}></Grid>
        <Grid item md={1}></Grid>

        <Grid item md={3}>
          <div className='footerIcon'>
            <IconButton href='https://www.facebook.com/astropowerbox/' target='_blank'>
              <FacebookRoundedIcon sx={{ color:'white', fontSize:'50px' }} />
            </IconButton>

            <IconButton href='https://www.instagram.com/astropowerbox/' target='_blank'>
              <InstagramIcon sx={{ color:'white', fontSize:'50px' }} />
            </IconButton>

            <IconButton href='https://twitter.com/astropowerbox/' target='_blank'>
              <TwitterIcon sx={{ color:'white', fontSize:'50px' }} />
            </IconButton>
          </div>
        </Grid>

      </Grid>
    </>
  )
}

export default Footer