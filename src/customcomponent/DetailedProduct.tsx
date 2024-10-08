import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Footer1 } from "./Footer1";
import Swal from "sweetalert2";
import { Header2 } from "./header2";
import { Header } from "./header";

// Define the structure of a product
interface Product {
  _id: string;
  brandName: string;
  productTitle: string;
  size: string;
  productImage: string;
  productPrice: string;
  productColor: string;
  productRating: string;
  productCategory: string;
  productDescription: string;
}

const DetailedProduct = () => {
  const { id } = useParams<{ id: string }>(); // Get the product ID from the URL
  const [product, setProduct] = useState<Product | null>(null); // Initial state as null
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProduct = async () => {
    try {
      Swal.fire({
        title: "Loading...",
        html: "Please wait while we process your request.",
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const res = await axios.get<Product>(
        `https://ecommerce-ap-is.vercel.app/products/getProducts/${id}` // Adjust API endpoint
      );
      if (res.status === 200) {
        setProduct(res.data);
      }
    } catch (error) {
      console.log("Error fetching product:", error);
    } finally {
      setLoading(false);
      Swal.close();
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

  const handleClick = () => {
    const productData = {
      id: product._id,
      image: product.productImage,
      title: product.productTitle,
      quantity: quantity,
      price: parseFloat(product.productPrice), // Ensure price is a number
    };

    // Retrieve existing products from local storage
    const existingProducts: Array<{ id: string; quantity: number }> = JSON.parse(localStorage.getItem('products') || '[]');
    
    // Check if the product is already in the cart
    const productIndex = existingProducts.findIndex((item) => item.id === productData.id);

    if (productIndex !== -1) {
      // If the product exists, update its quantity
      existingProducts[productIndex].quantity += quantity;
    } else {
      // If the product doesn't exist, add it to the array
      existingProducts.push(productData);
    }

    // Save the updated array back to local storage
    localStorage.setItem('products', JSON.stringify(existingProducts));
    
    // Dispatch the custom cart changed event for header update
    window.dispatchEvent(new Event('cartChanged'));

    Swal.fire({
      title: "Product added to cart!",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };


  return (
    <>
      <Header />
      <Header2 />
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
            <h1 className="text-2xl font-normal text-black">{product.productTitle}</h1>
            <p className="text-red-600 text-xl font-normal">AED {product.productPrice}</p>
            <p className="text-gray-400 mt-4 font-light">{product.productDescription}</p>

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
              <button
                className="ml-4 px-6 py-2 bg-gray-800 text-white font-normal hover:bg-gray-600"
                onClick={()=>{handleClick();}}
              >
                ADD TO CART
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
