import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import GalleryHeader from '../Components/GalleryHeader'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Gallery = () => {
    const navigate = useNavigate()
    // const previousPage = async()=>{
    //     navigate(-1)
    // }
  return (
    <div>     
       <GalleryHeader/>
        {/* <div>
            <FaArrowLeft onClick={previousPage}/>
        </div> */}
        <br /><br /> <br />
        <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="PROPOSAL">
        Tab content for Proposal
      </Tab>
   
      <Tab eventKey="longer-tab" title="INTRODUCTION">
        Tab content for Introduction
      </Tab>

    </Tabs>
    </div>
  )
}

export default Gallery