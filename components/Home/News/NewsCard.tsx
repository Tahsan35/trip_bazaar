import Image from "next/image";

type Props = {
  image: string;
  title: string;
  date: string;
};
const NewsCard = ({ image, title, date }: Props) => {
  return (
    <div>
      {/* Image */}
      <div>
        <Image
          src={image}
          alt="Image"
          width={300}
          height={300}
          className="rounded-xl object-cover w-full h-full"
        />
      </div>
      {/* Title & date */}
      <h3 className="text-xl mt-5 font-semibold">{title}</h3>
      <p className="text-gray-500 mt-2">{date}</p>
    </div>
  );
};

export default NewsCard;
