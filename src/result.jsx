import React from 'react'
import { Box , styled } from '@mui/material'
import { useContext , useState, useEffect } from 'react'
import { DataContext } from './context/DataProvider'

const Container = styled(Box)`
  width: 100%;
  height: 100vw;
  overflow: scroll;
  scroll:"auto";
  overflow: hidden;
  
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
    <div className='divs'>

    <Container>
      <iframe 
        srcDoc={src}
        title="OutPut" 
        sandbox='allow-scripts'
        width="100%"
        height="100%"
        frameBorder={0}
        scrolling="auto"
        overflow = "auto"
        ></iframe>
    </Container>
        </div>
  )
}

export default Result
