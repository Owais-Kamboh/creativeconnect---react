import { Icon } from "@iconify/react";
export const Header3 = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-6 bg-white container mx-auto">
    
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
        <div className="ml-6 flex space-x-8 font-medium ">
          <a href="#" className="text-sm">
            HOME
          </a>
          <a href="#" className="text-sm">
            BUDGET
          </a>
          <a href="#" className="text-sm">
            LUXURY
          </a>
          <a href="#" className="text-sm">
            PREMIUM
          </a>
          <a href="#" className="text-sm">
            TECH
          </a>
          <a href="#" className="text-sm">
            SUSTAINABLE
          </a>
          <a href="#" className="text-sm">
            CORPORATE
          </a>
        </div>
      </div>
      <div className="flex items-center text-gray-700">
        <Icon
          icon="ph:phone"
          width="16"
          height="16"
          style={{ color: "black" }}
        />
        <span className="text-sm">+971 50 182 3108</span>
      </div>

    </nav>
  );
};
