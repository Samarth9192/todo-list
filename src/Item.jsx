import React, { useState } from 'react';
import { Check, Trash2, ClockAlert } from 'lucide-react';

export const Item = ({ todo }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);


  return (
    <div
      className="group bg-white rounded-lg shadow-sm p-4 mb-3 border border-gray-100 transition-all duration-200 hover:shadow-lg"
      data-testid="todo-item"
    >
      <div className="flex items-start gap-3">
        {todo.completed ?
          <div
            className={`flex-shrink-0 w-6 h-6 mt-0.5 rounded-full border-2 transition-colors duration-200 flex items-center justify-center ${todo.completed
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'border-gray-300'
              }`}
          >
            <Check size={14} />
          </div>
          : <ClockAlert size={24} color="#FFA500" />
        }
        <div className="flex-grow min-w-0">
          <div className="flex gap-5">
            <h3
              className={`text-lg font-medium transition-all duration-200 flex ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-800'
                }`}
            >
              {todo.title}
            </h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${todo.completed
              ? 'bg-green-200 text-green-700 '
              : 'bg-yellow-200 text-yellow-700'
              }`}>

              {todo.completed ? "Completed" : "Pending"}
            </span>
          </div>
          <div className="flex justify-between">
          {todo.description && (
            <p
              className={`mt-1 text-sm transition-all duration-200 ${todo.completed ? 'text-gray-400' : 'text-gray-600'
                }`}
            >
              {todo.description}
            </p>
          )}
          {todo.completed ? '' :
          <button 
          onClick={() => alert('Complete action is not implemented.')}
          className='rounded-xl py-1 px-4 bg-blue-500 cursor-pointer text-white font-semibold text-sm hover:bg-blue-600 hover:scale-103
          '>Complete</button>
          }
        </div>
        </div>

        <div className="relative">
          {showDeleteConfirm ? (
            <div className="flex items-center space-x-2 animate-fade-in">
              <button
                onClick={() => alert('Delete action is not implemented.')}
                className="text-xs font-medium text-rose-600 hover:text-rose-700 transition-color cursor-pointer"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="text-gray-400 hover:text-rose-500 transition-colors duration-200 cursor-pointer"
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
