import React, { useState } from 'react'

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Create To-do</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <input 
            type="text" 
            placeholder="Title" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" 
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <textarea 
            placeholder="Description" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 min-h-[120px]" 
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        >
          Create To-do
        </button>
      </form>
    </div>
  )
}

export default CreateTodo;