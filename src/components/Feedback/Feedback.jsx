import css from './Feedback.module.css'
import { Feedbacktext } from "../Feedbacktext/Feedbacktext"
export const Feedback = ({ values: { good, neutral, bad }, }) => {
    const total = good + neutral + bad;
    const positive = Math.round(((good + neutral) / total) * 100);
    return (
        <div className={css.div}>
            {total>0?(<> <Feedbacktext text="Good" num={good}  ></Feedbacktext>
        <Feedbacktext text="Neutral"  num={neutral}></Feedbacktext>
        <Feedbacktext text="Bad"  num={bad}></Feedbacktext>
            <Feedbacktext text="Total" num={total}  ></Feedbacktext>
                    <Feedbacktext text="Positive" num={positive}  ></Feedbacktext></>):<p className={css.text}>No feedback yet</p>}
            
        </div>
       
    )
}