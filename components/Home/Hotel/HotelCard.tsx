import Image from "next/image";
import { FaHeart } from "react-icons/fa";

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const HotelCard = ({ hotel }: Props) => {
  return (
    <section>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        {/* Add to fav button */}
        <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col">
          <FaHeart className="w-3 h-3" />
        </div>
        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        {/* Image */}
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          className="object-cove traction-all duration-300 group-hover:scale-110"
          style={{ zIndex: 0 }}
        />
        {/* You can add more content here, such as hotel name, price, etc. */}
      </div>
      {/* content */}
      <div className="ml-1">
        <h1 className="font-semibold text-rose-500 hover:text-rose-300 mt-3 cursor-pointer transition-all duration-200">
          {hotel.name}
        </h1>
        <p className="text-sm text-gray-600 mt-3 mb-6 font-medium ">
          {hotel.location}
        </p>
        {/* ratings */}
        <div className="flex items-center space-x-2">
          <div className="bg-blue-800 rounded-md px-2 font-bold text-white">
            {hotel.rating}
          </div>
          <span className="text-gray-500 text-sm font-bold">
            {hotel.reviews} Reviews
          </span>
        </div>
        {/* price */}
        <p className="my-1.5 text-gray-700 font-medium">
          Starting from{" "}
          <span className="text-blue-600 font-bold">$ {hotel.price} </span>
        </p>
      </div>
    </section>
  );
};

export default HotelCard;
