import axios from 'axios';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';

type cardProps = {
  CustomerName: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const UploadedProduct = () => {
     const [loadingg, setLoading] = useState(true);
    const [productData, setProductData] = useState<cardProps[]>([]);

    const FetchData = async () => {
        try {
            const response = await axios.get('https://qcsystemapi.integraerp-b2b.com:7052/mapi/GetCustomerData?UserID=1');
            setProductData(response.data.ServiceRes);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
       FetchData();
    }, [])
  
 
    


  return (
    <>
    {loadingg ? (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
    ) : 
   productData.map((product )=>{
            return(
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
                        <div className=" w-full"><img src={product?.image} alt="productimage" className="w-full "/></div>
                        <div className=" w-full"><br /><br /><br />
                            <h1 className="font-medium text-2xl">{product.CustomerName}</h1>
                            <h1 className="font-medium text-xl text-gray-700">{product?.category}</h1><br />
                            <h1 className="font-medium text-lg text-red-600">AED {product?.price}</h1><br />
                            <Stack spacing={1}>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                </div>
            )
        })
 


    }
    {/* <h1 className="container mx-auto font-medium text-zinc-900  text-5xl text-center pt-12 pb-8 ">Product</h1><br />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
         <div className=" w-full"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK56I5nPIL6F14Lq6ZI1TbOKDfY1kMx1M8T4ILOdS7fEJ3MLjONcvKkAwFDGCmvtdkTOM&usqp=CAU" alt="productimage" className="w-full "/></div>
         <div className=" w-full"><br /><br /><br />
            <h1 className="font-medium text-2xl">T-Shirt Rounded Neck</h1>
            <h1 className="font-medium text-xl text-gray-700">LEVIS</h1><br />
            <h1 className="font-medium text-lg text-red-600">AED 100.00</h1><br />
            <p className="font-medium text-sm text-gray-500">Discover the benefits of Round Neck Full Sleeve T-shirts Printing. Design unique tees with graphics, logos, or text. Perfect for gifts or events. Our prints are vibrant and long-lasting. We use top-quality inks. Each shirt stays bright through many washes. Moreover, our service is fast and reliable.</p><br />
            <p  className="font-medium text-base text-black">Size: S</p><br />
            <p className="font-medium text-base text-black">Color: Black</p><br />
            <p className="font-medium text-base text-black">Rating:<Stack spacing={1}>
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack></p><br />
    <p className="font-medium text-base text-black">Category:Business Card</p><br />
         </div>
    </div> */}
    
    </>
  )
}
