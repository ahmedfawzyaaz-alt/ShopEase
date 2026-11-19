
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-16">

      <div className="bg-pink-50 rounded-t-[40px] px-6 md:px-14 pt-14 pb-8">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between
          items-center gap-8 mb-14">

          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold
              text-gray-800 mb-3">
              Stay in the <span className="text-pink-600">Loop!</span>
            </h2>

            <p className="text-gray-500">
              Get the latest updates and exclusive offers.
            </p>
          </div>

          <div className="flex w-full max-w-md bg-white p-2
            rounded-2xl shadow-sm border border-pink-100">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 min-w-0 px-3 outline-none text-sm"
            />

            <button className="bg-pink-600 text-white px-5 py-3
              rounded-xl hover:bg-pink-700 transition
              flex items-center gap-2">
              Subscribe <FaArrowRight />
            </button>
          </div>

        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-black text-pink-600 mb-4">
              Shop<span className="text-gray-800">Style.</span>
            </h2>

            <p className="text-gray-500 leading-7">
              Find everything you love in one place.
              Shop smart, live better!
            </p>

            <div className="flex gap-3 mt-6">
              {[FaInstagram, FaFacebookF, FaTwitter].map((Icon, i) => (
                <div key={i}
                  className="w-10 h-10 rounded-full bg-white
                  text-pink-600 flex items-center justify-center
                  shadow-sm hover:bg-pink-600 hover:text-white
                  transition cursor-pointer">
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-5">
              Explore
            </h3>
            <ul className="space-y-4 text-gray-500">
              <li className="hover:text-pink-600 cursor-pointer">Home</li>
              <li className="hover:text-pink-600 cursor-pointer">Shop</li>
              <li className="hover:text-pink-600 cursor-pointer">About Us</li>
              <li className="hover:text-pink-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-5">
              Customer Care
            </h3>
            <ul className="space-y-4 text-gray-500">
              <li className="hover:text-pink-600 cursor-pointer">My Account</li>
              <li className="hover:text-pink-600 cursor-pointer">My Cart</li>
              <li className="hover:text-pink-600 cursor-pointer">Wishlist</li>
              <li className="hover:text-pink-600 cursor-pointer">Help Center</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-500">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-pink-600" />
                support@shopstyle.com
              </p>

              <p className="flex items-center gap-3">
                <FaPhone className="text-pink-600" />
                +20 100 000 0000
              </p>

              <p className="flex items-center gap-3">
                <FaLocationDot className="text-pink-600" />
                Cairo, Egypt
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-pink-200 mt-12 pt-6
          flex flex-col md:flex-row justify-between
          items-center gap-3 text-sm text-gray-500">

          <p>© 2026 ShopStyle. All rights reserved.</p>

          <p>
            Designed with <span className="text-pink-600">♥</span> for you
          </p>

        </div>

      </div>
    </footer>
  );
}
