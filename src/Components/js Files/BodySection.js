import React from 'react'
import SideBar from './SideBar'
import ManageEvents from './ManageEvents'
import "../css Files/bodySection.css"


export default function BodySection() {
  return (
    <div className='body-section'>
      <SideBar/>
      <ManageEvents/>
    </div>
  )
}
