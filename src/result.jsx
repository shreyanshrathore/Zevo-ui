import React from 'react'
import {Box , styled} from '@mui/material'
import { useContext , useState, useEffect } from 'react'
import  {DataContext} from '../src/context/DataProvider'

const Container = styled(Box)`
  height: 81vh;
`

const Result = () => {
  const [src , setSrc] = useState("");
const {html , css ,js } = useContext(DataContext);

const srcCode = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
`
useEffect(() => {
  const timeOut = setTimeout(() => {
    setSrc(srcCode)
  }, 1000)
  return() => clearTimeout(timeOut)
}, [html , css , js])

  return (
    <Container>
      <iframe 
        srcDoc={src}
        title = "OutPut" 
        sandbox='allow-scripts'
        width="100%"
        height="100%"
        frameborder={0}
      ></iframe>
    </Container>
  )
}

export default Result