import css from './Feedbacktext.module.css'
export const Feedbacktext = ({ text, num,test }) => {
    const percent = text === "Positive" ? "%" : "";
    return (
        <p className={css.text}>{text} :{test} !!!!!{num}{ percent}</p>
    )
}