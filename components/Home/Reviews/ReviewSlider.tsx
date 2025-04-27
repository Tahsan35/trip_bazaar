"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import required modules
import { EffectCards } from "swiper/modules";
import { reviewData } from "@/data/data";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const ReviewSlider = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[90%] h-[300px] md:w-[60%] md:h-[400px]"
      >
        {reviewData.map((data) => (
          <SwiperSlide key={data.id} className="bg-white rounded-3xl block">
            <div className="w-[80%] mx-auto mt-16">
              {/* text */}
              <p className="text-xs sm:text-sm md:text-base font-semibold">
                {data.review}
              </p>
              {/* icon */}
              <div className="flex items-center mt-4">
                <FaStar className="text-amber-300 w-3 h-3" />
                <FaStar className="text-amber-300 w-3 h-3" />
                <FaStar className="text-amber-300 w-3 h-3" />
                <FaStar className="text-amber-300 w-3 h-3" />
                <FaStar className="text-amber-300 w-3 h-3" />
              </div>

              {/* user profile */}
              <div className="pt-10">
                <div className="flex items-center space-x-4">
                  <Image
                    src={data.image}
                    width={60}
                    height={60}
                    alt="client photo"
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm sm:text-left font-semibold">
                    {data.name}
                  </p>
                  <p className="text-sm sm:text-balance text-gray-600">
                    Web Developer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewSlider;
