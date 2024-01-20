import css from './Feedback.module.css'
import { Feedbacktext } from "../Feedbacktext/Feedbacktext"
export const Feedback = ({ values: { good, neutral, bad }, value }) => {
    return (
        <div className={css.div}>
             <Feedbacktext text="Good" num={good} test={value} ></Feedbacktext>
        <Feedbacktext text="Neutral"  num={neutral} test={value}></Feedbacktext>
        <Feedbacktext text="Bad"  num={bad}></Feedbacktext>
            <Feedbacktext text="Total"  ></Feedbacktext>
                    <Feedbacktext text="Positive"  ></Feedbacktext>
        </div>
       
    )
}