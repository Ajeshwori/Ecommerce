import React from 'react'
import NotFound from '../../assets/NotFound/NotFound.svg'

const index = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
        <img src={NotFound} alt="" className='h-[80%]'/>
    </div>
  )
}

export default index