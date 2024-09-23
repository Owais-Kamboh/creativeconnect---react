import { Icon } from "@iconify/react";
import { ResponsiveHeader } from "./responsiveheader";
import { Link } from "react-router-dom";

export const Header2 = () => {

  return (
    <>
      {/* For screens larger than 1440px */}
      <div className="hidden xl:flex w-screen pt-4 justify-between items-center text-white body-font container mx-auto">
        <div className="w-[17%] h-[17%]">
          <img
            src="https://itginnovators.com/CreativePrints/BackendStyle/logo/logo.png"
            alt="Logo"
          />
        </div>

        {/* SEARCH BAR */}
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white w-[50%] py-1">
          <select className="pl-4 pr-8 py-2 bg-transparent text-gray-500 font-medium text-sm focus:outline-none">
            <option>All Categories</option>
            <option>All Categories</option>
            <option>All Categories</option>
            <option>All Categories</option>
          </select>

          <div className="h-6 w-px bg-gray-300"></div>

          <input
            type="text"
            placeholder="I'm searching for..."
            className="py-2 px-4 flex-grow focus:outline-none text-gray-600 text-sm"
          />
          <span className="pr-1">
            <button className="bg-red-800 text-white text-sm py-2 px-10 rounded-full">
              Search
            </button>
          </span>
        </div>

        {/* ICONS RIGHT SIDE */}
        <div className="flex items-center gap-4 mr-8">
          <Link to="/login">
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <Icon
              icon="carbon:user"
              width="28"
              height="28"
              style={{ color: "black" }}
            />
            <span style={{
              fontSize: '0.7em',
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'black',
              borderRadius: '100%',
              width: '15px',
              height: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>0</span>
          </span>
          </Link>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <Icon
              icon="ph:heart-light"
              width="28"
              height="28"
              style={{ color: "black" }}
            />
            <span style={{
              fontSize: '0.7em',
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'black',
              borderRadius: '100%',
              width: '15px',
              height: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>0</span>
          </span>
          <Link to="/addtocart">
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <Icon
              icon="carbon:shopping-cart"
              width="28"
              height="28"
              style={{ color: "black" }}
            />
            <span style={{
              fontSize: '0.7em',
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              backgroundColor: 'black',
              borderRadius: '100%',
              width: '15px',
              height: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>0</span>
          </span>
          </Link>
        </div>
      </div>

      {/* Header part2 for larger screens */}
      <nav className="hidden xl:flex items-center justify-between py-4 mb-6 bg-white container mx-auto">
        <div className="flex items-center">
          <button className="bg-[#515151] text-white px-4 py-4 flex items-center hover:bg-[#8a8a8a]">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="text-sm px-2">SHOP BY CATEGORY</span>
          </button>
          <div className="ml-6 flex space-x-8 font-medium">
           <Link to="/"><a href="#" className="text-sm">HOME</a></Link>
            <a href="#" className="text-sm">BUDGET</a>
            <a href="#" className="text-sm">LUXURY</a>
            <a href="#" className="text-sm">PREMIUM</a>
            <a href="#" className="text-sm">TECH</a>
            <a href="#" className="text-sm">SUSTAINABLE</a>
            <a href="#" className="text-sm">CORPORATE</a>
          </div>
        </div>
        <div className="flex items-center pr-6 text-gray-700">
          <Icon
            icon="ph:phone"
            width="16"
            height="16"
            style={{ color: "black" }}
          />
          <span className="text-sm">+971 50 182 3108</span>
        </div>
      </nav>

      {/* For screens smaller than 1440px */}
      <div className="xl:hidden">
        <ResponsiveHeader />
      </div>
    </>
  );
};
