import React from 'react'

const Todos = ({todos}) => {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            {todos.map(function (todo) {
                return (
                    <div 
                        key={todo._id} 
                        className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    > 
                        <h1 className="text-2xl font-bold text-gray-800 mb-3">{todo.title}</h1>
                        <p className="text-gray-600 mb-5 leading-relaxed">{todo.description}</p>
                        <button 
                            className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                                todo.completed 
                                    ? 'bg-emerald-500 text-white cursor-default focus:ring-emerald-300' 
                                    : 'bg-blue-500 hover:bg-blue-600 text-white hover:shadow-md focus:ring-blue-300'
                            }`}
                        >
                            {todo.completed ? "Completed" : "Mark as complete"}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos