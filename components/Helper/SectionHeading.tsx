type Props = {
  heading: string;
};

const SectionHeading = ({ heading }: Props) => {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="text-xl sm:text-3xl text-blue-950 font-bold">{heading}</h1>
      <p className="mt-2 text-gray-700 sm:text-base text-sm font-medium">
        Experience the world's finest destinations and make lasting memories
      </p>
    </div>
  );
};

export default SectionHeading;
