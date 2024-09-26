import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Footer1 } from "./Footer1";
import { NavbarComponent } from "./NavbarComponent";

const DetailedProduct = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState({
    _id: "",
    brandName: "",
    productTitle: "",
    size: "",
    productImage: "",
    productPrice: "",
    productColor: "",
    productRating: "",
    productCategory: "",
    productDescription: "",
  });

  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://ecommerce-ap-is.vercel.app/products/getProducts/${id}` // Adjust API endpoint
      );
      if (res.status === 200) {
        setProduct(res.data);
      }
    } catch (error) {
      console.log("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleQuantityChange = (change: number) => {
    if (quantity + change >= 1) {
      setQuantity(quantity + change);
    }
  };

  return (
    <>
    <NavbarComponent/>
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.productImage}
            alt={product.productTitle}
            className="w-full max-w-md"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-start">
          {/* Title and Price */}
          <h1 className="text-2xl font-normal text-black">
            {product.productTitle}
          </h1>
          <p className="text-red-600 text-xl font-normal">
            AED {product.productPrice}
          </p>

          {/* Description */}
          <p className="text-gray-400 mt-4 font-light">{product.productDescription}</p>

          {/* Quantity Selector */}
          <div className="flex items-center mt-6">
            <div className="flex items-center border border-gray-300">
              <button
                className="w-8 h-8 text-lg font-light text-black"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <input
                type="text"
                className="w-12 text-center border-none focus:outline-none text-gray-900 font-normal text-base"    
                value={quantity}
                readOnly
              />
              <button
                className="w-8 h-8 text-lg font-light text-black"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="ml-4 px-6 py-2 bg-gray-800 text-white font-normal hover:bg-gray-600">
              ADD TO CART
            </button>

            {/* Wishlist Button */}
            <button className="ml-4 text-gray-500 border border-gray-800 rounded-full w-10 h-10 flex items-center justify-center">
              
            </button>
          </div>

          {/* Additional Information */}
          <div className="mt-6">
            <ul className="flex space-x-8 text-gray-800 font-normal">
              <li className="hover:underline cursor-pointer">Size Guide</li>
              <li className="hover:underline cursor-pointer">Delivery & Return</li>
              <li className="hover:underline cursor-pointer">Ask a Question</li>
            </ul>
          </div>

          {/* SKU, Brand, and Category */}
          <div className="mt-6 text-gray-800 font-normal">
            <p className="mb-2">Brand: {product.brandName}</p>
            <p className="mb-2">Size: {product.size}</p>
            <p className="mb-2">Color: {product.productColor}</p>
            <p className="mb-2">Category: {product.productCategory}</p>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 font-light">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 font-light">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 font-light">
              <i className="fa fa-envelope"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 font-light">
              <i className="fa fa-pinterest"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 font-light">
              <i className="fa fa-comment"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer1 />
    </>
  );
};

export default DetailedProduct;
