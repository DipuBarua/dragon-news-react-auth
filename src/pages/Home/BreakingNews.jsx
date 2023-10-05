import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className=" flex">
            <button className="btn btn-warning">Breaking News</button>
            <Marquee pauseOnHover={true} speed={150} >
                <p className=" font-bold mr-10">I can be a React component, multiple React components, or just some text.</p>
                <Link className=" mr-10 ">I can be a React component, multiple React components, or just some text.</Link>
                <Link className=" mr-10 text-blue-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, dolor.</Link>
                <Link className=" mr-10">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;