import React from 'react'
import '../index.css';
export default function Footer() {
       const todaydate= new Date()
    
  return (
    <div className='bg'>
        <p>Copyrights &copy; {todaydate.getFullYear()}</p>
    </div>
  )
}