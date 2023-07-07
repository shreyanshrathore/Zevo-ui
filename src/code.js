import { useContext, useEffect, useState } from 'react';
import React from 'react'
import Editor from './editor'
import { Box , styled } from '@mui/material';
import { DataContext } from './context/DataProvider';
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "@firebase/firestore";






const Container = styled(Box)`
  display: flex;
  background-color: #060606;
`
const Code = (props) => {
const { html , setHtml , css , setCss , js , setJs } =  useContext(DataContext);

const[ids, setIds] = useState("");
const projectRef = collection(db, "Projects");

const createProject = async () => {
  const projectName = window.prompt("Enter project name:");
  if (!projectName) return; // return if user clicks Cancel or enters an empty string
  try {
    const docRef = await addDoc(projectRef, {
      firename: projectName,
      firehtml: html,
      firecss: css,
      firejs: js,
    });
    setIds(docRef);
  } catch (error) {
    console.error("Error creating project: ", error);
  }
};



const updateUser = async (id, firehtml,firecss,firejs) => {
  const userDoc = doc(db, "Projects", id);
  const newFields = { firehtml: html,  firecss: css, firejs: js};
  await updateDoc(userDoc, newFields);
};
  return (
    <>
    {/* <input type="text" /> */}
    <Container>
    <Editor
      header = "HTML"
      icon = "/"
      color = "#FF3C41"
      value = {html}
      onChange = {setHtml}
      buttonval = "Save Code"
      buttonfunc={createProject}
      />
    <Editor
      header = "CSS"
      icon = "*"
      color = "#0EBEFF"
      value = {css}
      onChange = {setCss}
      buttonval = "Update Code"
      buttonfunc={() => updateUser(ids.id,ids.firehtml,ids.firecss,ids.firejs)}
      />
    <Editor
      header = "JAVASCRIPT"
      icon = "()"
      color = "#FCD000"
      value = {js}
      onChange = {setJs}
      buttonval = "Change Code"
      // createUser={createProject}
      />
    </Container>
      </>
  )
}

export default Code