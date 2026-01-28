// importiamo tutti i componenti di gestionde delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importiamo le varie pages da usare nelle rotte
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Charachters from "./pages/Charachters";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chisiamo" element={<AboutUs />} />
                <Route path="/personaggi" element={<Charachters />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App