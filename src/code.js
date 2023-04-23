import { useContext } from 'react';
import React from 'react'
import Editor from './editor'
import { Box , styled } from '@mui/material';
import { DataContext } from './context/DataProvider';
const Container = styled(Box)`
  display: flex;
  background-color: #060606;

`
const Code = () => {
const { html , setHtml , css , setCss , js , setJs } =  useContext(DataContext);

  return (
    <Container>
    <Editor
      header = "HTML"
      icon = "/"
      color = "#FF3C41"
      value = {html}
      onChange = {setHtml}
    />
    <Editor
      header = "CSS"
      icon = "*"
      color = "#0EBEFF"
      value = {css}
      onChange = {setCss}
    />
    <Editor
      header = "JAVASCRIPT"
      icon = "()"
      color = "#FCD000"
      value = {js}
      onChange = {setJs}
    />
    </Container>
  )
}

export default Code