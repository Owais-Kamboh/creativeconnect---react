import { useState, useEffect } from "react";
import { Footer1 } from "./Footer1";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Header2 } from "./header2";
import { Header } from "./header";

const Cart = () => {
  type Card = {
    id: string;
    image: string;
    price: number;
    quantity: number;
    title: string;
  };

  const [products, setProducts] = useState<Card[]>([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setProducts(storedProducts);
    // Retrieve existing products from local storage
  }, []);

  // Simplified quantity change function, similar to your original approach
  const handleQuantityChange = (productId: string, change: number) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        // Ensure that quantity doesn't drop below 1
        const newQuantity = Math.max(product.quantity + change, 1);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    window.dispatchEvent(new Event("cartChanged"));
  };

  const removeProduct = (productId: string) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    window.dispatchEvent(new Event("cartChanged"));
  };

  // VAT and total calculation
  const vatPercentage = 0.05;
  const subTotal = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const vat = subTotal * vatPercentage;
  const total = subTotal + vat;

  return (
    <>
      <Header />
      <Header2 /> 
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-500">Shopping Cart</h2>
  
        {products.length === 0 ? (
          <div className="text-center text-gray-500 text-3xl pt-16">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <div className="w-full overflow-hidden border border-gray-300">
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr className="text-gray-500 text-left border-b">
                  <th className="py-3 px-6 font-semibold border-r">Item Image</th>
                  <th className="py-3 px-6 font-semibold border-r">Item Name</th>
                  <th className="py-3 px-6 font-semibold border-r">Price</th>
                  <th className="py-3 px-6 font-semibold border-r">Quantity</th>
                  <th className="py-3 px-8 font-semibold border-r">Sub Total</th>
                  <th className="py-3 px-4 font-semibold">Delete</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t">
                    <td className="py-4 px-6 border-r">
                      <img src={product.image} alt={product.title} className="w-20 h-auto" />
                    </td>
                    <td className="py-4 px-6 border-r">
                      <div className="flex items-center justify-between">
                        <p className="text-gray-500">{product.title}</p>
                      </div>
                    </td>
                    <td className="py-4 px-6 border-r text-gray-500">AED {product.price.toFixed(2)}</td>
                    <td className="py-12 border-r flex items-center justify-center">
                      <div className="flex items-center border border-gray-300">
                        <button
                          className="w-8 h-8 text-lg font-semibold text-gray-500"
                          onClick={() => handleQuantityChange(product.id, -1)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="w-12 text-center border-none focus:outline-none text-gray-500"
                          value={product.quantity}
                          readOnly
                        />
                        <button
                          className="w-8 h-8 text-lg font-semibold text-gray-500"
                          onClick={() => handleQuantityChange(product.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 pl-4 text-gray-500 border-r">
                      AED {(product.price * product.quantity).toFixed(2)}
                    </td>
                    <td className="py-4 px-6 text-gray-500 text-center">
                      <button
                        className="text-red-400 hover:text-red-600"
                        onClick={() => removeProduct(product.id)}
                      >
                        <Icon icon="iconoir:trash-solid" width="22" height="22" style={{ color: "#878787" }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
  
        {products.length > 0 && (
          <div className="flex justify-end mt-6">
            <div className="w-full md:w-1/3 p-6 border border-gray-300">
              <div className="flex justify-between mb-3 text-gray-500">
                <span>VAT (5% Of VAT Included)</span>
                <span>AED {vat.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-gray-600">
                <span>Total:</span>
                <span>AED {total.toFixed(2)}/-</span>
              </div>
              <button
                type="submit"
                className="w-full py-2 mt-2 bg-white border-2 border-black text-black hover:bg-red-800 hover:text-white transition-all hover:border-red-800"
              >
                Check Out
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer1 />
    </>
  );
  
};

export default Cart;
