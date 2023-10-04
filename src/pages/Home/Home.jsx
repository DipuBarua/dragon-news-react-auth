import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <p className=" text-4xl font-poppins font-bold"> This is Home page</p>
        </div>
    );
};

export default Home;