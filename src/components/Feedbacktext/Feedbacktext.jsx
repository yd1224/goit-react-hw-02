import css from './Feedbacktext.module.css'
export const Feedbacktext = ({ text, num}) => {
    const percent = text === "Positive" ? "%" : "";
    return (
        <p className={css.text}>{text} : {num}{ percent}</p>
    )
}