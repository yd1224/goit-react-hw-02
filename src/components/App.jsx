import "modern-normalize";
import { Description } from './Description/Description'
import { Feedback } from "./Feedback/Feedback";
import { useState, useEffect } from 'react';
import { Option } from "./Option/Option"

const feedback={
	good: 0,
	neutral: 0,
	bad: 0
}
const getInitialFeedback = () => {
  
  const values = JSON.parse(window.localStorage.getItem("feedback"));
  if (values !== null) {
    return values;
  }
  return feedback;

};
function App() {
  const [mark, setMark] = useState(getInitialFeedback);
  const changeValue1 = () => {
    setMark({
      ...mark,
      good: mark.good+1
    })
  }
    const changeValue2 = () => {
    setMark({
      ...mark,
      neutral: mark.neutral+1
    })
    }
      const changeValue3 = () => {
    setMark({
      ...mark,
      bad: mark.bad+1
    })
      }
  const resetValue = () => {
     setMark({
       ...mark,
       good:0,
       bad: 0,
      neutral: 0
    })
  }
//   useEffect(() => {
//        console.log("!!!!!!!! ");
//    const id= setInterval(() => {
//         console.log(Date.now());
//     }, 3000)
//     return () => {
//   console.log("clean  up");
//       clearInterval(id);
// }
  // }, [])
    useEffect(() => {
      window.localStorage.setItem("feedback", JSON.stringify(mark));

}, [mark])
  const { good, neutral, bad } = mark;
      const total = good + neutral + bad;
  return (
    <>
      <Description></Description>
           <div>
        <Option name="Good" onUpdate={changeValue1}></Option>
        <Option name="Neutral" onUpdate={changeValue2}></Option>
        <Option name="Bad" onUpdate={changeValue3}></Option>
        {total>0&&(<Option name="Reset" onUpdate={resetValue}></Option>)}
      </div>
      <Feedback  values={mark}></Feedback>
    </>
  )
}





// function App(){
//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   }
//   );
	
// 	const updateX = () => {
// 			setValues({
// 			...values,
// 			x: values.x + 1
// 		});
// 	};

// 	const updateY = () => {
// 		setValues({
// 			...values,
// 			y: values.y + 1
// 		});
// 	};

//   return (
//     <div>
//       <p>
//         x: {values.x}, y: {values.y}
//       </p>

//       <button onClick={updateX}>Update x</button>
//       <button onClick={updateY}>Update y</button>
//     </div>
//   );
// }
 export default App
