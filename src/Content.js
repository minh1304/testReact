import React, {memo, useRef,useEffect,useState} from 'react'

function Content({onIncrease}) {
    console.log('re-render');
    return (
        <>        
            <h2>Heloo</h2>
            <button onClick={onIncrease}>Click me!!</button>
        </>

    )
}
export default memo(Content)