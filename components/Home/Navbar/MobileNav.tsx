import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";
  return (
    <div>
      {/* OverLay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* navLinks */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        {/* close btn */}
        <CgClose
          onClick={closeNav}
          className="absolute top-10 right-10 text-white text-[20px] sm:text-[30px]"
        />
      </div>
    </div>
  );
};

export default MobileNav;
