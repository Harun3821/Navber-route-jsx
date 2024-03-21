import { useLoaderData } from "react-router-dom";
import Uger from "../Usgger/Uger";

const Usger = () => {

    const users = useLoaderData()


    return (
        <div>
            <h2>Our Useger: {users.length}</h2>
            <p>Fantacit our nice usger wasem</p>

            <div className="usgerCard">
                {
                 users.map(uger => <Uger  key={Uger.id}   uger={uger} ></Uger>)
                }
            </div>
        </div>
    );
};

export default Usger;