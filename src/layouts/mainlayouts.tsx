import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/navbar.component";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <Outlet/>
            <ToastContainer />
        </>
    )
}

export default MainLayout;