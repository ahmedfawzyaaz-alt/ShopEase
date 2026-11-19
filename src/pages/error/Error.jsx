
import { Link } from "react-router";

export default function Error() {
  return (
    <div className="min-h-screen bg-[#FFF7FA] flex items-center justify-center px-4">

      <div className="text-center max-w-lg w-full">

        <div className="relative mb-4">
          <h1 className="text-[150px] md:text-[190px] font-black leading-none text-pink-200">
            404
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 text-base leading-7 mb-8">
          Sorry, we couldn't find the page you're looking for.
          It might have been removed or the link is incorrect.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-xl shadow-md shadow-pink-200 transition-all duration-300 hover:-translate-y-1"
        >
          Back To Home
        </Link>

        <p className="text-gray-400 text-sm mt-8">
          Don't worry, there's plenty more to explore!
        </p>

      </div>
    </div>
  );
}
