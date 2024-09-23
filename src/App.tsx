
import './App.css'
import { BrowserRouter,} from "react-router-dom";
import { Routing } from "./routes/Routing";
import { ProductUpload } from './customcomponent/ProductUpload';
import { UploadedProduct } from './customcomponent/UploadedProduct';
import { AboutUs } from './customcomponent/AboutUs';
import { ContactUs } from './customcomponent/ContactUs';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>       
         <Routing />
       </BrowserRouter>
       </div>
       {/* <ProductUpload/> */}
     


    </>
  )
}

export default App
