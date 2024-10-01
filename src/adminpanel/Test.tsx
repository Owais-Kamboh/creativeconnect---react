import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./Buttoncomponent";
import NavbarCc from "./Navbarcc";
// import { Image } from 'antd';
export const Test = () => {

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({
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
      // alert()
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
    if (localStorage.getItem("authToken") == undefined) {    
      navigate("/login")
    }
  }, [])  
  const handleSubmit = async (product: any) => {
    try {
      const res = await axios.put(
        `https://ecommerce-ap-is.vercel.app/products/updateProduct/${product._id}`,
        {
          brandName: product.brandName,
          productTitle: product.productTitle,
          size: product.size,
          productImage: product.productImage,
          productPrice: product.productPrice,
          productColor: product.productColor,
          productRating: product.productRating,
          productCategory: product.productCategory,
          productDescription: product.productDescription,
        }
      );

      if (res.status === 200) {
        toast.success("Product updated successfully");
        fetchData();
        setShow(false);

        console.log("res", res);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  // Delete Function
  const handleDelete = async (product: any) => {
    try {
      const res = await axios.delete(
        `https://ecommerce-ap-is.vercel.app/products/deleteProduct/${product._id}`
      );
      if (res.status === 200) {
        toast.success("Product deleted successfully");
        fetchData();
        console.log("res", res);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  //preview image

  return (
    <>
      <Toaster />
      <NavbarCc/>
      <div className=" mx-auto ">
        {loading ? (
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-44 w-44 border-t-8 border-blue-500"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Brand
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider mx-auto">
                    Price($)
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Color
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              {data.map((product: any, index) => (
                <tbody
                  className="bg-white divide-y divide-gray-200"
                  key={index}
                >
                  <tr>
                    <td className="px-6 py-4  text-sm whitespace-nowrap">
                      {product.productTitle}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={product.productImage}
                        alt="Product Image"
                        className="w-12 h-12 rounded-full object-cover"
                        
                      />
                     
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {product.brandName}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      {product.productCategory}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-right">
                      {product.size}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-right">
                      {product.productPrice}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-right">
                      {product.productColor}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-right">
                      {product.productRating} ★
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-right">
                      {/* <button
                        onClick={() => {
                          setShow(true);
                          setProduct(product);
                        }}
                        className="text-white  py-1 rounded"
                      ></button> */}
                      <ButtonComponent setProduct={setProduct} setShow={setShow} product={product} handleDelete={handleDelete}/>

                       

                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        )}
      </div>

      {/* //// DIALOG BOX OR MODAL */}
      <div
        id="productModal"
        className={`fixed z-10 inset-0 overflow-y-auto ${
          show ? "block" : "hidden"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 bg-gray-500 bg-opacity-75">
          <div
            className="fixed inset-0  bg-opacity-75 transition-opacity"
            aria-hidden="true"
          />
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            ​
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Edit Product
                </h3>
                <div className="mt-2">
                  {/* Product Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Brand Name
                      </label>
                      <input
                        id="brandName"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        value={product.brandName}
                        onChange={(e) =>
                          setProduct({ ...product, brandName: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Product Title
                      </label>
                      <input
                        id="productTitle"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        value={product.productTitle}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            productTitle: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Size
                      </label>
                      <input
                        id="size"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        value={product.size}
                        onChange={(e) =>
                          setProduct({ ...product, size: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Product Image URL
                      </label>
                      <input
                        id="productImage"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        value={product.productImage}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            productImage: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Product Price
                      </label>
                      <input
                        id="productPrice"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        value={product.productPrice}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            productPrice: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Product Color
                      </label>
                      <input
                        id="productColor"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        value={product.productColor}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            productColor: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Product Rating
                      </label>
                      <input
                        id="productRating"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        value={product.productRating}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            productRating: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Product Category
                      </label>
                      <input
                        id="productCategory"
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        value={product.productCategory}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            productCategory: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Product Description
                      </label>
                      <textarea
                        id="productDescription"
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        defaultValue={""}
                        value={product.productDescription}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            productDescription: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => handleSubmit(product)}
              >
                Update
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 sm:mt-0 sm:w-auto sm:text-sm"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};