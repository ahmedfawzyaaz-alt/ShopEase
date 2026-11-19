import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Authutication } from "../../context/AuthContext";

export default function Wishlist() {
  const { wishlist } = useContext(Authutication);
  return (
    <>
      <div className="flex justify-between items-center mx-5 flex-col md:flex-row">
        <div className="flex gap-2 items-center my-2 md:my-0">
          <span>
            <FaHeart size={25} className="text-pink-600" />
          </span>
          <p className="m-0 text-2xl font-bold">My Wishlist({wishlist.length})</p>
        </div>

        <p className="m-0 text-pink-600 font-bold underline cursor-pointer">
          Clear Wishlist
        </p>
      </div>

      <div className="grid grid-cols-12 my-3 mx-5 gap-3">
        {wishlist?.map((product) => (
          <div className="col-span-12 md:col-span-6 lg:col-span-3 mx-4">
            <div className="px-4 py-2 rounded shadow my-3">
              <div className="h-[120px] overflow-hidden">
                <img src={product.image} alt="" className="h-full w-full object-contain" />
              </div>

              <div className="flex flex-col flex-1 py-3 ">
                <h7 className="text-lg line-clamp-1 font-bold">{product.title}</h7>

                <p className="m-0 font-bold text-pink-600">{product.price}$</p>
              </div>



              <button className="py-1 w-full bg-pink-600 text-white rounded my-1">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
