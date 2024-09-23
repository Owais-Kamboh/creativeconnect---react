import { Icon } from "@iconify/react/dist/iconify.js"; 
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // Separate state for email
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Prepare data to send
    const userData = {
      userName: username,
      userEmail: email,
      userEmailPassword: password,
    };

    try {
      const response = await axios.post("https://ecommerce-ap-is.vercel.app/users/signup", userData);
      if (response.status === 201) {
        // Optionally handle successful signup (e.g., show a success message)
        alert("Registration successful!");
        navigate("/login"); // Redirect to login page after successful signup
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Signup failed. Please try again."); // Handle error appropriately
    }
  };

  return (
    <>
      <div className="w-1/2 sm:w-1/3 md:w-1/6 pt-4 pl-4 ">
        <img
          src="https://itginnovators.com/CreativePrints/BackendStyle/logo/logo.png"
          alt="Logo"
          className="w-full "
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto px-4">
        <div className="w-full h-auto hidden md:block">
          <img
            src="https://img.freepik.com/premium-vector/illustration-sign-up-log-wireframe-idea-showcasing-various-ui-elements_1278800-10909.jpg?w=740"
            alt="Signup Illustration"
            className="w-full h-auto"
          />
        </div>
        <div className="container mx-auto text-gray-500 pt-4">
          <h1 className="text-2xl font-medium text-center md:text-left">
            Welcome to Creative Prints
          </h1>
          <p className="text-sm font-medium pt-4 text-center md:text-left">
            Please sign up for your account and start the adventure
          </p>
          <p className="text-sm font-medium pt-4 text-center md:text-left">
            Our ultimate goal is to offer outfits that make you feel exclusive,
            to be divine, to be yourself. We know that it’s hard to be nice if
            you don’t feel comfortable.
          </p>
          <form className="space-y-4 pt-8" onSubmit={handleSubmit}>
            {/* Full Name and Email */}
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-[48%]">
                <label
                  htmlFor="full-name"
                  className="block text-xs font-medium text-gray-500"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  required={true}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 block w-full p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
                />
              </div>
              <div className="w-full md:w-[48%] mt-4 md:mt-0">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-500"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required={true}
                  value={email} // Updated to use email state
                  onChange={(e) => setEmail(e.target.value)} // Update email state on change
                  className="mt-1 block w-full p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
                />
              </div>
            </div>
            {/* Password and Mobile Number */}
            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-[48%]">
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-gray-500"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password" // Updated id for password input
                  name="password"
                  required={true}
                  value={password} // Bind password state
                  onChange={(e) => setPassword(e.target.value)} // Update password state on change
                  className="mt-1 block w-full p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
                />
              </div>
              <div className="w-full md:w-[48%] mt-4 md:mt-0">
                <label
                  htmlFor="mobile"
                  className="block text-xs font-medium text-gray-500"
                >
                  Mobile Number (+971) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="mobile"
                  name="mobile"
                  required={true}
                  className="mt-1 block w-full p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
                />
              </div>
            </div>
            {/* Complete Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-xs font-medium text-gray-500"
              >
                Complete Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                required={true}
                className="mt-1 block w-full p-1 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-900 focus:border-transparent"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-end space-x-0 md:space-x-2 space-y-2 md:space-y-0">
              <p className="text-sm">Have an account?</p>
              <Link to="/login">
                <button
                  type="button"
                  className="px-6 py-2 bg-gray-600 text-white font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 underline text-sm"
                >
                  Login
                </button>
              </Link>
              <button
                type="submit"
                className="px-6 py-2 bg-red-800 text-white font-medium hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm"
              >
                Registration
              </button>
            </div>
          </form>

          {/* OR Divider */}
          <div className="flex items-center justify-center w-full pt-8">
            <div className="border-t border-gray-300 flex-grow" />
            <span className="mx-2 text-gray-500 text-sm font-medium">OR</span>
            <div className="border-t border-gray-300 flex-grow" />
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-row items-center justify-center w-full mt-6 gap-4">
            <Icon icon="devicon:facebook" width={24} height={24} />
            <Icon icon="skill-icons:twitter" width={24} height={24} />
            <Icon icon="skill-icons:gmail-light" width={24} height={24} />
            <Icon icon="skill-icons:instagram" width={24} height={24} />
          </div>
        </div>
      </div>
    </>
  );
};