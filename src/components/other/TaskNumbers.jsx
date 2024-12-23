import React from 'react'

const TaskNumbers = ({data}) => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
      <div className='h-40 w-[45%] bg-blue-400 py-6 px-9 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='font-2xl font-medium'>New Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-green-400 py-6 px-9 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='font-2xl font-medium'>Completed Task Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-yellow-400 py-6 px-9 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='font-2xl font-medium'>Accepted Task</h3>
      </div>
      <div className='h-40 w-[45%] bg-red-400 py-6 px-9 rounded-xl'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='font-2xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskNumbers
