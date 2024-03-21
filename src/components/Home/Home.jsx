
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footeur/Footer";




const Home = () => {

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        
           
        </div>
    );
};

export default Home;