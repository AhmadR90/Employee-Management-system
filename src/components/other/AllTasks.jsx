import React from 'react'

const AllTasks = () => {
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-40 overflow-auto'>
      <div className='bg-red-400  flex justify-between py-2 px-4 rounded'>
        <h2>Ahmad</h2>
        <h3>Make project</h3>
        <h5>Status</h5>
      </div>
      <div className='bg-green-400 mt-2 flex justify-between py-2 px-4 rounded'>
        <h2>Ahmad</h2>
        <h3>Make project</h3>
        <h5>Status</h5>
      </div>
      <div className='bg-yellow-400 mt-2  flex justify-between py-2 px-4 rounded'>
        <h2>Ahmad</h2>
        <h3>Make project</h3>
        <h5>Status</h5>
      </div>
      <div className='bg-purple-400 mt-2 flex justify-between py-2 px-4 rounded'>
        <h2>Ahmad</h2>
        <h3>Make project</h3>
        <h5>Status</h5>
      </div>
    </div>
  )
}

export default AllTasks
