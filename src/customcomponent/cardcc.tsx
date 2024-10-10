import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Products = {
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
};

interface CardccProps {
  selectedCategory: string;
}

export const Cardcc: React.FC<CardccProps> = ({ selectedCategory }) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        'https://ecommerce-ap-is.vercel.app/products/getProducts'
      );
      if (res.status === 200) {
        setProducts(res.data);
        setLoading(false);
      }
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredProducts = selectedCategory === 'allCategories'
    ? products
    : products.filter(product => product.productCategory === selectedCategory);

  return (
    <>
      <div className="mx-auto">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-44 w-44 border-t-8 border-blue-500"></div>
          </div>
        ) : (
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((item, index) => (
              <Link to={`/product/${item._id}`} key={index}>
                <div className="w-full h-full container mx-auto py-4 text-center transform transition-transform duration-300 hover:scale-105">
                  <div className="relative flex items-center justify-center">
                    <div
                      style={{
                        backgroundImage: `url(${item.productImage})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        transition: 'background-image 0.3s ease-in-out, transform 0.3s ease',
                        width: '300px',
                        height: '280px',
                      }}
                      className="hover:scale-110 transition-transform duration-300 ease-in-out"
                    ></div>
                  </div>
                  <h4 className="text-base mt-2">{item.productTitle}</h4>
                  <p className="text-[#950507] text-base">AED {item.productPrice}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
