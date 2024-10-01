import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

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

export const Cardcc = () => {
  // const [data, setData] = useState([
  //   {
  //     _id: "",
  //     brandName: "",
  //     productTitle: "",
  //     size: "",
  //     productImage: "",
  //     productPrice: "",
  //     productColor: "",
  //     productRating: "",
  //     productCategory: "",
  //     productDescription: "",
  //   },
  // ]);
const [products, setProducts] = useState<Products[]>([]);
  // const [isHovered, setIsHovered] = useState(false);
  const fetchData = async () => {
      try {
          const res = await axios.get(
              "https://ecommerce-ap-is.vercel.app/products/getProducts"
          );
          if (res.status === 200) {
              setProducts(res.data);
              console.log("res", res);
          }
      } catch (error) {
          console.log("error", error);
      }
  }
  useEffect(() => {fetchData()},[]);
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {products.map((item, index) => {
    return (
      <Link to={`/product/${item._id}`} key={index}> {/* Link to the details page */}
        <div
          className="w-full h-full container mx-auto py-4 text-center transform transition-transform duration-300 hover:scale-105"
          key={index}
        >
          <div className="relative flex items-center justify-center">
            <div
              style={{
                backgroundImage: `url(${item.productImage})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "background-image 0.3s ease-in-out, transform 0.3s ease",
                width: "300px",
                height: "280px",
              }}
              className="hover:scale-110 transition-transform duration-300 ease-in-out"
            ></div>
          </div>
          <h4 className="text-base mt-2">{item.productTitle}</h4>
          <p className="text-[#950507] text-base">AED {item.productPrice}</p>
        </div>
      </Link>
    );
  })}
</div>

    </>
  );
};