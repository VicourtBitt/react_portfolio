import { DefaultBanner } from "../../layout/DefaultBanner";
import { BannerText } from "../../components/BannerText/BannetText";
import { BannerImg } from "../../components/BannerImg/BannerImg";

const HomePage = () => {
    return (
        <>
            <DefaultBanner
                type="SL"
            >
                <BannerText 
                    title="Testando as Props"
                    text="
                        Somente o teste das props sendo passadas de um
                        cabeçalho de função para o corpo de um paragrafo
                    "
                />

                <BannerImg />
            </DefaultBanner>

            <DefaultBanner
                type="ER"
            >
                asd
            </DefaultBanner>
        </>
    )
}

export { HomePage };