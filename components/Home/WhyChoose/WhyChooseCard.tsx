import Image from "next/image";

type Props = {
  image: string;
  title: string;
};
const WhyChooseCard = ({ image, title }: Props) => {
  return (
    <div>
      {/* Image */}
      <Image
        src={image}
        width={70}
        height={70}
        alt="image"
        className="mx-auto"
      />
      {/* context */}
      <h1 className="font-semibold text-lg text-gray-700 mt-3">{title}</h1>
      <p className="text-sm text-gray-600 mt-3 mb-6 font-medium ">
        Experience hassle-free travel planning with our expert guidance and
        comprehensive services. We make your journey memorable.
      </p>
    </div>
  );
};

export default WhyChooseCard;
