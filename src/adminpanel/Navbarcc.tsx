
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavbarCc = () => {
  const navigate = useNavigate();
  const HandleClick = () => {
    localStorage.removeItem("authToken");
    console.log("token remove");
    try {
      navigate("/");
      console.log("Navigation successful");
    } catch (error) {
      console.error("Navigation failed:", error);
      
    }
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-xl font-bold">Admin Panel</h1>
      <div className="hidden md:flex space-x-4">
        <Link to="/edit" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
          Product List
        </Link>
        <Link to="/productupload" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
          Upload Product
        </Link>
        <Link to="/view" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
          View Products
        </Link>
        <button className='text-white bg-gray-700 px-3 py-2 rounded hover:bg-gray-900' onClick={HandleClick}>
          Logout
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden bg-gray-800 p-4 space-y-2">
        <Link to="/edit" className="block text-white hover:bg-gray-700 px-3 py-2 rounded">
          Product List
        </Link>
        <Link to="/productupload" className="block text-white hover:bg-gray-700 px-3 py-2 rounded">
          Upload Product
        </Link>
        <Link to="/view" className="block text-white hover:bg-gray-700 px-3 py-2 rounded">
          View Products
        </Link>
        <button className='block w-full text-left text-white bg-gray-700 px-3 py-2 rounded hover:bg-gray-900' onClick={HandleClick}>
          Logout
        </button>
      </div>
    )}
  </nav>
  );
};

export default NavbarCc;
