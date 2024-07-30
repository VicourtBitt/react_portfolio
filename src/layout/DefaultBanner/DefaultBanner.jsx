import style from "./DefaultBanner.module.css"

const variants = {
    "SL" : style.DefaultBanner_SL,
    "BL" : style.DefaultBanner_BL,
    "BR" : style.DefaultBanner_BR,
    "ER" : style.DefaultBanner_ER
}

const DefaultBanner = ({type, children}) => {
    return (
        <section className={variants[type]}>
            {children}
        </section>
    )
}

export {DefaultBanner};