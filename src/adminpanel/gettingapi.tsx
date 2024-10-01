import axios from 'axios';
import { useEffect, useState } from 'react';
import NavbarCc from './Navbarcc';
import { useNavigate } from 'react-router-dom';
export const GettingApi = () => {

const [data, setData] = useState([]);
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
const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
    if (localStorage.getItem("authToken") == undefined) {    
      navigate("/login")
    }
  }, [])  
  return (
      <>
      <NavbarCc/>
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3
 gap-4">
     {data.map((card:any,index)=>  (

  <div className="mx-auto w-[100%] max-w-sm rounded overflow-hidden shadow-lg bg-white  border border-gray-300 hover:shadow-lg transition-transform transform hover:scale-105" key={index}>
    <img
      className="w-full h-48 object-contain"
      src={card.productImage}
      alt="Product Image"
      id="productImage"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2" id="productTitle">
        {card.productTitle}
      </div>
      <p className="text-gray-700 text-base mb-4">
        <span id="productCategory" className="font-semibold">
          Category:
        </span>{" "}
        {card.productCategory}
      </p>
      <p className="text-gray-700 text-base mb-2">
        <span id="brandName" className="font-semibold">
          Brand:
        </span>{" "}
        {card.brandName}
      </p>
      <p className="text-gray-700 text-base mb-2">
        <span id="size" className="font-semibold">
          Size:
        </span>{" "}
        {card.size}
      </p>
      <p className="text-gray-700 text-base mb-2">
        <span id="productColor" className="font-semibold">
          Color:
        </span>{" "}
        {card.productColor}
      </p>
      <p className="text-gray-700 text-base mb-2">
        <span id="productPrice" className="font-semibold">
          Price:
        </span>{" "}
        ${card.productPrice}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2 mb-2">
        <span id="productRating">{card.productRating} ★</span>
      </span>
    </div>
  </div>
))}
</div>
      </> 
  )
}
