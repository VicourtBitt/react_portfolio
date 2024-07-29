import { Route, Routes } from "react-router-dom";

import { DefaultScreen } from "./layout/DefaultScreen";
import { HomePage } from "./pages";
import { ContactPage } from "./pages";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultScreen />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact-us" element={<ContactPage />} />
            </Route>
        </Routes>
    )
}

export { Router };