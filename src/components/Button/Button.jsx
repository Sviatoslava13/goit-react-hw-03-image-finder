import s from './Button.module.css'
const Button = ({updatePage}) => (
    <button onClick={updatePage} className={s.button}>Load more</button>
)
export default Button