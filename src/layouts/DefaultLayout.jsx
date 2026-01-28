// importiamo comp segnaposto da libreria di routing
import { Outlet } from "react-router-dom";
// importiamo comp navbar per averlo nel template (che si ripeterà ad ogni sezione)
import NavBar from "../components/NavBar";
// import footer
import MainFooter from "../components/MainFooter";

export default function DefaultLayout() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <Outlet />
            <MainFooter />
        </div>
    );
}
