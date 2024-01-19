import css from './Feedback.module.css'
import { Feedbacktext } from "../Feedbacktext/Feedbacktext"
export const Feedback = () => {
    return (
        <div className={css.div}>
             <Feedbacktext text="Good"></Feedbacktext>
        <Feedbacktext text="Neutral"></Feedbacktext>
        <Feedbacktext text="Bad"></Feedbacktext>
            <Feedbacktext text="Total"></Feedbacktext>
                    <Feedbacktext text="Positive"></Feedbacktext>
        </div>
       
    )
}