import { useRef, useState } from "react";
import { FaArrowRight, FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { supabaseUrl, supabaseKey } from "../../supabase";
import { useNavigate } from "react-router";

export default function FormRegister() {
  const navigate = useNavigate();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  function handelRegister(e) {
    e.preventDefault();
    let userData = {
      email: email.current.value,
      password: password.current.value,
      data: {
        first_name: firstName.current.value,
        last_name: lastName.current.value,
      },
    };

    fetch(`${supabaseUrl}/auth/v1/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        apikey: supabaseKey,
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user.user_metadata);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user.user_metadata));

          navigate("/login");
        }
      });
  }

  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <form
      action=""
      className="flex flex-col gap-3 p-4"
      onSubmit={handelRegister}
    >
      <input
        type="text"
        className="p-2 rounded-full border outline-0 placeholder:px-2"
        placeholder="First Name"
        ref={firstName}
      />
      <input
        type="text"
        className="p-2 rounded-full border outline-0 placeholder:px-2"
        placeholder="Last Name"
        ref={lastName}
      />
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

      <div className="relative">
        <input
          type={`${showConfirm ? "text" : "password"}`}
          className="p-2 rounded-full border outline-0 placeholder:px-2 w-full"
          placeholder="Confirm Password"
          ref={confirmPassword}
        />

        <span
          className="absolute right-4 top-3 text-pink-500 cursor-pointer"
          onClick={() => setShowConfirm(!showConfirm)}
        >
          {showConfirm ? <FaEyeSlash size={20} /> : <IoEye size={20} />}
        </span>
      </div>

      <button className="bg-pink-600 text-white p-2 rounded flex gap-2.5 justify-center items-center font-bold">
        Register
        <FaArrowRight />
      </button>
    </form>
  );
}
