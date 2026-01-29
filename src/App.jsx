// importiamo tutti i componenti di gestionde delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo le varie pages da usare nelle rotte
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Charachters from "./pages/Charachters";
import CharachterDetail from "./pages/CharachterDetail";

// import del layout di ref
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/chisiamo" element={<AboutUs />} />
                    <Route path="/personaggi" >
                        <Route index element={<Charachters />} />
                        <Route path=":id" element={<CharachterDetail />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default App