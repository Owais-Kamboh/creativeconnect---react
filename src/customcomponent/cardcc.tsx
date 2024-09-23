import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const Cardcc = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState([
    {
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
    },
  ]);
  const fetchData = async () => {
      try {
          const res = await axios.get(
              "https://ecommerce-ap-is.vercel.app/products/getProducts"
          );
          if (res.status === 200) {
              setData(res.data);
              console.log("res", res);
          }
      } catch (error) {
          console.log("error", error);
      }
  }
  useEffect(() => {fetchData()},[]);
  return (
    <>
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item:any, index) => {
          
          return (
            <Link to={`/product/${item._id}`} key={index}> {/* Link to the details page */}
            <div className="w-full h-full container mx-auto py-4 text-center" key={index}>
              <div className="relative flex items-center justify-center">
                <div
                  
                  style={{
                    backgroundImage: 
                       `url( ${item.productImage})`,
                      // : `url( ${item.image1})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    transition: "background-image 0.3s ease-in-out",
                    width: "300px",
                    height: "280px",
                  }}
                  // onMouseEnter={() => setIsHovered(true)}
                  // onMouseLeave={() => setIsHovered(false)}
                ></div>
              </div>
              <h4 className="text-base">{item.productTitle}</h4>
              <p className="text-[#950507] text-base">AED   {item.productPrice}</p>
            </div>
        </Link>
          );
        })}
      </div>
    </>
  );
};
