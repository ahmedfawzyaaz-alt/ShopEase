import { useContext, useRef, useState } from "react";
import { FaArrowRight, FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { supabaseKey, supabaseUrl } from "../../supabase";
import { useNavigate } from "react-router";
import { Authutication } from "../../context/AuthContext";
import Cookies from 'js-cookie'

export default function FormLogin() {
  const { token, setToken } = useContext(Authutication);
  const navigate = useNavigate(); 
  const email = useRef();
  const password = useRef();
  const [show, setShow] = useState(false);

  function handelLogin() {
    let userObject = {
      email: email.current.value,
      password: password.current.value, 
    };

    fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        apikey: supabaseKey,
      },
      body: JSON.stringify(userObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.access_token);
        setToken(data.access_token);
        Cookies.set("token", data.access_token);
        navigate("/");
      });
  }
  return (
    <form
      action=""
      className="flex flex-col gap-3 p-4"
      onSubmit={(e) => {
        e.preventDefault();
        handelLogin();
      }}
    >
      <input
        type="email"
        className="p-2 rounded-full border outline-0 placeholder:px-2"
        placeholder="Email Address"
        ref={email}
      />
      <div className="relative">
        <input
          type={`${show ? "text" : "password"}`}
          className="p-2 rounded-full border outline-0 placeholder:px-2 w-full"
          placeholder="Password"
          ref={password}
        />
        <span
          className="absolute right-4 top-3 text-pink-500 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {show ? <FaEyeSlash size={20} /> : <IoEye size={20} />}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 ">
          <input type="checkbox" />
          <p className="m-0 text-gray-600">Remember Me </p>
        </div>

        <div>
          <p className="m-0 text-pink-600 font-semibold">Forgot Password?</p>
        </div>
      </div>

      <button className="bg-pink-600 text-white p-2 rounded flex gap-2.5 justify-center items-center font-bold">
        Login
        <FaArrowRight />
      </button>
    </form>
  );
}
