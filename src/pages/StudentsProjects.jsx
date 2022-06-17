import { LinearProgress } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'
const StudentsProjects = ({createdAt,name,projectTitle,faculty
,course,regNo, projectDesc
}) => {
  return (
    <div className="main-card">
      <div className="card">
    <div className="one">
      <p>{projectTitle}</p>
      Project A<input type="checkbox" />
      <button className="btn">Progress</button>
    </div>
    <div className="line"></div>
    <div className="two">
     <p>{projectDesc}</p> 
    </div>
    <div className="line"></div>
    <div className="three">
      <div>
        <h5>{name}</h5>
      projectadded on {createdAt}
      </div>
      <div className="icon">
        <Link to='/milestone'>
           <AiOutlineArrowRight/>
        </Link>
        </ div>
    </div>
   </div>
    </div>
   
  )
}

export default StudentsProjects