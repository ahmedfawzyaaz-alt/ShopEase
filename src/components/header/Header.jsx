import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SiShopify } from "react-icons/si";
import { Link, useLocation } from "react-router";
import { Authutication } from "../../context/AuthContext";
import { MdOutlineShoppingCart, MdPerson } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

export default function Header({ search, setSearch }) {
  const { token, setToken, cart, wishlist } = useContext(Authutication);
  let userData = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  return (
    <header className="flex flex-col justify-center">
      <Navbar expand="lg" className="bg-body-tertiary py-3">
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <div className="flex items-center   ">
              <SiShopify size={35} className="text-pink-600" />
              <span className="font-bold">
                Shop<span className="text-pink-600">Ease</span>
              </span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation Links */}

            <Nav className="mx-auto flex  flex-col md:flex-row text-center items-center justify-center">
              <Nav.Link as={Link} to="/">
                <p
                  className={`font-bold m-0 py-1 px-3 rounded transition-colors duration-300 ease-in-out ${
                    location.pathname === "/"
                      ? "bg-pink-600 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  Home
                </p>
              </Nav.Link>

              <Nav.Link as={Link} to="/shop">
                <p
                  className={`font-bold m-0 py-1 px-3 rounded transition-colors duration-300 ease-in-out ${
                    location.pathname === "/shop"
                      ? "bg-pink-600 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  Shop
                </p>
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                <p
                  className={`font-bold m-0 py-1 px-3 rounded transition-colors duration-300 ease-in-out ${
                    location.pathname === "/about"
                      ? "bg-pink-600 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  About
                </p>
              </Nav.Link>

              <Nav.Link as={Link} to="/contact">
                <p
                  className={`font-bold m-0 py-1 px-3 rounded transition-colors duration-300 ease-in-out ${
                    location.pathname === "/contact"
                      ? "bg-pink-600 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  Contact
                </p>
              </Nav.Link>
            </Nav>

            <form action="" className="text-center my-2.5 ">
              <input
                type="text"
                className="p-2 border-2 border-pink-400 px-4 rounded-full outline-0 mx-5 "
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            <div className="flex items-center gap-2 justify-center my-4 md:my-0 ml-7 lg:ml-0">
              <div>
                <Link to={"/profile"} className="text-decoration-none">
                  <span className="py-2 px-3 rounded-full bg-pink-200 text-pink-700">
                    {userData?.first_name?.charAt(0).toUpperCase()}
                  </span>
                </Link>
              </div>
              <div className="mx-2">
                <p className="m-0 font-semibold">
                  {userData.first_name} {userData.last_name}
                </p>
                <p className="m-0 text-pink-600">{userData.email}</p>
              </div>
            </div>

            {token ? (
              <div className="flex gap-3 md:ml-5 ml-0 justify-center mt-3 md:mb-3  ">
                <span className=" p-2 rounded-2xl bg-pink-100 relative">
                  <Link to={"/cart"}>
                    <MdOutlineShoppingCart
                      size={25}
                      className="text-pink-600"
                    />
                    <small className="absolute -top-2 -right-2 px-2 text-white bg-pink-300 rounded-full">
                      {cart.length}
                    </small>
                  </Link>
                </span>

                <span className=" p-2 rounded-2xl bg-pink-100 relative">
                  <Link to={"/wishlist"}>
                    <FaHeart size={25} className="text-pink-600" />
                    <small className="absolute -top-2 -right-2 px-2 text-white bg-pink-300 rounded-full">
                      {wishlist.length}
                    </small>
                  </Link>
                </span>
              </div>
            ) : (
              <div className="flex gap-3 flex-col md:flex-row text-center justify-center">
                <Link to={"/register"}>
                  <button className="py-2 px-4 border rounded bg-pink-600 text-white w-[50%] md:w-full">
                    Register
                  </button>
                </Link>
                <Link to={"/login"}>
                  <button className="py-2 px-4 border rounded bg-pink-600 text-white w-[50%] md:w-full">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
