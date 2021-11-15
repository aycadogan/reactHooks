import React, {useState, useEffect} from 'react'

const DemoUseEffect = () => {

    const [ randomNumber, setRandomNumber] = useState(0)
    const [ effectLogs, setEffectLogs] = useState([])

    useEffect(() => {
        setEffectLogs((prevEffectLogs) => [...prevEffectLogs, 'effect function has been invoked' ])
    }, [randomNumber])

    return(
        <div>
            <h1>{randomNumber}</h1>
            <button onClick={ () => setRandomNumber(Math.random())}>Generate random number</button>
            <div>
                {effectLogs.map((effect, index) => (
                    <div key={index}>
                        {'beer '.repeat(index) + effect}
                    </div>
                ))}
            </div>
        </div>
    )


}


// const DemoUseEffect = () => {

//       const [count, setCount] = useState(0) //declaring a state variable

//       const handleClick = () => setCount(count + 1)

//       useEffect( () => {
//         document.title = `You age ${count} years old`
//       })

//       useEffect( () => {
//         const clicked = () => console.log("window clicked")
//         window.addEventListener('click',clicked)

//         //return a cleanup
//         return () => {
//             window.removeEventListener('click', clicked)
//         }
//         })

//       return (
//           <div>
//               <p> look at the title of the current tab </p>
//               <button onClick={handleClick}> Update Title! </button>
//           </div>
//       )
// }

export default DemoUseEffect
