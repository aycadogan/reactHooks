import React, {useState} from 'react'

const DemoUseState = () => {

    //this is using the same function or same handler but they are updating their own properties
    const [state, setState] = useState({ age: 18, siblingNum: 5}) //declaring a state variable

    const handleClick = (val) => setState({ 
        ...state, //object is a reference type you have to declare the previous state
        [val] : state[val] + 1  //{ age : 18 + 1}
    })

    const { age, siblingNum} = state

    return (
        <div>
            <p>Today I am {age} years of age!<br/></p> 
            <p>I have {siblingNum} siblings</p>
            <button onClick={handleClick.bind(null,'age')}>Get older!</button>{" "}
            <button onClick={handleClick.bind(null, 'siblingNum')}> More Siblings</button>
        </div>
    )
}

// const DemoUseState = () => {

//     const [count, setCount] = useState(0) //declaring a state variable
//     const [siblingNums, setSiblingNums] = useState(10)

//     const handleClick = () => setCount(count + 1)
//     const handleSiblingNum = () => setSiblingNums(siblingNums + 1)

//     return (
//         <div>
//             <p>Today I am {count} years of age!<br/></p> 
//             <p>I have {siblingNums} siblings</p>
//             <button onClick={handleClick}>Get older!</button>{" "}
//             <button onClick={handleSiblingNum}> More Siblings</button>
//         </div>
//     )
// }

export default DemoUseState
