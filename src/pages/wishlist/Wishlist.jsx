import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Authutication } from "../../context/AuthContext";

import { Link } from "react-router";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Wishlist() {
  const { wishlist, clearWishlist, addToCart } = useContext(Authutication);
  return (
    <>
      <div className="flex justify-between items-center mx-5 flex-col md:flex-row">
        <div className="flex gap-2 items-center my-2 md:my-0">
          <span>
            <FaHeart size={25} className="text-pink-600" />
          </span>
          <p className="m-0 text-2xl font-bold">
            My Wishlist({wishlist.length})
          </p>
        </div>

        <button
          className="m-0 text-pink-600 font-bold underline cursor-pointer"
          onClick={clearWishlist}
        >
          Clear Wishlist
        </button>
      </div>

      {wishlist.length === 0 ? (
        <div className="min-h-[70vh] flex items-center justify-center px-4 bg-pink-50">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 text-center max-w-lg w-full">
            <div className="w-28 h-28 mx-auto rounded-full bg-pink-100 flex items-center justify-center mb-6">
              <FaHeart size={45} className="text-pink-500" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Your Wishlist is Empty
            </h2>

            <p className="text-gray-500 leading-7 mb-8">
              You haven't added any products to your wishlist yet. Discover your
              favorite products and save them here!
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300 no-underline"
            >
              <MdOutlineShoppingBag size={22} />
              Explore Products
            </Link>

            <p className="text-sm text-gray-400 mt-6">
              Your favorite items will be waiting for you here.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 my-3 mx-5 gap-3">
          {wishlist?.map((product) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-3 mx-4">
              <div className="px-4 py-2 rounded shadow my-3">
                <div className="h-[120px] overflow-hidden">
                  <img
                    src={product.image}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex flex-col flex-1 py-3 ">
                  <h7 className="text-lg line-clamp-1 font-bold">
                    {product.title}
                  </h7>

                  <p className="m-0 font-bold text-pink-600">
                    {product.price}$
                  </p>
                </div>

                <button
                  className="py-1 w-full bg-pink-600 text-white rounded my-1"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
