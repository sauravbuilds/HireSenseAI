import React from 'react'
import { Link } from 'react-router'

const ResumeCard = ({resume :{id, companyName,jobTitle, feedback}}:{resume: Resume}) => {
  return (
    <Link to={`/resume/${id}`} className="resume-card animate-in fade-in duration-1000">
            
        </Link>   
  )
}

export default ResumeCard