import React from 'react'
import { Item } from './Item';

function List() {
    const todo = [
        {
            id: '1',
            title: 'Sample Task',
            description: 'This is a description of the sample task.',
            completed: false
        },

        {
            id: '2',
            title: 'Sample Task',
            description: 'This is a description of the sample task.',
            completed: true
        },

        {
            id: '3',
            title: 'Sample Task',
            description: 'This is a description of the sample task.',
            completed: false
        },
        {
            id: '4',
            title: 'Sample Task',
            description: 'This is a description of the sample task.',
            completed: true
        },
        {
            id: '5',
            title: 'Sample Task',
            description: 'This is a description of the sample task.',
            completed: true
        },
    ];
    return (
        <div className='h-82 overflow-y-scroll'>
            {todo.map((todo) => (
                <Item key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default List