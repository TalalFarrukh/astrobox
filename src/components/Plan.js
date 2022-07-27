import React from 'react'
import Grid from '@mui/material/Grid'
import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import PlanBox from './PlanBox'

const Plan = () => {
  return (
    <div id='plan'>
    <Grid container sx={{ marginTop:'10px', display:'block' }}>
        <div className='pickPlan'>
            <Typography variant='h4' sx={{ color:'#1b155c', fontWeight:500, textAlign:'center', fontSize:{xs:'30px'} }}>Pick Your Plan!</Typography>
            <br></br> 
            <Typography sx={{ color:'black', fontFamily:'Arial', textAlign:'center', fontSize:'15px' }}>
                Pick Your Theme(s)!
                <br></br>
                Pay for additional months to save money.
            </Typography>
        </div>
        
        <div className='pickPlanOptions'>
          <div><PlanBox months={'1 Month Plan'} price={'$30'} /></div>

          <div className='planDesc phoneDesc'>
            <Typography variant='h4' sx={{ color:'#1b155c', fontWeight:500, marginBottom:'-10px', marginTop:{xs:'30px'}, fontSize:{xs:'30px'} }}>1 Month Plan</Typography>
            <ul className='bulletpts'>
              <li>Recurring 1 Month Plan</li>
              <li>Select desired box theme(s)</li>
              <li>Cancel Anytime</li>
            </ul>
          </div>
        </div>

        <div className='pickPlanOptions'>
          <div><PlanBox months={'3 Month Plan'} price={'$85.50'} /></div>

          <div className='planDesc phoneDesc'>
            <Typography variant='h4' sx={{ color:'#1b155c', fontWeight:500, marginBottom:'-10px', marginTop:{xs:'30px'}, fontSize:{xs:'30px'} }}>3 Month Plan</Typography>
            <ul className='bulletpts'>
              <li>Recurring 3 Month Plan</li>
              <li>Select desired box theme(s)</li>
              <li>You save $1.50 per month</li>
            </ul>
          </div>
        </div>

        <div className='pickPlanOptions'>
          <div><PlanBox months={'6 Month Plan'} price={'$162'} /></div>

          <div className='planDesc phoneDesc'>
            <Typography variant='h4' sx={{ color:'#1b155c', fontWeight:500, marginBottom:'-10px', marginTop:{xs:'30px'}, fontSize:{xs:'30px'} }}>6 Month Plan</Typography>
            <ul className='bulletpts'>
              <li>Recurring 6 Month Plan</li>
              <li>Select desired box theme(s)</li>
              <li>You save $3 per month</li>
            </ul>
          </div>
        </div>
        
    </Grid>
    </div>
  )
}

export default Plan