// importiamo tutti i componenti di gestionde delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

//  import provider contesto
import { FavortiteProvider } from "./contexts/FavoriteContext";

// importiamo le varie pages da usare nelle rotte
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Charachters from "./pages/Charachters";
import CharachterDetail from "./pages/CharachterDetail";
import NotFoundPage from "./pages/NotFoundPage";

// import del layout di ref
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

    return (
        <FavortiteProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/chisiamo" element={<AboutUs />} />
                        <Route path="/personaggi" >
                            <Route index element={<Charachters />} />
                            <Route path=":id" element={<CharachterDetail />} />
                        </Route>
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter >
        </FavortiteProvider>
    )
}

export default App