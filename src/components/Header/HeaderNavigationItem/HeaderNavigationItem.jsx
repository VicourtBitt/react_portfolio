import style from "./HeaderNavigationItem.module.css"

const HeaderNavigationItem = ({text}) => {
    return (
        <>
            <li className={style.HeaderNavigationItem}>
                {text}
            </li>
        </>
    ) 
}

export { HeaderNavigationItem };