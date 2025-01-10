import PropTypes from "prop-types";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { Link, useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const News = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header></Header>

      <Navbar></Navbar>

      <div className="grid grid-cols-4 gap-6">
        {/* News detail */}
        <div className=" self-start col-span-3 p-8 border rounded">
          <img alt="" className="w-full mb-5" />

          <h2 className="mb-2 text-2xl font-bold leading-[1.8]">Hello {}</h2>

          <p className="mb-8 leading-relaxed">{location?.pathname}</p>

          <Link
            to="/"
            className="btn btn-secondary w-fit flex items-center text-xl font-medium rounded-none"
          >
            <span className="text-2xl">
              <FiArrowLeft />
            </span>{" "}
            All news in this category
          </Link>
        </div>

        {/* Right side nav */}
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

News.propTypes = {
  aNews: PropTypes.object,
};

export default News;
