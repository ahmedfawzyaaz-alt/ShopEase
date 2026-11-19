import { createBrowserRouter } from "react-router";
import Home from "./src/pages/home/Home";
import Shop from "./src/pages/shop/Shop";
import About from "./src/pages/about/About";
import Contact from "./src/pages/contact/Contact";
import MainLayOut from "./src/mainLayOut/MainLayOut";
import Login from "./src/pages/login/Login";
import Register from "./src/pages/register/Register";
import Error from "./src/pages/error/Error";
import ProtectRegister from "./src/components/protectRegister/ProtectRegister";
import ProtectLogin from "./src/components/protectLogin/ProtectLogin";
import Cart from "./src/pages/cart/Cart";
import Wishlist from "./src/pages/wishlist/Wishlist";
import Profile from "./src/pages/profile/Profile";
import SingleProduct from "./src/pages/singleProduct/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/single-product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/login",
        element: (
          <ProtectLogin>
            <Login />
          </ProtectLogin>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectRegister>
            <Register />
          </ProtectRegister>
        ),
      },
    ],
  },
]);

export default router;
