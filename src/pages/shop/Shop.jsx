import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { FaFilter, FaHeart, FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { Authutication } from "../../context/AuthContext";
import { HashLoader } from "react-spinners";
import { Link, useOutletContext } from "react-router";

export default function Shop() {
  const { addToCart, wishListProducts, wishlist } = useContext(Authutication);
  const [filterProject, setFilterProject] = useState([]);
  const { search } = useOutletContext();
  const [price, setPrice] = useState(1000);
  const {
    data: products,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <HashLoader color="#ec4899" />
      </div>
    );
  }

  const caregories = [...new Set(products?.map((product) => product.category))];

  const handelFiltriration = (categoryWithFilter) => {
    const filterVariable = filterProject?.find(
      (item) => item === categoryWithFilter,
    ); // 1 => [] === men ? Add in Empty Array : Delete In The Empty Array
    // 2 => [men] === jewelry
    // => [men , jewelry]
    // 3 => [men , jewelry] === jewelry
    if (!filterVariable) {
      const addFilter = [...filterProject, categoryWithFilter];
      setFilterProject(addFilter); // FilterProjct === men
      localStorage.setItem("filterProccess", JSON.stringify(addFilter));
    } else {
      const loopFiltrition = filterProject?.filter(
        (item) => item !== categoryWithFilter,
      ); // jew !== jew => False
      setFilterProject(loopFiltrition);
      localStorage.setItem("filterProccess", JSON.stringify(loopFiltrition));
    }
  };

  const implementFiltration =
    filterProject.length > 0
      ? products.filter((item) => {
          return filterProject.includes(item.category);
        })
      : products;

  // [jew].includes(jew)

  const filterPrice = implementFiltration.filter((item) => {
    return item.price <= price;
  });

  const filterSearch = filterPrice.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  const handelRemoveFilter = () => {
    setFilterProject([]);
    setPrice(1000);
    localStorage.removeItem("filterProccess");
  };
  return (
    <>
      <div className="bg-white shadow-2xl md:p-3 p-2 rounded-2xl min-h-screen lg:mx-3">
        <div className="grid grid-cols-12 mx-4 shadow shadow-pink-400 rounded-2xl border">
          <div className="col-span-12 md:col-span-6 lg:col-span-4 min-h-screen md:rounded-l-2xl">
            <div className="mx-4 my-3">
              <div className="flex justify-between items-center">
                <p className="flex items-center gap-2 text-xl font-bold m-0">
                  <FaFilter className="text-pink-800" />
                  Filter
                </p>
                <button
                  className="m-0 text-pink-600 font-semibold underline cursor-pointer"
                  onClick={handelRemoveFilter}
                >
                  Clear Filters
                </button>
              </div>

              <div className="border mt-3"></div>

              <div className="my-4">
                <h2 className="my-3">Category</h2>

                {/* category and length */}

                <div className="flex flex-col gap-3">
                  {caregories?.map((category) => (
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <p className="m-0 mt-1  ">
                          <input
                            type="checkbox"
                            checked={filterProject.includes(category)}
                            onChange={() => handelFiltriration(category)}
                            className="scale-130 accent-pink-500"
                          />
                        </p>
                        <p className="m-0 text-lg font-semibold">{category}</p>
                      </div>

                      <p className="m-0  bg-pink-400 rounded-full text-white w-8 h-8 flex justify-center items-center">
                        {
                          products?.filter(
                            (product) => product.category === category,
                          ).length
                        }
                      </p>
                    </div>
                  ))}
                </div>
                <div className="my-5">
                  <h2 className="font-bold mb-3">Price Range</h2>

                  <input
                    type="range"
                    min={0}
                    max={1000}
                    value={price}
                    className="w-full accent-pink-600"
                    onChange={(e) => setPrice(e.target.value)}
                  />

                  <div className="flex justify-between">
                    <span>0 USD</span>
                    <span>{price} USD</span>
                  </div>
                </div>
                <div className="">
                  <button className="w-full bg-pink-600 text-white py-2 rounded">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-8 min-h-screen md:rounded-r-2xl">
            <div className="grid grid-cols-12">
              {filterSearch?.map((product) => (
                <div className="col-span-12  lg:col-span-4">
                  <div className="shadow m-2 h-[300px] flex flex-col rounded-xl overflow-hidden">
                    <div className=" h-[140px] overflow-hidden p-2 relative">
                      <img
                        src={product.image}
                        alt=""
                        className="h-full w-full object-contain rounded"
                      />

                      <Link to={`/single-product/${product.id}`}>
                        <span className="absolute top-2 bg-pink-100 rounded-full left-3 py-1 px-1">
                          <LuEye size={22} className="text-pink-600" />
                        </span>
                      </Link>
                      <span
                        className="absolute top-2 bg-pink-100 rounded-full right-3 py-1 px-1 cursor-pointer"
                        onClick={() => wishListProducts(product)}
                      >
                        {wishlist.find((item) => item.id === product.id) ? (
                          <FaHeart size={22} className="text-pink-600" />
                        ) : (
                          <FaRegHeart
                            size={22}
                            className="text-pink-600 bg-gray-200"
                          />
                        )}
                      </span>
                    </div>

                    <div className="px-3 py-2 flex flex-col flex-1 justify-around">
                      <p className="m-0 line-clamp-2 font-semibold">
                        {product.title}
                      </p>

                      <p className="m-0 font-bold mt-auto text-pink-600">
                        {product.price}$
                      </p>
                    </div>

                    <div className="p-3">
                      <button
                        className="bg-pink-600 w-full text-white rounded py-1 font-semibold"
                        onClick={() => {
                          addToCart(product);
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
