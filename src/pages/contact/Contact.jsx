
import { useRef } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaRegClock,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaHeadset,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

export default function ContactUs() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const contactInfo = [
    {
      icone: <FaMapMarkerAlt size={22} />,
      title: "Our Address",
      description: "Cairo, Egypt",
    },
    {
      icone: <FaPhoneAlt size={22} />,
      title: "Phone",
      description: "+20 1011713790",
    },
    {
      icone: <FaRegEnvelope size={22} />,
      title: "Email",
      description: "support@shopease.com",
    },
    {
      icone: <FaRegClock size={22} />,
      title: "Working Hours",
      description: "Sun - Thu: 9:00 AM - 6:00 PM",
    },
  ];

  const socialMedia = [
    { icone: <FaFacebookF /> },
    { icone: <FaInstagram /> },
    { icone: <FaXTwitter /> },
    { icone: <FaYoutube /> },
    { icone: <FaTiktok /> },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    console.log(formData);

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <>
      {/* Header */}

      <div className="bg-pink-100 py-12 px-5">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Contact <span className="text-pink-600">Us</span>
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <Link to="/" className="text-gray-600 hover:text-pink-600">
                Home
              </Link>
              <span>/</span>
              <p className="m-0 text-pink-600 font-semibold">
                Contact Us
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center justify-center bg-white rounded-full w-24 h-24 text-pink-600">
            <FaHeadset size={55} />
          </div>
        </div>
      </div>

      {/* Contact Content */}

      <div className="grid grid-cols-12 gap-6 mx-4 md:mx-6 my-8">

        {/* Contact Information */}

        <div className="col-span-12 lg:col-span-6">
          <p className="text-pink-600 font-semibold m-0">
            Get In Touch
          </p>

          <h2 className="text-2xl md:text-3xl font-bold my-3">
            We Love to Hear From You!
          </h2>

          <p className="text-gray-500 leading-7">
            Have a question or need help? Feel free to contact us. We are always
            happy to help you.
          </p>

          <div className="flex flex-col gap-3 my-5">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 bg-pink-50 border border-pink-100 rounded-xl p-4"
              >
                <div className="bg-pink-100 text-pink-600 rounded-full w-11 h-11 flex items-center justify-center shrink-0">
                  {item.icone}
                </div>

                <div>
                  <p className="m-0 font-bold">{item.title}</p>
                  <p className="m-0 text-gray-500 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media */}

          <div className="my-6">
            <h3 className="font-bold text-xl">Follow Us</h3>

            <p className="text-gray-500 my-2">
              Stay connected with us on social media.
            </p>

            <div className="flex gap-3 my-4">
              {socialMedia.map((item, index) => (
                <div
                  key={index}
                  className="bg-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center"
                >
                  {item.icone}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}

        <div className="col-span-12 lg:col-span-6">
          <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4 md:p-6 shadow">

            <div className="flex items-center gap-3 mb-5">
              <div className="bg-pink-100 text-pink-600 rounded-full w-11 h-11 flex items-center justify-center">
                <FaPaperPlane size={20} />
              </div>

              <h3 className="m-0 text-xl font-bold">
                Send Us a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="mb-4">
                <label className="block font-semibold mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  ref={nameRef}
                  placeholder="Enter your name"
                  required
                  className="w-full border border-pink-200 rounded-lg p-3 outline-none focus:border-pink-500"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  ref={emailRef}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-pink-200 rounded-lg p-3 outline-none focus:border-pink-500"
                />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-2">
                  Your Message
                </label>

                <textarea
                  ref={messageRef}
                  placeholder="Write your message..."
                  rows={5}
                  required
                  className="w-full border border-pink-200 rounded-lg p-3 outline-none focus:border-pink-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white rounded-lg py-3 flex items-center justify-center gap-3 font-semibold hover:bg-pink-700 transition"
              >
                Send Message
                <FaPaperPlane />
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
