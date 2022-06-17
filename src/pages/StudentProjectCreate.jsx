import React, { useEffect } from 'react'
import { useState } from 'react'
import {StyledForm} from './StyledForm'
import { useNavigate } from 'react-router-dom';
// import { StyledForm } from './StyledForm'
import { useDispatch, useSelector } from "react-redux";
// import { productsCreate } from '../redux/features/tourSlice';
import {toast} from 'react-toastify'
import { createProject } from '../redux/features/projectSlice';
import Projects from './Projects';
import Milestone from './Milestone';
const StudentProjectCreate = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { user } = useSelector((state) => ({ ...state.auth }));
// console.log(user);
  const {error ,loading}= useSelector((state)=>({...state.project}))
  const [users,setUser]=useState({
    projectTitle:'',
    name:'',
    faculty:'',
    regNo:'',
    projectDesc:'',
    milestone:'',
    milestoneDesc:'',
    createdAt:'',
      
      course:'',
     
               })
   const handleSubmit= (e)=>{
    
       e.preventDefault()
       if (users){
        const updateddata={...users, name:user?.result.name}
       
       dispatch(createProject(updateddata,toast))
       navigate('/main')
       }
   }
  const cancelCourse = () => { 
    document.getElementById("create-course-form").reset();
  }
useEffect(() => {
  error && toast.error(error);

  return () => {
    
  }
}, [error])


return (
 
  <StyledForm id='cancelCourse' onSubmit={handleSubmit} style={{marginTop:'4rem'}} className='form'>
  <h2>Create a Project</h2>
  <div className='forms-ccs'>
    <div>
  {user._id}
{/* <Projects/> */}
    <input className='form-input' type='text'  placeholder='Project Title' onChange={(e)=> setUser({...users , projectTitle:e.target.value})} required/>
    <input className='form-input' type='text'  placeholder='Name' onChange={(e)=> setUser({...users , name:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='RegNo' onChange={(e)=> setUser({...users , regNo:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='faculty' onChange={(e)=> setUser({...users , faculty:e.target.value})} required/>
    <input className='form-input' type='text' placeholder='Course' onChange={(e)=> setUser({...users ,course:e.target.value})} required/>
    <input className='form-input' type='date' placeholder='date' onChange={(e)=> setUser({...users ,createdAt:e.target.value})} required/>
      <input className='form-input' type='text' placeholder='Projects Short Description' onChange={(e)=> setUser({...users ,projectDesc:e.target.value})}/>
      
      <button className='btn'>
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
      ADD
    </button>
      </div>

    
    
   
  
    
   </div>

</StyledForm>
   

   
  
    

)
}

export default StudentProjectCreate