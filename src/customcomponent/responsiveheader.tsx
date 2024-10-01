import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";
export const ResponsiveHeader = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const openSidebar = () => {
    setSidebarVisible(true);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <>
      <header className="flex items-center justify-between py-12 px-6 container mx-auto">
        {/* Left: Menu Icon */}
        <div className="flex items-center space-x-4">
          <button className="text-2xl" onClick={openSidebar}>
            {/* Hamburger menu icon */}
            <svg
              className="w-6 h-6"
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
          </button>
        </div>
        {/* Center: Logo */}
        <div className="flex items-center space-x-2">
          {/* Logo Placeholder */}
          <img
            src="https://itginnovators.com/CreativePrints/BackendStyle/logo/logo.png"
            alt="Creative Connect Logo"
            className="h-20 hidden sm:block"
          />
        </div>
        {/* Right: Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <div className="flex items-center gap-4 mr-8">
            <Link to="/login">
              <span style={{ position: "relative", display: "inline-block" }}>
                <Icon
                  icon="carbon:user"
                  width="28"
                  height="28"
                  style={{ color: "black" }}
                />
                <span
                  style={{
                    fontSize: "0.5em",
                    position: "absolute",
                    top: "-13px",
                    right: "-6px",
                    backgroundColor: "black",
                    width: "36px",
                    height: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  Admin
                </span>
              </span>
            </Link>

            <span style={{ position: "relative", display: "inline-block" }}>
              <Icon
                icon="ph:heart-light"
                width="28"
                height="28"
                style={{ color: "black" }}
              />
             
            </span>
            <Link to="/addtocart">
              <span style={{ position: "relative", display: "inline-block" }}>
                <Icon
                  icon="carbon:shopping-cart"
                  width="28"
                  height="28"
                  style={{ color: "black" }}
                />
               
              </span>
            </Link>
          </div>
        </div>
      </header>
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-200 z-50 transition-transform duration-300 ease-in-out transform ${
            sidebarVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={closeSidebar}
            className="w-full text-left p-4 text-xl font-bold text-gray-700 border-b border-gray-300"
          >
            Menu &times;
          </button>
          <Link to="/">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-300"
            >
              HOME
            </a>
          </Link>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-300"
          >
            Budget
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-300"
          >
            Luxury
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-300"
          >
            Premium
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-300"
          >
            Tech
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-300"
          >
            Sustainable
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-300"
          >
            Corporate
          </a>
        </div>
      </div>
    </>
  );
};
