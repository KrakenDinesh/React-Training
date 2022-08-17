import React, { useState } from 'react'

const Incre = () => {
    const [state, setstate] = useState(5)
    return (
        <div>
            <button className = "btn" onClick={()=> setstate(state*2)}>{state}</button>
        </div>
    )
}

export default Incre
