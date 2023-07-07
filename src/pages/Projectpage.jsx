import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from "../firebase";
import { Box, styled } from '@mui/material';
import { DataContext } from '../context/DataProvider';
import Editor from '../editor'
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "@firebase/firestore";




const Container = styled(Box)`
  display: flex;
  background-color: #060606;
`


const Code = () => {
    const { html , setHtml , css , setCss , js , setJs } =  useContext(DataContext);

    const location = useLocation();
    const projectId = location.state.projectid;
    const projectRefs = doc(db, "Projects", projectId);
    const [codehtml, setcodehtml] = useState("")
    const [codecss, setcodecss] = useState("")
    const [codejs, setcodejs] = useState("")

    useEffect(() => {
        getDoc(projectRefs).then((doc) => {
            if (doc.exists()) {
                setcodehtml(doc.data().firehtml);
                setcodecss(doc.data().firecss);
                setcodejs(doc.data().firejs);
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    useEffect(() => {
        setHtml(codehtml);
        setCss(codecss);
        setJs(codejs);
    }, [codehtml, codecss, codejs]);

    return (
        <div>
            <Container>

                <Editor
                    header="HTML"
                    icon="/"
                    color="#FF3C41"
                    value={html}
                    onChange={setHtml}
                    buttonval="Save Code"
                //   buttonfunc={createProject}
                />



                <Editor
                    header="CSS"
                    icon="*"
                    color="#0EBEFF"
                    value={css}
                    onChange={setCss}
                    buttonval="Update Code"
                // buttonfunc={() => updateUser(ids.id, ids.firehtml, ids.firecss, ids.firejs)}
                />

                <Editor
                    header="JAVASCRIPT"
                    icon="()"
                    color="#FCD000"
                    value={js}
                    onChange={setJs}
                    buttonval="Change Code"
                // createUser={createProject}
                />

            </Container>

        </div>
    );  
}

export default Code;
