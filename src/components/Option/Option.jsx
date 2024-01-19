import css from './Option.module.css'
export const Option = ({ name }) => {
    const handleClick = () => {
        console.log(Date.now());
    }
    return (
        <button onClick={handleClick} className={css.btn}>{name}</button>
        // <button onClick={()=>handleClick(5)} className={css.btn}>{ name}</button>
    )
}