import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer"
import { Content } from "../../components/Content"
import { Outlet } from "react-router-dom"

const DefaultScreen = () => {
    return ( 
      <>
        <Header />

        <Content>
            <Outlet />
        </Content>

        <Footer text={"Victor Bittencourt."}/> 
      </>
    )
}

export { DefaultScreen }