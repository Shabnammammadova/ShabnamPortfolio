import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-12 px-4 py-10 bg-black"
    >
      <h1 className="text-4xl font-semibold text-purple-500 text-center font-playfair">
        Contact me
      </h1>

      <div className="flex flex-col md:flex-row w-full max-w-[1300px] gap-12">
        <div className="w-full max-w-[400px] flex flex-col gap-4">
          <div className="flex items-center gap-2 ">
            <button className="p-5 ">
              <CiLocationOn className="text-white w-6 h-6" />
            </button>
            <div>
              <span className="font-clash text-3xl text-white">Address</span>
              <p className="text-white">Baku, Azerbaijan</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <button className=" p-5">
              {" "}
              <MdEmail className="text-white w-6 h-6" />
            </button>
            <div>
              <span className="font-clash text-3xl text-white">Email</span>
              <p className="text-white">mammadovaashabnamm@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <button className=" p-5">
              <FaPhoneAlt className="text-white w-6 h-6" />
            </button>
            <div>
              <span className="font-clash text-3xl text-white">Phone</span>
              <p className="text-white">+994 55 829 09 25</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <form className="w-full max-w-[700px] flex flex-col gap-5 font-playfair font-semibold">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block font-semibold mb-1 text-white"
                >
                  Your full name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border-2 border-black rounded-full py-2.5 px-4 w-full outline-none"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className="block font-semibold mb-1 text-white"
                >
                  Your email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-2 border-black rounded-full  py-2.5 px-4 w-full outline-none"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block font-semibold mb-1 text-white"
              >
                Your subject
              </label>
              <input
                type="text"
                id="subject"
                className="border-2 border-black rounded-full  py-2.5 px-4 w-full outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block font-semibold mb-1 text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="5"
                className="border-2 border-black rounded-3xl py-2.5 px-4 w-full outline-none resize-none"
              ></textarea>
            </div>
            <a
              href="#_"
              class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Send Message
              </span>
              <span class="relative invisible"> Send Message</span>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
