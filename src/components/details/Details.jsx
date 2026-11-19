import { MdLocalShipping, MdOutlineSecurity } from "react-icons/md";
import { BiRepost, BiSupport } from "react-icons/bi";

export default function Details() {
  const customerServices = [
    {
      icone: <MdLocalShipping size={35} />,
      title: "Free Shipping",
      description: "On Orders Over $50",
    },
    {
      icone: <MdOutlineSecurity size={35} />,
      title: "Secure Payment",
      description: "100% Secure",
    },
    {
      icone: <BiSupport size={35} />,
      title: "24/7 Support",
      description: "Always Here",
    },
    {
      icone: <BiRepost size={35} />,
      title: "Easy Return",
      description: "Withen 30 Days",
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-4 my-4">
      {customerServices?.map((custom) => (
        <div className="col-span-12 md:col-span-6 lg:col-span-3 ">
          <div className="flex gap-5  mx-2 px-5 rounded-3xl bg-pink-100 py-4 items-center ">
            <span className="text-pink-600">{custom.icone}</span>
            <div>
              <p className="m-0">{custom.title}</p>
              <p className="m-0 text-gray-500">{custom.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
