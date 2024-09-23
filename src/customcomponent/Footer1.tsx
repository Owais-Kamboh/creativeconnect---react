import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export const Footer1 = () => {
  return (
    <>
      <footer className="bg-gray-100 py-14 mt-16">
        <div className="container mx-auto  flex flex-col md:flex-row md:justify-center  md:flex-wrap gap-8 text-gray-700">
          {/* Company Info */}
          <div className="md:w-1/6 text-center md:text-left">
            <div className="">
              <div className="w-[95%] h-auto mb-4 text-center md:text-left justify-center md:justify-start">
                <img
                  src="https://itginnovators.com/CreativePrints/BackendStyle/logo/logo.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex  items-center space-x-2 mb-6 mt-8 text-sm text-center md:text-left justify-center md:justify-start">
              <Icon
                icon="ion:location-outline"
                width="24"
                height="24"
                style={{ color: "#878787" }}
              />
              <p className="text-gray-500 ">Naif - Deira - Dubai</p>
            </div>
            <div className="flex items-center space-x-2 mb-6 text-sm text-center md:text-left justify-center md:justify-start">
              <Icon
                icon="ion:mail-outline"
                width="24"
                height="24"
                style={{ color: "#878787" }}
              />
              <p className="text-gray-500">ccaddxb@gmail.com</p>
            </div>
            <div className="flex items-center space-x-2 mb-6 text-sm text-center md:text-left justify-center md:justify-start">
              <Icon
                icon="ion:call-outline"
                width="24"
                height="24"
                style={{ color: "#878787" }}
              />
              <p className="text-gray-500">+971 54 539 6249</p>
            </div>
            <div className="flex space-x-4 text-gray-500 text-sm font-medium mt-4 text-center md:text-left justify-center md:justify-start">
              {/* Social Media Icons */}
              <span className="px-1">
                <Icon
                  icon="flowbite:facebook-solid"
                  width="18"
                  height="18"
                  style={{ color: "gray" }}
                />
              </span>
              <span className="px-1">
                <Icon
                  icon="bi:twitter"
                  width="18"
                  height="18"
                  style={{ color: "gray" }}
                />
              </span>
              <span className="px-1">
                <Icon
                  icon="ri:instagram-line"
                  width="18"
                  height="18"
                  style={{ color: "gray" }}
                />
              </span>
              <span className="px-1">
                <Icon
                  icon="ri:linkedin-fill"
                  width="18"
                  height="18"
                  style={{ color: "gray" }}
                />
              </span>
              <span className="px-1">
                <Icon
                  icon="jam:pinterest"
                  width="18"
                  height="18"
                  style={{ color: "gray" }}
                />
              </span>
            </div>
          </div>

          {/* Categories */}
          <div className="md:w-1/6 text-center md:text-left">
            <h3 className="mb-4 text-center md:text-left">Categories</h3>
            <ul>{/* Add category links here */}</ul>
          </div>

          {/* Information */}
          <div className="md:w-1/6 text-center md:text-left">
            <h3 className="mb-8 text-black">Information</h3>
            <ul className="font-medium text-gray-500 text-sm text-center md:text-left">
                <Link to= '/aboutus' >
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              </Link>
              <Link to={'/contactus'}>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              </Link>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Returns &amp; Exchanges
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Shipping &amp; Delivery
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="md:w-1/6 text-center md:text-left">
            <h3 className="mb-8 text-black">Useful Links</h3>
            <ul className="font-medium text-gray-500 text-sm">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Store Location
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Latest News
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Size Guide
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  FAQs 2
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <footer className="bg-gray-100 md:w-1/5 md:mt-0 text-center md:text-left md:block hidden">
            <div className="text-gray-700">
              {/* Other sections here */}

              {/* Newsletter Signup */}
              <div className="w-full">
                <h3 className="font-semibold mb-4">Newsletter Signup</h3>
                <p className="mb-4 text-gray-500 text-sm font-medium">
                  Subscribe to our newsletter and get 10% off your first
                  purchase
                </p>
                <form className="flex items-center justify-center">
                  <div className="relative w-72">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="border border-gray-800 rounded-full py-[14px] px-8 w-full focus:outline-none focus:border-gray-500 text-xs "
                    />
                    <button
                      type="submit"
                      className="absolute right-1 bottom-[4px] mt-1 bg-gray-800 text-white rounded-full px-4 py-[9px] text-sm"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </footer>
        </div>
      </footer>
      {/* hidden footer */}
      <div className=" flex flex-wrap justify-center sm:hidden ">
        <input
          type="email"
          placeholder="Your email address"
          className="border border-gray-800 rounded-full py-[14px] px-8  focus:outline-none focus:border-gray-500 text-xs "
        />
        <button
          type="submit"
          className=" mt-1 bg-gray-800 text-white rounded-full px-4 py-[9px] text-sm"
        >
          Subscribe
        </button>
      </div>
      {/* Footer2 */}
      <div className="flex justify-around items-center py-4 text-sm text-gray-500 font-medium flex-wrap text-center md:text-left">
  <p className=" text-center md:text-left md:pr-0">
    Copyright © 2021 <span className="text-red-700">CreativePrints</span> all rights reserved. Powered by ITG
  </p>
  <ul className="flex justify-between items-center space-x-4">
    <li>Shop</li>
    <Link to="/aboutus"><li>About Us</li></Link>
    <Link to="/contactus"><li>Contact</li></Link> 
    <li>Blog</li>
  </ul>
</div>
    </>
  );
};
