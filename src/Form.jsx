import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export const Form = () => {
    const [showDescription, setShowDescription] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Add Task action is not implemented.')
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-100">
            <div className="mb-3">
                <input
                    type="text"
                    placeholder="What needs to be done?"
                    className="w-full px-4 py-2 text-gray-800 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    autoFocus
                />
            </div>

            {showDescription ? (
                <div className="mb-3 animate-fade-in">
                    <textarea
                        placeholder="Add a description (optional)"
                        className="w-full px-4 py-2 text-gray-700 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 min-h-[80px]"
                        data-testid="todo-description"
                    />
                </div>
            ) : (
                <button
                    type="button"
                    onClick={() => setShowDescription(true)}
                    className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-200 mb-3 flex items-center cursor-pointer"
                >
                    <PlusCircle size={16} className="mr-1" /> Add description
                </button>
            )}

            <div className="flex justify-end">
                <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
                >
                    Add Task
                </button>
            </div>
        </form>
    );
};
