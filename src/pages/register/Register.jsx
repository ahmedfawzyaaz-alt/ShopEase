import { useState } from "react";
import { Link, useLocation } from "react-router";
import FormRegister from "../../components/formRegister/FormRegister";
import ControleRegister from "../../components/controlesRegister/ControleRegister";

export default function Register() {
  const locationRegister = useLocation();
  return (
    <>
      <div className="grid grid-cols-12 lg:mx-[200px] mx-[10px] gap-2 md:gap-0">
        <div className="col-span-12 md:col-span-6 ">
          <div className="h-full ">
            <img
              src="/assets/registerlogin.png"
              alt=""
              className="object-cover w-full h-full md:rounded-l-2xl rounded-t-2xl md:rounded-t-none"
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 rounded-r-2xl">
          <div className="grid grid-cols-2 bg-pink-200 md:mx-4 rounded-full">
            <Link
              to={"/register"}
              className={`text-center p-2  transition-all duration-300 ease-in-out text-decoration-none ${locationRegister.pathname === "/register" ? "bg-pink-600 text-white rounded-full" : "text-black"}`}
            >
              Register
            </Link>

            <Link
              to={"/login"}
              className={` text-center p-2  transition-all duration-300 ease-in-out text-decoration-none ${locationRegister.pathname === "/login" ? "bg-pink-600 text-white rounded-full" : "text-black"}`}
            >
              Login
            </Link>
          </div>

          <div className="mx-4 my-3 text-center flex flex-col gap-2">
            <h4 className="text-fw-semibold m-0">Create Your Account</h4>
            <p className="m-0 text-sm text-gray-500">
              Join Us and start your journey
            </p>
          </div>
          
          <FormRegister />

          <div className="flex items-center gap-4 mx-5">
            <div className="flex-1 h-px bg-gray-300"></div>

            <small className="text-gray-500">or</small>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          
          <ControleRegister />
        </div>
      </div>
    </>
  );
}
