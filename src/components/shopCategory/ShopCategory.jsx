
export default function ShopCategory() {
  const productsCategories = [
    {
      img: "/assets/858379cd776fd0aad120029008bcaf70_d74a58586cd3.png",
      category: "Men's Clothing",
      catLength: "4",
    },
    {
      img: "/assets/shopping.png",
      category: "Electronics",
      catLength: "6",
    },
    {
      img: "/assets/fiz7982-y-dia-1-scaled.png",
      category: "Jewelry",
      catLength: "4",
    },
    {
      img: "/assets/Women_Category_card_1.png",
      category: "Women's Clothing",
      catLength: "6",
    },
  ];

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="border-l-7 w-1 rounded-full border-pink-600 h-7 ml-7 my-4"></div>

        <p className="m-0 text-2xl font-bold">
          Shop by Category
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 p-2 mx-3">
        {productsCategories.map((cat) => (
          <div
            key={cat.category}
            className="col-span-12 md:col-span-6 lg:col-span-3"
          >
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-100">
              <div className="h-20 w-20 overflow-hidden rounded-lg shrink-0">
                <img
                  src={cat.img}
                  alt={cat.category}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="m-0 text-lg font-semibold text-pink-600">
                  {cat.category}
                </p>

                <p className="m-0 text-sm text-gray-500">
                  {cat.catLength} Products
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
