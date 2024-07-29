import style from "./Footer.module.css"

const Footer = ({text}) => {
    return (
        <footer className={style.Footer}>
            <span>Todos os direitos de criação pertencentes à {text}</span>
        </footer>
    )
}

export { Footer }