import Navbar from "./Navbar";
import Sidebar1 from "./Sidebar";
import Sidebar2 from "./Sidebar2";
import img1 from "../assets/bgpattern.png";
import img from "../assets/bg.jpg";

// import img from "../assets/bgpat.webp";

function Body({ children }) {
  return (
    <>
      <div className="h-auto w-full fixed z-50 top-0 ">
        <Navbar />
      </div>
      <div className="w-full h-auto mt-14 md:mt-24 gap-2 flex">
        <img
          src={img}
          alt=""
          className="fixed opacity-[0.02] w-full h-full -z-50 top-0"
        />
        <img
          src={img1}
          alt=""
          className="fixed opacity-30  md:h-full -z-50 top-0 right-0 w-full"
        />

        <div className=" md:flex md:w-16 h-auto hidden">
          <Sidebar1 />
        </div>
        <div className="w-full h-auto mx-5 md:mx-0">{children}</div>

        <div className="md:flex md:w-16 h-auto hidden ">
          <Sidebar2 />
        </div>
      </div>
    </>
  );
}

export default Body;
