import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>
                Counter
            </p>
            <p>Counter:{count}</p>   
            {/* this will display the counts  */}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}
