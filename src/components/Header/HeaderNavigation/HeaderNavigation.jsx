import style from "./HeaderNavigation.module.css"
import { HeaderNavigationItem } from "../HeaderNavigationItem";
import { Link } from "react-router-dom";

const names = [
    { name : "HOME", path: "/" },
    { name : "CONTACT", path: "/contact-us" }
]

const HeaderNavigation = () => {
    return (
        <ul className={style.HeaderNavigation}>
            {names.map((elem) => (
                <Link to={elem.path}>
                    <HeaderNavigationItem 
                        text={elem.name}
                    />
                </Link>
            ))}
        </ul>
    )
}

export { HeaderNavigation };