import { Link } from "react-router-dom";

const NewsCard = ({ anews }) => {
    const { image_url, details, title, _id } = anews;
    return (
        <div className="card mb-16 bg-base-100 shadow-xl">
            <h2 className="card-title text-left mb-2">{title}</h2>
            <figure><img src={image_url} alt="" /></figure>
            <div className="card-body">
                {
                    (details.length > 200) ?
                        <p>{details.slice(0, 200)}<Link to={`/news/${_id}`} className=" text-blue-700 font-bold"> Read More...</Link></p>
                        :
                        <p>{details}</p>
                }

            </div>
        </div>
    );
};

export default NewsCard;