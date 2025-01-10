import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="bg-neutral flex p-4">
      <button className="btn btn-secondary mr-5">Breaking News</button>
      <Marquee pauseOnHover={true}>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components.....
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components.....
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components.....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
