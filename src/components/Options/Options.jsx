import css from './Options.module.css'
import { Option } from "../Option/Option"
export const Options = () => {
    return (
        <div className={css.box}>
            <Option name="Good"></Option>
        <Option name="Neutral"></Option>
         <Option name="Bad"></Option>
                 <Option name="Reset"></Option>
            </div>
        
    )
}