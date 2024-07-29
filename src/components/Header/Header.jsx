import style from "./Header.module.css"
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNavigation } from "./HeaderNavigation";

const Header = () => {
    return (
        <header className={style.Header}>
            <HeaderLogo />
            <HeaderNavigation />
        </header>
    )
}

export { Header };