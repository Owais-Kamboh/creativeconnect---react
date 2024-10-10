import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { ResponsiveHeader } from './responsiveheader';
import { Link } from 'react-router-dom';

interface Header2Props {
  onCategoryChange?: (category: string) => void;
}

export const Header2: React.FC<Header2Props> = ({ onCategoryChange }) => {
  const [itemCount, setItemCount] = useState<number>(0);

  const updateItemCount = () => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      const productsArray = JSON.parse(storedProducts);
      setItemCount(productsArray.length);
    } else {
      setItemCount(0);
    }
  };

  useEffect(() => {
    updateItemCount();

    const handleCartChange = () => {
      updateItemCount();
    };

    window.addEventListener('cartChanged', handleCartChange);

    return () => {
      window.removeEventListener('cartChanged', handleCartChange);
    };
  }, []);

  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    onCategoryChange?.(selectedCategory); // Notify the parent component if onCategoryChange is defined
  };
  return (
    <>
      <div className="hidden xl:flex w-screen pt-4 justify-between items-center text-white body-font container mx-auto">
        <div className="w-[17%] h-[17%]">
          <img
            src="https://itginnovators.com/CreativePrints/BackendStyle/logo/logo.png"
            alt="Logo"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-white w-[50%] py-1">
          <select
            className="pl-4 pr-8 py-2 bg-transparent text-gray-500 font-medium text-sm focus:outline-none"
            name="brandName"
            onChange={handleCategorySelect} 
          >
            <option value="allCategories">All Categories</option>
            <option value="clothingapparels">Clothing & Apparels</option>
            <option value="paperbags">Paper Bags</option>
            <option value="Brochures & Booklets">Brochures & Booklets</option>
            <option value="Promotional Items">Promotional Items</option>
            <option value="bagbackpacks">Bags & Backpacks</option>
            <option value="bussinescard">Business Cards</option>
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

        <div className="flex items-center gap-4 mr-8">
          <Link to="/login" target="_blank">
            <span className="relative inline-block group">
              <Icon icon="carbon:user" width="28" height="28" className="text-black" />
              <span className="absolute bottom-full right-0 mb-2 bg-black text-white text-xs rounded px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Admin Panel
              </span>
            </span>
          </Link>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <Icon icon="ph:heart-light" width="28" height="28" style={{ color: "black" }} />
          </span>
          <Link to="/addtocart">
            <span className="relative inline-block">
              <Icon icon="carbon:shopping-cart" width="28" height="28" className="text-black" />
              {itemCount > 0 && (
                <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white rounded-full px-1 text-xs font-bold">
                  {itemCount}
                </span>
              )}
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
       <Link to="/">
         <span className="text-sm">HOME</span>
       </Link>
       <span className="text-sm">BUDGET</span>
       <span className="text-sm">LUXURY</span>
       <span className="text-sm">PREMIUM</span>
       <span className="text-sm">TECH</span>
       <span className="text-sm">SUSTAINABLE</span>
       <span className="text-sm">CORPORATE</span>
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
      <div className="xl:hidden">
        <ResponsiveHeader />
      </div>
    </>
  );
};

