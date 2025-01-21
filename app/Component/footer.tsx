import { Input } from "@/components/ui/input";
import { FaRegCopyright } from "react-icons/fa";
import Image from "next/image";
import SocialButton from "./homepage/socialButton";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
export default function Footer() {
  const socialProps = [
    {
      image: (<FaFacebookF size={23} />) as unknown as string,
      text: "SxN_by_NASH",
    },
    {
      image: (<TiSocialLinkedin size={25} />) as unknown as string,
      text: "SxN_by_NASH",
    },
    {
      image: (<HiOutlineMail size={22} />) as unknown as string,
      text: "sxn@gmail.com",
    },
    {
      image: (<FaInstagram size={25} />) as unknown as string,
      text: "SxN_by_NASH",
    },
  ];
  return (
    <footer className="">
      <div className="max-w-[1440px] w-full pt-3 px-4 space-y-8 md:px-11 ">
        <div className="mx-auto max-w-[1170px] w-full ">
          <div className="flex gap-3 flex-col md:flex-row justify-between items-center mb-5 py-6 border-b border-gray-300">
            <div className="font-bold text-2xl">
              <Image
                src={
                  "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1737480245/logo_drhkgr.jpg"
                }
                alt={"Logo"}
                width={106}
                height={106}
              />
            </div>
            <div>
              <div className="grid grid-cols-2 md:flex gap-2 md:gap-7">
                {socialProps.map((icon, index) => (
                  <SocialButton key={index} {...icon} />
                ))}
              </div>
            </div>
          </div>
          {/* first section: Links and Logo */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center md:text-left py-4">
            {/* Links Column 1 */}
            <div>
              <h3 className="text-Text2 text-md font-bold mb-4 ">
                Company Info
              </h3>
              <div className="flex text-Text text-md font-medium flex-col space-y-3">
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
              </div>
            </div>

            {/* Links Column 2 */}
            <div>
              <h3 className="text-Text2 text-md font-bold mb-4">Legal</h3>
              <div className="flex text-Text text-md font-medium flex-col space-y-3">
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
              </div>
            </div>

            {/* Links Column 3 */}
            <div>
              <h3 className="text-Text2 text-md font-bold mb-4">Features</h3>
              <div className="flex text-Text text-md font-medium flex-col space-y-3">
                <p>Business Marketing</p>
                <p>User Analytic</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
              </div>
            </div>
            {/* Links Column 4 */}
            <div>
              <h3 className="text-Text2 text-md font-bold mb-4">Resources</h3>
              <div className="flex text-Text2 text-md font-medium flex-col space-y-3">
                <p>IOS & Android</p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
              </div>
            </div>
            {/* Logo */}
            <div className="flex justify-center  items-center flex-col  md:items-start md:justify-start">
              <p className="font-bold mb-3 text-Text2 ">Get In Touch</p>

              <div className="py-3 flex justify-between">
                <Input
                  type="text"
                  placeholder="Email"
                  className="text-left bg-Primary border-none outline-none"
                />

                <p className="bg-zinc-800 text-white items-center text-sm px-2 flex justify-end">
                  Subscribe
                </p>
              </div>
              <p className="text-sm">Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="py-6 md:mx-auto px-2  md:px-20 bg-Primary  ">
        <div className="flex items-center text-center text-Text1 gap-1 text-sm ">
          <FaRegCopyright />
          <p>Made With Love By Finland All Right Reserved </p>
        </div>
      </div>
    </footer>
  );
}
