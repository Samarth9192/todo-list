import React from 'react';

export const Filter = () => {
    const counts = {
        total: 5,
        active: 2,
        completed: 3
    }

    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-100">
            <div className="text-sm text-gray-600 mb-3 sm:mb-0">
                {counts.total === 0 ? (
                    <span>No tasks yet</span>
                ) : (
                    <span>
                        {counts.active} active / {counts.completed} completed
                    </span>
                )}
            </div>

            <div className="flex space-x-1 bg-gray-100 rounded-md p-1">
                <button
                    className="px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer bg-white text-indigo-700 shadow-sm"
                >
                    All
                </button>
                <button
                    className="px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer"
                >
                    Active
                    <span className="ml-1">{counts.active}</span>
                </button>
                <button
                    className="px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer"
                >
                    Completed
                    <span className="ml-1">{counts.completed}</span>
                </button>
            </div>
        </div>
    );
};
