import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

const NewsCard = ({ aNews }) => {
  const { _id, author, title, image_url, details, rating, total_view } = aNews;
  return (
    <div className="border rounded-md">
      {/* news card header */}
      <section className="bg-base-200 flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-4">
          <img src={author.img} alt="" className="w-10 h-10 rounded-full" />

          <div>
            <h3 className="font-semibold">{author.name}</h3>

            <p className="text-sm">{author.published_date}</p>
          </div>
        </div>

        <div className=" flex items-center">
          <button className="btn btn-ghost btn-circle text-2xl">
            <FaRegBookmark />
          </button>

          <button className="btn btn-ghost btn-circle text-2xl">
            <CiShare2 />
          </button>
        </div>
      </section>

      <section className="px-5">
        {/* news card content */}
        <div className=" pb-5 mt-4 border-b">
          <h2 className="text-xl font-bold leading-[1.75] mb-5">{title}</h2>

          <img src={image_url} alt="" className="mb-8" />

          {details.length > 200 ? (
            <p>
              {details.slice(0, 245)}... <br />{" "}
              <Link
                to={`/news/${_id}`}
                state={{ news: aNews }}
                className="font-bold text-orange-500"
              >
                Read more
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>

        {/* news card footer */}
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-1 text-xl text-orange-500">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span className="text-neutral-content text-base font-medium ml-1.5 mt-1">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-2xl">
              <IoEye />
            </span>
            <span>{total_view}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

NewsCard.propTypes = {
  aNews: PropTypes.object,
};

export default NewsCard;
