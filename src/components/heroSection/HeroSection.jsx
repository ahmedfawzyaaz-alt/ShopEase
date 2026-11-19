import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <>
      <div
        className="min-h-[750px] md:min-h-[500px] md:bg-[url('/assets/photo.png')] bg-cover bg-center bg-no-repeat p-4
        bg-[url('/assets/herothree.png')] 
      "
      >
        <div className="px-4 mb-3 flex flex-col items-center  md:items-start md:text-left my-4 w-full">
          <small className="text-pink-600 font-bold py-1 px-3 rounded-full bg-pink-200 text-sm">
            New Collection
          </small>
          <p className="md:text-5xl text-4xl my-3 md:mt-1 font-semibold ">
            Shop Smarter ,
            <span className="my-2 font-bold text-pink-600 block ml-5 md:ml-0">
              Live Better
            </span>
          </p>

          <p className="m-0 md:text-2xl text-xl  mt-1 font-bold">
            Discover The Best Products{" "}
            <span className="font-bold block ml-5 md:ml-0">
              With Amazing Prices
            </span>
          </p>

          <div className="my-4">
            <Link to={"/shop"} className="text-decoration-none">
              <button className="py-2 px-4 bg-pink-600 rounded text-white flex items-center gap-3 justify-center">
                Shop Now
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
