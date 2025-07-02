import React from 'react'

const CreateTodo = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold'>Create To-do</h1>
        <form className='flex flex-col gap-4 mt-4'>
            <input type="text" placeholder='Title' className='border p-2 rounded-md' />
            <textarea placeholder='Description' className='border p-2 rounded-md' />
            <button type="submit" className='bg-blue-500 text-white p-2 rounded-md'>Create To-do</button>
        </form>
    </div>
  )
}

export default CreateTodo