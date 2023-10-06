import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className=" text-2xl font-bold">All Caterogy</h2>
            {
                categories.map(category =>
                    <Link
                        className=" block space-y-2 ml-2 font-semibold text-xl"
                        key={category.id}>
                        {category.name}
                    </Link>)
            }
        </div>
    );
};

export default LeftSideNav;