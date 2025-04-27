import Image from "next/image";
import Link from "next/link";

import {
  RiMapPin2Fill,
  RiMailFill,
  RiArrowRightLine,
  RiPhoneFindFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="pt-8 xl:pt-16 bg-white pl-10">
      {/* Contact info */}
      <div className="flex flex-1 gap-12 text-border">
        <div className="flex-1">
          <h4 className="text-xl font-semibold mb-6">Contact</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <RiMapPin2Fill className="text-accent" />
              <p>123 Construction Ave, Building City</p>
            </div>
            <div className="flex items-center gap-2">
              <RiPhoneFindFill className="text-accent" />
              <p>(555) 123-4567</p>
            </div>
            <div className="flex items-center gap-2">
              <RiMailFill className="text-accent" />
              <p>md.shakil.developer@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" pl-4 py-6 mt-12 border-t border-gray-400 text-border flex flex-col justify-center">
        <p className="flex justify-center mt-2.5">
          © {new Date().getFullYear()} Trip Bazaar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
