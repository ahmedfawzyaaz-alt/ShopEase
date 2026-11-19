import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { toast } from "sonner";

export const Authutication = createContext();

export default function AuthContext({ children }) {
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  console.log(wishlist);

  useEffect(() => {
    const tokenFromToken = Cookies.get("token");
    setToken(tokenFromToken);
  }, []);

  function addToCart(product) {
    if (!token) {
      toast.error("Please Sign Up & Sign In First");
    } else {
      const existInCart = cart.find((item) => item.id === product.id);

      if (existInCart) {
        toast.error("Failed to add product");
      } else {
        const dataCart = [...cart, { ...product, quantity: 1 }];
        setCart(dataCart);
        localStorage.setItem("cart", JSON.stringify(dataCart));
        toast.success("Product Added Successfully");
      }
    }
  }

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const removeFromCart = (id) => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
    localStorage.setItem("cart", JSON.stringify(remove));
  };

  const qtyIncrease = (id) => {
    const qtyLoop = cart?.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setCart(qtyLoop);
    localStorage.setItem("cart", JSON.stringify(qtyLoop));
  };

  const qtyDecrease = (id) => {
    const qtyLoopTwo = cart?.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
        };
      } else {
        return item;
      }
    });
    setCart(qtyLoopTwo);
    localStorage.setItem("cart", JSON.stringify(qtyLoopTwo));
  };

  const wishListProducts = (productsWishlist) => {
    if (!token) {
      toast.error("Please Sign Up & Sign In First");
    } else {
      const wishlistData = wishlist.find(
        (item) => item.id === productsWishlist.id,
      );

      if (!wishlistData) {
        const newWishlist = [...wishlist, productsWishlist];
        setWishlist(newWishlist);
        localStorage.setItem("wishlist", JSON.stringify(newWishlist));
        toast.success("Product Added Successfully");
      } else {
        const filterWishlist = wishlist.filter(
          (item) => item.id !== productsWishlist.id, // 2 !== 2 ==> False
        );
        setWishlist(filterWishlist);
        localStorage.setItem("wishlist", JSON.stringify(filterWishlist));
      }
    }
  };

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist"));
    if (savedWishlist) {
      setWishlist(savedWishlist);
    }
  }, []);

  const clearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem("wishlist");
  };

  return (
    <>
      <div>
        <Authutication.Provider
          value={{
            token,
            setToken,
            addToCart,
            cart,
            removeFromCart,
            qtyIncrease,
            qtyDecrease,
            wishListProducts,
            wishlist,
            clearWishlist
          }}
        >
          {children}
        </Authutication.Provider>
      </div>
    </>
  );
}
