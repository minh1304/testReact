import React, {useRef,useEffect,useState} from 'react'


function Content() {
    const [count, setCount] = useState(60)
    const timerId = useRef()
    const prevCount = useRef()
    useEffect(() => {
        prevCount.current = count

    }, [count])
    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(preCount => preCount -1)
        }, 1000)
        console.log('Start ->', timerId.current);
    }
    const handelStop = () => {
        clearInterval(timerId.current)
        console.log('Stop ->', timerId.current);

    }
    console.log(count, prevCount.current);
    return (
        <div style={{padding: 20}}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handelStop}>Stop</button>
        </div>
    )
}
export default Content