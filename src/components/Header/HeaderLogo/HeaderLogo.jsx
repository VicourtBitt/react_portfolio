import { Link } from "react-router-dom";

import style from "./HeaderLogo.module.css"

const HeaderLogo = () => {
    return (
        <div className={style.HeaderLogo}>
            <Link to="/">
                <h1>VicourtBitt</h1>            
            </Link>
        </div>
    )
}

export { HeaderLogo };