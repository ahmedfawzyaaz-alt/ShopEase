import { useEffect, useState } from "react";
import { IoStarSharp, IoHeartOutline, IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router";

export default function SingleProduct() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  function singleProductFunction() {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data)
        console.log(data);
      });
  }

  useEffect(() => {
    singleProductFunction();
  }, []);
  return (
    <div className="min-h-screen bg-pink-50 py-8 flex justify-center items-center">
      <div
        className="max-w-6xl w-full bg-white rounded-3xl
        shadow-xl shadow-pink-200/50 border border-pink-100
        overflow-hidden pb-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 pb-0 md:p-7">
          {/* Product Image */}
          <div
            className="bg-gradient-to-br from-pink-100 to-pink-200
            rounded-3xl min-h-[280px] md:min-h-[340px] flex justify-center items-center"
          >

            <img
              src={singleProduct.image}
              alt="Product Image"
              className="w-full h-[340px] object-contain p-6"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <span className="text-pink-600 font-bold text-xs mb-2">
              SPECIAL COLLECTION
            </span>

            <h1
              className="text-2xl md:text-3xl font-extrabold
              text-gray-800 mb-3"
            >
              {singleProduct.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1 text-pink-500">
                {[1, 2, 3, 4].map((star) => (
                  <IoStarSharp key={star} size={18} />
                ))}
                <IoStarSharp className="text-pink-200" size={18} />
              </div>

              <span className="text-pink-400 text-sm">(180 Reviews)</span>
            </div>

            {/* Price */}
            <div
              className="bg-pink-50 rounded-2xl p-4 mb-4
              flex items-center justify-between"
            >
              <div>
                <p className="text-gray-400 text-xs mb-1">Price</p>

                <p
                  className="text-2xl font-extrabold
                  text-pink-600 m-0"
                >
                  {singleProduct.price}$
                </p>
              </div>

              <span
                className="bg-pink-600 text-white
                px-3 py-1.5 rounded-xl text-xs font-bold"
              >
                20% OFF
              </span>
            </div>

            {/* Description */}
            <h3 className="font-bold text-gray-800 mb-2">
              Product Description
            </h3>

            <p className="text-gray-500 text-sm leading-6 mb-5">
              {singleProduct.description}
            </p>

            {/* Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                className="bg-pink-600 text-white py-3
                rounded-xl font-bold flex items-center
                justify-center gap-2 shadow-lg shadow-pink-200
                hover:bg-pink-700 hover:-translate-y-1
                transition-all duration-300"
              >
                <IoCartOutline size={21} />
                Add To Cart
              </button>

              <button
                className="bg-pink-100 text-pink-600
                py-3 rounded-xl font-bold flex items-center
                justify-center gap-2 hover:bg-pink-200
                transition-all duration-300"
              >
                <IoHeartOutline size={21} />
                Add To Wishlist
              </button>
            </div>

            <div
              className="mt-4 py-3 border-t border-pink-100
              text-center text-pink-500 text-xs font-medium"
            >
              ♡ Thank you for shopping with us ♡
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
