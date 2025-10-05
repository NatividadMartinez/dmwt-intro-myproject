'use client';

import { useState } from 'react';

type Todo = { id: number; text: string };

const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '16px'
};

export default function Example() {
    const [todos, setTodos] = useState<Todo[]>([]);

    return (
        <main style={{ padding: 24 }}>
            <button
                style={buttonStyle}
                onClick={() =>
                    setTodos([...todos, { id: todos.length + 1, text: 'Learn TypeScript' }])
                }
            >
                Add
            </button>

            <ul>
                {todos.map((t) => (
                    <li key={t.id}>
                        {t.id}. {t.text}
                    </li>
                ))}
            </ul>
        </main>
    );
}