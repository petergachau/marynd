import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { getMiles, getMilestoneByUser } from '../redux/features/mileSlice';

const MileProjects = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>({...state.auth}))
  const {milestones}=useSelector((state)=>({...state.milistone}))
  console.log(milestones);

useEffect(() => {

dispatch(getMiles())
}, [])
  return (
    <div style={{marginTop:'5rem'}}>
      {milestones && milestones.map((item)=>{
        return(
          <div>
            {item.milestone}
          </div>
        )
      })}</div>
  )
}

export default MileProjects