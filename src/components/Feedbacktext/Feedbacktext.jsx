import css from './Feedbacktext.module.css'
export const Feedbacktext = ({ text }) => {
    const percent = text === "Positive" ? "%" : "";
    return (
        <p className={css.text}>{text} : {0}{ percent}</p>
    )
}