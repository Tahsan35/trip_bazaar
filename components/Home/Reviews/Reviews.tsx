import ReviewSlider from "./ReviewSlider";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text Content */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            What our customers are saying us?
          </h1>
          <p className="mt-6 text-gray-200">
            We take pride in delivering exceptional travel experiences that
            exceed our customers' expectations. Our commitment to quality
            service and attention to detail has earned us the trust and loyalty
            of travelers worldwide. Read what our valued customers have to say
            about their journeys with us.
          </p>
          {/* Ratings */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">4.88</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="text-amber-300" />
                <FaStar className="text-amber-300" />
                <FaStar className="text-amber-300" />
                <FaStar className="text-amber-300" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* slider */}
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
