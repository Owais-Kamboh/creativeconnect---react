
import { Footer1 } from "./Footer1";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { NavbarComponent } from "./NavbarComponent";
export const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <NavbarComponent />
      <div className="relative w-full h-[149px]">
        <div className="bg-[url('https://img.freepik.com/free-photo/group-marketing-experts-background_1409-7449.jpg?t=st=1726899316~exp=1726902916~hmac=9ed5ceb6fa6d31d12950721c2cc6781b5c17c4df0c51ae00f006f7c555c6aa57&w=900')] w-full h-[200px] object-contain bg-center bg-no-repeat bg-cover relative">
          <div className="absolute inset-0 bg-black bg-opacity-65 text-white text-center pt-12">
            <p className="font-medium text-xl py-1">Contact us </p>
            <p>Follow your passion, and success will follow you</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-16 container mx-auto py-8 w-[90%]">
        <div className="p-4">
          <p className="font-medium text-2xl">DROP US A QUERY</p>
          <form className="mt-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Example: Jacob Philips"
                className="w-full px-4 py-[10px] border border-gray-300 text-xs placeholder-gray-500 outline-none focus:outline-none focus:border-[1px] focus:border-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Example: john@example.com"
                className="w-full px-4 py-[10px] border border-gray-300 text-xs placeholder-gray-500 outline-none focus:outline-none focus:border-[1px] focus:border-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Your Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Please Use [0-9] pattern"
                className="w-full px-4 py-[10px] border border-gray-300 text-xs placeholder-gray-500 outline-none focus:outline-none focus:border-[1px] focus:border-black"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Example: Please enter your subject here"
                className="w-full px-4 py-[10px] border border-gray-300 text-xs placeholder-gray-500 outline-none focus:outline-none focus:border-[1px] focus:border-black"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Please enter your message here"
                className="w-full px-4 py-[10px] border border-gray-300 text-xs placeholder-gray-500 outline-none focus:outline-none focus:border-[1px] focus:border-black h-24"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-2 bg-white border-2 border-black text-black hover:bg-red-800 hover:text-white transition-all hover:border-red-800"
            >
              Send
            </button>
          </form>
        </div>

        <div className="p-4">
          <p className="font-medium text-2xl">DROP US A QUERY</p>
          <br />
          <p className="text-sm font-medium leading-6">
            We love to hear from you on our customer service, merchandise,
            website or any topics you want to share with us. Your comments and
            suggestions will be appreciated. Please complete the form below.
          </p>
          <div className="space-y-3 text-gray-800 mt-4">
    <div className="flex items-center">
      <Icon icon="material-symbols:home-outline" className="text-blue-600 mr-2" width="20" />
      <span className="text-sm font-medium">Naif - Deira - Dubai</span>
    </div>
    <div className="flex items-center">
      <Icon icon="material-symbols:phone-enabled-outline" className="text-blue-600 mr-2" width="20" />
      <span className="text-sm font-medium">+971 54 539 6249</span>
    </div>
    <div className="flex items-center">
      <Icon icon="mdi:email-outline" className="text-blue-600 mr-2" width="20" />
      <span className="text-sm font-medium">ccaddxb@gmail.com</span>
    </div>
    <div className="flex items-center">
      <Icon icon="material-symbols:schedule-outline" className="text-blue-600 mr-2" width="20" />
      <span className="text-sm font-medium">24/7 9:00 AM - 10:00 PM</span>
    </div>
  </div>
  <div className="mt-4">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115454.98787569898!2d55.169501043359375!3d25.271649400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43b75f4146bd%3A0xbd9085dd702a679d!2sCreative%20Connect%20Advertising!5e0!3m2!1sen!2sae!4v1722350259275!5m2!1sen!2sae" width="100%" height="374" className="border-none" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
      </div>

      <Footer1 />
    </>
  );
};