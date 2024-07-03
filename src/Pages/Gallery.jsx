import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
    const navigate = useNavigate()
    const previousPage = async()=>{
        navigate(-1)
    }
  return (
    <div>Gallery
        <div>
            <FaArrowLeft onClick={previousPage}/>
        </div>
    </div>
  )
}

export default Gallery