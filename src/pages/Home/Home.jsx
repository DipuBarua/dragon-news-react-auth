import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className=" border-black">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" border-black col-span-2 border text-center">
                    <p className=" text-4xl font-poppins font-bold"> This is Home page</p>
                </div>
                <div className=" border-black">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;