import SearchBox from "@/components/Helper/SearchBox";
import { BsEnvelopePaper } from "react-icons/bs";

const Newsletter = () => {
  return (
    <div className="bg-black w-full pt-16 pb-20 flex items-center justify-center flex-col text-white">
      <BsEnvelopePaper className="text-4xl mb-4" />
      <p className="text-2xl font-semibold">Subscribe to our Newsletter</p>
      <p className="text-xl text-gray-400 mt-4 flex items-center mx-auto pl-10">
        Get exclusive offers, travel tips, and special events delivered directly
        to your inbox.
      </p>
      {/* subscription input and btn */}
      <div className="w-[80%] mt-20 flex items-center justify-between">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-[60%] max-w-xl py-4 px-4 bg-white text-black rounded-lg outline-none"
        />
        <button className="w-[30%] py-4 px-4 text-green-500 text-base bg-white hover:bg-gray-700 transition-all duration-200 rounded-lg">
          Subscribe
        </button>
        {/* <button className="md:px-12 md:py-2.5 px-8 py-2 text-green-500 text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
          Book Now
        </button> */}
      </div>
    </div>
  );
};

export default Newsletter;
