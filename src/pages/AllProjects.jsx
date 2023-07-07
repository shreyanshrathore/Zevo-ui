import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import './project.css'
import Code from '../code'

const AllProjects = () => {

  const [project, setProject] = useState([]);
  const projectRef = collection(db, "Projects");
  const navigate = useNavigate();

  const handleCodeClick = (projectId) => {
    navigate(`/code`, { state: { projectid: projectId } });
  };
  
  useEffect(() => {
    const getProject = async () => {
      const data = await getDocs(projectRef);
      console.log(data)
      setProject(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };
    getProject();
  }, []);

  return (
    <div className='table-parent'>
    {
      project.map((projec) => {
        return (
          <div key={projec.id} className='card-content' onClick={() => handleCodeClick(projec.id)}>
            <div class="card">
              <div class="card-content">
                <h2 class="card-title">{projec.firename}</h2>
                <p class="card-description">Project Description</p>
              </div>
            </div>
          </div>
        );
      }
      )
    }
  </div>
  );
}

export default AllProjects;
