import React from "react";
import { Link } from "react-router";

export default function ControleRegister() {
  return (
    <div className="text-center mt-3">
      <h5>
        Already have an account?{" "}
        <Link to={"/login"} className="text-decoration-none">
          <span className="text-pink-600 font-bold cursor-pointer">Login</span>
        </Link>
      </h5>
    </div>
  );
}
