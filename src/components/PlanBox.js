import React from 'react'
import Grid from '@mui/material/Grid'
import { Button, Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'

const PlanBox = ({months,price}) => {
  return (
    <Grid container sx={{ width:{md:'300px',xs:'100%'}, boxShadow:'3px 3px 3px 3px #ededed', borderRadius:'20px' }}>
        <div className='planMonth'>
            {months}
        </div>

        <div className='optionSelect'>
            <Grid item sx={{ width:'50%', fontFamily:'Arial', color:'white', fontSize:'14px', fontWeight:'bold' }}>
                <Box sx={{ paddingLeft:'30px' }}>
                    <Checkbox value='Gaming' size='medium' sx={{ color:'#f20c59', '&.Mui-checked':{color:'#f20c59'} }} />  Gaming 
                </Box>
                <Box sx={{ paddingLeft:'30px' }}>
                    <Checkbox value='Comics' size='medium' sx={{ color:'#f20c59', '&.Mui-checked':{color:'#f20c59'} }} />  Comics 
                </Box>
                <Box sx={{ paddingLeft:'30px' }}>
                    <Checkbox value='Anime' size='medium' sx={{ color:'#f20c59', '&.Mui-checked':{color:'#f20c59'} }} />  Anime 
                </Box>
            </Grid>

            <Grid item sx={{ width:'50%', paddingLeft:'20px' }}>
                <Box sx={{ paddingLeft:'20px' }}>
                    <Typography sx={{ fontSize:'35px', color:'white', fontWeight:'bold', marginLeft:'-10px' }}>{price}</Typography>
                </Box>

                <Button sx={{ width:'90%', height:'30px', bgcolor:'#f20c59', color:'white', borderRadius:'20px' }}>Select</Button>
            
            </Grid>
        </div>
    </Grid>
  )
}

export default PlanBox