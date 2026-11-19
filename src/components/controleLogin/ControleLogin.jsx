import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function ControleLogin() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 text-center gap-3 my-4 mx-3 ">
      <div className="border p-2 rounded-2xl flex items-center gap-3 justify-center">
        <FcGoogle size={25} />
        <small className="font-semibold">Continue with Google</small>
      </div>
      <div className="border p-2 rounded-2xl flex justify-center items-center gap-3 ml-3 md:ml-0">
        <FaFacebook size={25} className="text-blue-600 border-0" />
        <small className="font-semibold">Continue with Facebook</small>
      </div>
    </div>
  );
}
