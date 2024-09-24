import { Routes,Route } from "react-router-dom";
import { Home } from "../Home";
import { Login } from "@/customcomponent/Login";
import { Signup } from "@/customcomponent/Signup";
import { NotFound } from "@/404";
import { AboutUs } from "@/customcomponent/AboutUs";
import { ContactUs } from "@/customcomponent/ContactUs";
import  DetailedProduct  from "@/customcomponent/DetailedProduct";
import Cart from "@/customcomponent/AddToCard";
import { ProductUpload } from "@/customcomponent/ProductUpload";
export const Routing = () => {
  return (
    <>
    <Routes>
        <Route path="/productupload" element={<ProductUpload/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/product/:id" element={<DetailedProduct/>} />
        <Route path="/addtocart" element={<Cart/>} />
    </Routes>
    
    </>
  )
}
