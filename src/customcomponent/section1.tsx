export const Section1 = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl text-center py-12 pt-16">
          Featured Collection
        </h1>
        <div>
          <ul className="flex justify-center gap-8 text-base  flex-wrap">
            <li className="relative text-gray-900  hover:text-gray-900 transition duration-300 ease-in-out">
              <span className="hover-underline-animation">All</span>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out">
              <span className="hover-underline-animation">Business Cards</span>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out">
              <span className="hover-underline-animation">
                Office Stationaries
              </span>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out">
              <span className="hover-underline-animation">
                Clothing & Apparel
              </span>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out">
              <span className="hover-underline-animation">Bag & BackPacks</span>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out">
              <span className="hover-underline-animation">Papers Bags</span>
            </li>
            <li className="relative text-gray-500 hover:text-gray-900 transition duration-300 ease-in-out">
              <span className="hover-underline-animation">
                Promotional Items
              </span>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};
