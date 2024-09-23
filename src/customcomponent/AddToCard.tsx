import { useState } from 'react';
import { Header } from './header';
import { Header2 } from './header2';
import { Footer1 } from './Footer1';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change: number) => { 
    if (quantity + change >= 1) {
      setQuantity(quantity + change);
    }
  };

  const price = 350.0;
  const vatPercentage = 0.05;
  const subTotal = price * quantity;
  const vat = subTotal * vatPercentage;
  const total = subTotal + vat;

  return (
    <>
      <Header />
      <Header2 />
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-500">Shopping Cart</h2>
      
      {/* Cart Table */}
      <div className="w-full  overflow-hidden border border-gray-300">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="text-gray-500 text-left border-b">
              <th className="py-3 px-6 font-semibold border-r">Item Image</th>
              <th className="py-3 px-6 font-semibold border-r">Item Name</th>
              <th className="py-3 px-6 font-semibold border-r">Price</th>
              <th className="py-3 px-6 font-semibold border-r">Quantity</th>
              <th className="py-3 px-6 font-semibold">Sub Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              {/* Item Image */}
              <td className="py-4 px-6 border-r">
                <img
                  src="https://via.placeholder.com/80"
                  alt="T-Shirt"
                  className="w-20 h-auto"
                />
              </td>

              {/* Item Name */}
              <td className="py-4 px-6 border-r">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">T-Shirt round necks</p>
                  <button className="text-red-400 hover:text-red-600 ml-2">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </td>

              {/* Item Price */}
              <td className="py-4 px-6 border-r text-gray-500">
                AED {price.toFixed(2)}
              </td>

              {/* Quantity */}
              <td className="py-12  border-r flex
              items-center justify-center">
                <div className="flex items-center border border-gray-300">
                  <button
                    className="w-8 h-8 text-lg font-semibold text-gray-500"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="w-12 text-center border-none focus:outline-none text-gray-500"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="w-8 h-8 text-lg font-semibold text-gray-500"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </button>
                </div>
              </td>

              {/* Subtotal */}
              <td className="py-4 px-6 text-gray-500">
                AED {subTotal.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* VAT and Total Section */}
      <div className="flex justify-end mt-6">
        <div className="w-full md:w-1/3 p-6  border border-gray-300">
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
    </div>
    <Footer1 />
    </>
  );
};

export default Cart;
