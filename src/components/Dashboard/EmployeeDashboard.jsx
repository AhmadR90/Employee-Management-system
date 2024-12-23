import React from 'react'
import Header from '../other/Header'
import TaskNumbers from '../other/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {

  // console.log(data)

  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header grp={data}/>
      
      <TaskNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
