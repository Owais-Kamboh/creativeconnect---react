import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in both fields.");
      return;
    }
    
    // Prepare data to send
    const loginData = {
      userEmail: username,
      userEmailPassword: password,
    };
    setIsLoading(true);

    try {
      const response = await axios.post("https://ecommerce-ap-is.vercel.app/users/login", loginData);
      
      if (response.status === 201) {
        // Optionally handle successful login (e.g., store user data, token, etc.)
        // navigate("/"); // Redirect to home page after successful login
        console.log(response)
        localStorage.setItem("authToken", response.data.authToken);
        console.log(localStorage.getItem("authToken"),"authToken" ) 
        Swal.fire({
          title: "Login successful!",
          icon: "success",
          timer: 3000, // Auto-dismiss after 1 second
          timerProgressBar: true, // Show progress bar
          willClose: () => {
            navigate("/edit"); // Redirect to home page after the alert closes
          }
        });
        
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        title: "Login failed",
        text: "Please check your credentials and try again.",
        icon: "error",
        timer: 2000, // Auto-dismiss after 1 second
        timerProgressBar: true, // Show progress bar
        
      });
    }
    finally {
      setIsLoading(false);
    }
  };

 





  return (
    <>
      <div className="w-1/3 h-1/3 pt-4 pl-4 md:w-1/6 md:h-1/6">
        <img
          src="https://itginnovators.com/CreativePrints/BackendStyle/logo/logo.png"
          alt="Logo"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
        <div className="col-span-2 h-[50%] w-full md:h-[85%] md:w-[85%] md:flex justify-center items-center md:items-baseline hidden">
          <img
            src="https://itginnovators.com/CreativePrints/FrontendStyle/img/banners/login.jpg"
            alt="Login Banner"
            className="pl-16"
          />
        </div>
        <div className="p-4 text-gray-600">
          <h1 className="text-xl md:text-2xl font-medium">
            Welcome to Creative Prints
          </h1>
          <p className="text-xs md:text-sm font-medium pt-4">
            Please sign-in to your account and start the adventure
          </p>
          <br />
          <p className="text-[#7367f0] text-xs md:text-sm">
            Please Login Your Account!
          </p>
          <br />
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="user-id"
                className="block text-xs font-medium text-gray-500"
              >
                User ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="user-id"
                name="user-id"
                required={true}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full md:w-[90%] p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
              />
            </div>
            <div className="pt-4">
              <label
                htmlFor="password"
                className="block text-xs font-medium text-gray-500"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required={true}
                value={password} // Bind password state
                onChange={(e) => setPassword(e.target.value)} // Update password state on change
                className="mt-1 block w-full md:w-[90%] p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
              />
            </div>
            <Link to="/signup"><p className="text-sm pt-4">Sign Up?</p></Link>
            <br />
            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center h-10 bg-red-800 text-white font-medium hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm md:px-[40%]"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};