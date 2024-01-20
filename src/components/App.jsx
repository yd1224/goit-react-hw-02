import "modern-normalize";
// import { Options } from './Options/Options'
import { Description } from './Description/Description'
import { Feedback } from "./Feedback/Feedback";
import css from './Option/Option.module.css'
import { useState } from 'react';
// import { Option } from "./Option/Option"

const feedback={
	good: 0,
	neutral: 0,
	bad: 0
}
const Option = ({ name}) => {
   const [count, setCount]= useState(0);
    const handleClick = () => {
        // console.log(Date.now());
        setCount(count+1);
    }
    return (
        <button onClick={handleClick} className={css.btn}>{name}</button>
        // <button onClick={()=>handleClick(5)} className={css.btn}>{ name}</button>
    )
}
function App() {
    // const [count, setCount]= useState(0);
    // const handleClick = () => {

    //   setCount(count + 1);

    // }

  return (
    <>
      <Description></Description>
           <div>
            <Option name="Good"></Option>
        <Option name="Neutral"></Option>
         <Option name="Bad"></Option>
                 <Option name="Reset"></Option>
            </div>
      <Feedback values={feedback} value={count} ></Feedback>
    </>
  )
}

export default App
