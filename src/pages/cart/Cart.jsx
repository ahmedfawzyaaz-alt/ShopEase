import { useContext } from "react";
import { FaLongArrowAltRight, FaMinus, FaPlus } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { Authutication } from "../../context/AuthContext";
import { FaShoppingBag, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

export default function Cart() {
  const { cart, removeFromCart, qtyIncrease, qtyDecrease } =
    useContext(Authutication);
  const navigate = useNavigate();
  const totalPrice = cart.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);
  return (
    <>
      <div className="flex justify-between mx-5 items-center flex-col md:flex-row ">
        <h4>Your Cart ({cart.length})</h4>
        <Link to={"/shop"}>
          <p className="m-0 flex gap-3 items-center justify-center pl-4 md:pl-0 w-full md:w-auto text-pink-600 underline font-semibold">
            Continue Shopping
            <FaLongArrowAltRight />
          </p>
        </Link>
      </div>

      {/* distribution & devided */}

      {cart.length === 0 ? (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
          <div
            className="w-full max-w-lg bg-gradient-to-br from-pink-50 via-white to-pink-100
        rounded-3xl p-10 text-center shadow-xl shadow-pink-100
        border border-pink-100"
          >
            <div
              className="w-32 h-32 mx-auto rounded-full
          bg-gradient-to-br from-pink-200 to-pink-400
          flex items-center justify-center shadow-lg shadow-pink-200 mb-7"
            >
              <FaShoppingBag className="text-white text-5xl" />
            </div>

            <h2 className="text-3xl font-extrabold text-pink-600 mb-3">
              Your Cart is Empty!
            </h2>

            <p className="text-gray-500 text-base leading-7 mb-8">
              Your shopping journey starts here. Discover amazing products and
              add your favorites!
            </p>

            <Link
              to="/shop"
              className="inline-flex items-center justify-center
          bg-gradient-to-r from-pink-500 to-pink-600
          text-white px-9 py-3.5 rounded-full font-bold
          shadow-lg shadow-pink-300
          hover:from-pink-600 hover:to-pink-700
          hover:-translate-y-1 hover:shadow-xl
          transition-all duration-300"
            >
              Start Shopping
            </Link>

            <p className="text-pink-400 text-sm mt-6 font-medium">
              Made with love ♡
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6 lg:col-span-8 self-start shadow mx-3 rounded">
            {cart?.map((item) => (
              <div>
                <div className="hidden lg:grid grid-cols-5 my-3 items-center gap-5">
                  {/* Image & Info Products */}

                  <div className="col-span-2 flex gap-3 items-center ml-5">
                    <div className="w-20 h-20 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div>
                      <p className="m-0 font-semibold line-clamp-1">
                        {item.title}
                      </p>
                      <p className="m-0 text-sm text-gray-400">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  {/* qty */}

                  <div className="flex gap-3 items-center bg-gray-200 justify-center mx-3 py-2 rounded-2xl ">
                    <button
                      className="py-1 px-2 bg-white"
                      onClick={() => qtyDecrease(item.id)}
                    >
                      <FaMinus />
                    </button>
                    <span className="flex justify-center ml2 font-semibold">
                      {item.quantity}
                    </span>
                    <button className="py-1 px-2 bg-white">
                      <FaPlus onClick={() => qtyIncrease(item.id)} />
                    </button>
                  </div>

                  <span className=" font-bold text-center text-pink-600">
                    {item.price * item.quantity}$
                  </span>

                  <span className="flex justify-center ">
                    <IoTrashBin
                      size={21}
                      className="cursor-pointer transition-all duration-150 hover:text-pink-600"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </span>
                </div>

                {/* Tablet & Mobile Design */}

                <div className="lg:hidden flex flex-col">
                  <div className="flex gap-4 my-3 mx-3">
                    <div className="w-20 h-20 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <p className="m-0">{item.title}</p>
                      <p className="m-0 text-sm text-gray-400">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mx-4 my-3">
                    <div className="flex gap-3 items-center bg-gray-200 justify-center mx-3 py-2 px-3 rounded ">
                      <button
                        className="py-1 px-2 bg-white"
                        onClick={() => qtyDecrease(item.id)}
                      >
                        <FaMinus />
                      </button>
                      <span className="flex justify-center ml2 font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        className="py-1 px-2 bg-white"
                        onClick={() => qtyIncrease(item.id)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                    <span className="font-bold m-0 text-pink-600">
                      {item.price * item.quantity}$
                    </span>
                    <span>
                      <IoTrashBin
                        size={21}
                        className="hover:text-pink-600 transition-all duration-150 "
                        onClick={() => removeFromCart(item.id)}
                      />
                    </span>
                  </div>
                </div>

                <div className="border-1 mx-3 my-2"></div>
              </div>
            ))}
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-4 mx-3 shadow rounded p-4 self-start">
            <div className="">
              <p className="font-bold text-2xl px-3">Order Summary</p>
            </div>

            {/* subTotal & Shipping */}

            <div className="flex flex-col mx-4 my-3 gap-4">
              <div className="flex justify-between">
                <span className="font-bold">Subtotal</span>
                <span className="font-bold text-pink-600">{totalPrice}$</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Shipping</span>
                <span className="font-bold text-pink-600">Free</span>
              </div>
            </div>

            <div className="border"></div>

            {/* Total */}

            <div className="flex justify-between items-center my-4 mx-4">
              <p className="m-0 font-bold text-xl">Total</p>
              <span className="font-bold text-pink-600 text-xl">
                {totalPrice}$
              </span>
            </div>

            <button className="bg-pink-600 py-2 px-3 flex justify-center w-full rounded text-white">
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
