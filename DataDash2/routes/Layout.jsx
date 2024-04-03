import {Outlet, Link} from "react-router-dom";
import NavBar from "../src/components/NavBar";

const Layout = () => {

    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default Layout