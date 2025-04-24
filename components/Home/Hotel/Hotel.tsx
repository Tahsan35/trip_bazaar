import SectionHeading from "@/components/Helper/SectionHeading";
import { hotelsData } from "@/data/data";
import HotelCard from "./HotelCard";

const Hotel = () => {
  return (
    <div className="pt-20 pb-20">
      {/* section heading */}
      <SectionHeading
        heading="Explore Our Hotel"
        subHeading="Your trusted travel partner for unforgettable journeys"
      />
      {/* section content */}
      <div className="mt-16 w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center">
        {/* hotel card  */}
        {hotelsData.map((data) => (
          <div key={data.id} className="shadow-lg rounded-md">
            <HotelCard hotel={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
