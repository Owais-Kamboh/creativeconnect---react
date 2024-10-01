import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import NavbarCc from "@/adminpanel/Navbarcc";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const ProductUpload = () => {
  const [formData, setFormData] = useState({
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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);

    try {
      const response = await axios.post(
        "https://ecommerce-ap-is.vercel.app/products/insertProduct",
        formData
      );
      setIsLoading(false);

      if (response.status === 201) {
        Swal.fire({
          title: "Success!",
          text: "Product has been saved successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "There was an error saving the product!",
          icon: "error",
          confirmButtonText: "OK",
        });
      }

      console.log("Response:", response.data);
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        title: "Error!",
        text: "There was an error saving the product!",
        icon: "error",
        confirmButtonText: "OK",
      });

      console.error("Error:", error);
    }
  };
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
      <h1 className="container mx-auto font-medium text-zinc-900  text-5xl text-center pt-2 ">
        UpLoad Product
      </h1>
      <form onSubmit={handleSubmit} className="container mx-auto">
        <label
          htmlFor="user-id"
          className="block text-xs font-medium text-gray-500"
        >
          Product Brand Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="user-id"
          name="user-id"
          value={formData.brandName}
          onChange={(e) =>
            setFormData({ ...formData, brandName: e.target.value })
          }
          required={true}
          className="mt-1 block w-full md:w-[100%] p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
        />{" "}
        <br />
        <label
          htmlFor="user-id"
          className="block text-xs font-medium text-gray-500"
        >
          Product Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="user-id"
          name="user-id"
          required={true}
          value={formData.productTitle}
          onChange={(e) =>
            setFormData({ ...formData, productTitle: e.target.value })
          }
          className="mt-1 block w-full md:w-[100%] p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
        />
        <br />
        <label
          htmlFor="user-id"
          className="block text-xs font-medium text-gray-500"
        >
          Product Size<span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="user-id"
          name="user-id"
          required={true}
          value={formData.size}
          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
          className="mt-1 block w-full md:w-[100%] p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
        />
        <br />
        <label
          htmlFor="user-id"
          className="block text-xs font-medium text-gray-500"
        >
          Product Image <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="user-id"
          name="user-id"
          required={true}
          value={formData.productImage}
          onChange={(e) =>
            setFormData({ ...formData, productImage: e.target.value })
          }
          className="mt-1 block w-full md:w-[100%] p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
        />{" "}
        <br />
        <div className="flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="user-id"
              className="block text-xs font-medium text-gray-500"
            >
              Product Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="user-id"
              name="user-id"
              required={true}
              value={formData.productPrice}
              onChange={(e) =>
                setFormData({ ...formData, productPrice: e.target.value })
              }
              className="mt-1 block w-full md:w-[100%] p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="user-id"
              className="block text-xs font-medium text-gray-500"
            >
              Product Color<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="user-id"
              name="user-id"
              required={true}
              value={formData.productColor}
              onChange={(e) =>
                setFormData({ ...formData, productColor: e.target.value })
              }
              className="mt-1 block w-full md:w-[100%] p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
            />
          </div>
        </div>
        <br />
        <div className="flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="user-id"
              className="block text-xs font-medium text-gray-500"
            >
              Product Rating<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="user-id"
              name="user-id"
              required={true}
              value={formData.productRating}
              onChange={(e) =>
                setFormData({ ...formData, productRating: e.target.value })
              }
              className="mt-1 block w-full md:w-[100%] p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="user-id"
              className="block text-xs font-medium text-gray-500"
            >
              Product Categories<span className="text-red-500">*</span>
            </label>

            <Select
              required={true}
              onValueChange={(value) =>
                setFormData({ ...formData, productCategory: value })
              }
            >
              <SelectTrigger className="w-[100%] border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent rounded-none ">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Categories</SelectLabel>
                  <SelectItem value="All">ALL</SelectItem>
                  <SelectItem value="bussinescard">Business Card</SelectItem>
                  <SelectItem value="officestationaries">
                    Office Stationaries
                  </SelectItem>
                  <SelectItem value="clothingapparels">
                    Clothing And Apparels
                  </SelectItem>
                  <SelectItem value="bagbackpacks">
                    Bags And Bagpacks
                  </SelectItem>
                  <SelectItem value="paperbags">Paper Bags</SelectItem>
                  <SelectItem value="Brochures & Booklets">
                    Brochures & Booklets
                  </SelectItem>
                  <SelectItem value="Promotional Items">
                    Promotional Items
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <br />
        <label
          htmlFor="address"
          className="block text-xs font-medium text-gray-500"
        >
          Product Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="address"
          name="address"
          required={true}
          value={formData.productDescription}
          onChange={(e) =>
            setFormData({ ...formData, productDescription: e.target.value })
          }
          className="mt-1 block w-full p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
        />
        <br />
        <div className="flex justify-end">
          <Button
            className="bg-red-700 text-white text-sm py-2 px-10 "
            type="submit"
          >
            {" "}
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </form>
    </>
  );
};
