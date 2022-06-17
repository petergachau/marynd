
import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { Link, useLocation } from "react-router-dom";
import { createProject, getProjects, getProjectsByUser } from "../redux/features/projectSlice";
import {StyledForm} from './StyledForm'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createMilestone } from "../redux/features/mileSlice";
import {AiOutlineArrowRight} from 'react-icons/ai'



const Milestone = () => {
    const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>({...state.auth}))
  const {milestones}=useSelector((state)=>({...state.project}))

  const {projects}=useSelector((state)=>({...state.project}))
  console.log(projects);
const userId =user?.result?._id

const [date,setDate]=useState('')
const [mile,setMilestone]=useState({
    milestone:'',
    milestoneDesc:'',
    createdAt:Date

})
useEffect(()=>{
  dispatch(getProjectsByUser(userId))
},[userId])
const handleSubmit= (e)=>{
    e.preventDefault()
    if (mile){
        const updateddata={...mile, name:user?.result.name}
       
       dispatch(createMilestone(updateddata))
    }
}

  return (
   <div className="main-milestone">
<div className="milestone">
  <div className="prject-items">
    {projects && projects.map((item)=>{
      return(
        <>
        <div className="items">
          <p>{item.projectTitle}</p>
          <button className="btn">
{item.status}
          </button>
          <p>{item.projectDesc}</p>
        </div>
        <div className="lines"></div>
        <div className="items2">
<div className="paragraph">
  <h6>{item.name}</h6>
  <h6>{item.regNo} .. {item.course}</h6>
</div>
        </div>
     </> )
    })}
  </div>
      <StyledForm  onSubmit={handleSubmit}>
    <h3>  Add New Milestone </h3>
      <input className='form-input' type='text'  placeholder='Introduction' onChange={(e)=> setMilestone({...mile , milestone:e.target.value})} required/>
      <input className='form-input' type='text'  placeholder='Milestone Desc' onChange={(e)=> setMilestone({...mile , milestoneDesc:e.target.value})} required/>
      deadline Date
      <input className='form-input' type='Date'  placeholder='Project Title' onChange={(e)=> setMilestone({...mile , createdAt:e.target.value})} required/>

      <button className='btn'>
      {/* {auth.registerStatus==='pedding' ? 'submitting':'register' } */}
      ADD
    </button>
    <div className="icon">
      view
        <Link to='/mileProject'>
           <AiOutlineArrowRight/>
        </Link>
        </ div>
      </StyledForm>
      </div>
      
 </div>
//     <div className="main-milestone">
//         <div className='milestone'>
// <div className="prject-items">
//     {projects && projects.map((item)=>{
//         return(
//             <>
//             <div>
                
//             </div>
           
//            </div>
//            </div>

//         </>
    
    
  )
}


export default Milestone