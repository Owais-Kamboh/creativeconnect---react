import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export const DetailedProduct = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(
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
    );
    const [loading, setLoading] = useState(true);
  
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://ecommerce-ap-is.vercel.app/products/getProduct`); // Adjust API endpoint as per your backend
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
  
  return (
    <>
      <div className="container mx-auto p-4">
      <h1>{product.productTitle}</h1>
      <img src={product.productImage} alt={product.productTitle} />
      <p>Price: AED {product.productPrice}</p>
      <p>Brand: {product.brandName}</p>
      <p>Size: {product.size}</p>
      <p>Color: {product.productColor}</p>
      <p>Category: {product.productCategory}</p>
      <p>Description: {product.productDescription}</p>
    </div>
  
    </>
  )
}
