import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
let Image = require ('./codepen-image.png');
const Container = styled(AppBar)`
background: #060606;
height: 9vh;

`
const header = () => {
      return (
        <Container position="static">
            <Toolbar>
                <img src={Image} alt="logo" style={{width : 40}} />
                
            </Toolbar>
        </Container>
      )
    
    
}

export default header