import { GiTiredEye } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { Link } from "react-router";

export default function About() {
  const ourMissionandVision = [
    {
      title: "Our Mission",
      icone: <TbTargetArrow size={35} />,
      description:
        "To provide a seamless shopping experience with high quality products and excellent customer service.",
    },
    {
      title: "Our Vision",
      icone: <GiTiredEye size={35} />,
      description:
        "To become the most trusted and favorite online store in Egypt and beyond.",
    },
  ];
  return (
    <>
      <div
        className="min-h-[750px] md:min-h-[500px] md:bg-[url('/assets/photo.png')] bg-cover bg-center bg-no-repeat p-4
        bg-[url('/assets/herothree.png')] "
      >
        <div className="md:mt-[120px] mt-[150px] flex justify-center md:justify-start md:ml-[70px]">
          <p className="font-bold text-6xl">
            About <span className="text-pink-600">US</span>
          </p>
        </div>

        <div className="flex justify-center md:justify-start md:ml-[70px]">
          <p className="text-2xl font-semibold cursor-pointer flex gap-3 items-center">
            <Link to={"/"} className="text-black text-decoration-none">
              Home
            </Link>{" "}
            &gt;
            <Link to={"/about"} className="text-black text-decoration-none">
              About
            </Link>
          </p>
        </div>
      </div>

      <div className="flex justify-center my-4">
        <div className="max-w-6xl shadow p-4 rounded">
          <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
            {/* image */}
            <div className="h-70 overflow-hidden">
              <img
                src="/assets/ourmission.png"
                alt=""
                className="h-full w-full object-cover rounded"
              />
            </div>

            <div>
              <p className="text-2xl font-bold text-pink-600">Our Story</p>

              <p className="text-4xl font-semibold">
                Welcome to <span className="text-pink-600">ShopEase!</span>
              </p>

              <p className="text-lg leading-9 font-semibold">
                We're more than just an online store – we're your shopping
                partner. Our journey started with a simple idea: to make online
                shopping easier, prettier, and more enjoyable for everyone. From
                stylish clothes to the latest electronics, beautiful jewelry,
                and more – we bring you the best products at the best prices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mx-4 text-pink-600">
          <h3 className="mt-5 ml-4">Our Mission & Vision</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-3 md:mx-5 my-6">
          {ourMissionandVision?.map((item) => (
            <div
              key={item.title}
              className="bg-pink-50 rounded-xl p-4 md:p-5 shadow-sm mx-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 shrink-0 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
                  {item.icone}
                </div>

                <p className="m-0 text-lg md:text-xl font-bold">{item.title}</p>
              </div>

              <p className="m-0 mt-3 text-sm md:text-base text-gray-600 leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
