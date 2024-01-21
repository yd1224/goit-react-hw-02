import css from './Option.module.css'

export const Option = ({ name, onUpdate}) => {
//    const [count, setCount]= useState(0);
//     const handleClick = () => {
//         // console.log(Date.now());
//         setCount(count+1);
//     }
    return (
        <button onClick={onUpdate} className={css.btn}>{name}</button>
        // <button onClick={()=>handleClick(5)} className={css.btn}>{ name}</button>
    )
}