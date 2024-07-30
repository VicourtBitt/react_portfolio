import style from "./BannerText.module.css"

const BannerText = ({text, title}) => {
    return (
        <div className={style.BannerText}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export { BannerText };