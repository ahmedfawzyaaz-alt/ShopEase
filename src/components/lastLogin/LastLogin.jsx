import React from "react";
import { Link } from "react-router";

export default function LastLogin() {
  return (
    <div className="">
      <h5 className="text-center mt-3">
        Don't have an account?{" "}
        <Link to={"/register"} className="text-decoration-none">
          <span className="text-pink-600 font-bold cursor-pointer">
            Register
          </span>
        </Link>
      </h5>
    </div>
  );
}
