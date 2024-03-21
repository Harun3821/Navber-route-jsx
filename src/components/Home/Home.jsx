import { Outlet } from "react-router-dom";
import Header from "../Header/Header";



const Home = () => {

    return (
        <div>
            <Header></Header>
          <h3>Thes is the home compontes</h3>
         
          <Outlet></Outlet>
        </div>
    );
};

export default Home;