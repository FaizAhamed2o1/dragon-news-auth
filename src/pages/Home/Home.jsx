import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="md:grid-cols-4 grid grid-cols-1 gap-6">
        {/* Left navigation */}
        <div>
          <LeftSideNav></LeftSideNav>
        </div>

        {/* News container */}
        <div className="md:col-span-2 space-y-8">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} aNews={aNews}></NewsCard>
          ))}
        </div>

        {/* Right nav */}
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
