import { Header } from "./header";
import { Header2 } from "./header2";
import { Footer1 } from "./Footer1";
import {useEffect } from "react";
export const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <Header />
      <Header2 />
      <div className="relative w-full h-[200px]">
        <div className="bg-[url('https://img.freepik.com/free-photo/group-marketing-experts-background_1409-7449.jpg?t=st=1726899316~exp=1726902916~hmac=9ed5ceb6fa6d31d12950721c2cc6781b5c17c4df0c51ae00f006f7c555c6aa57&w=900')] w-full h-[200px] object-contain bg-center bg-no-repeat bg-cover relative">
          <div className="absolute inset-0 bg-black bg-opacity-65 text-white text-center pt-12 ">
            <p className="font-medium text-xl py-1">About us </p>
            <p>Follow your passion, and success will follow you</p>
          </div>
        </div>
      </div>
      <br />
      <div className="container mx-auto py-8 w-[85%] mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <p className="font-medium text-xl">OUR MISSION</p>
            <br />
            <p className="text-[14px] font-medium">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium,
              <i>
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae{" "}
              </i>
              vitae dicta sunt explicabo nemo enim ipsam.
            </p>
          </div>
          <div className="col-span-1">
            <p className="font-medium text-xl">OUR STORIES</p>
            <br />
            <p className="text-[14px] font-medium">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="col-span-1 mt-4">
            <p className="font-medium text-xl">OUR APPROACH</p>
            <br />
            <p className="text-[14px] font-medium">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>
          <div className="col-span-1 mt-4">
            <p className="font-medium text-xl">OUR PHILOSOPHY</p>
            <br />
            <p className="text-[14px] font-medium">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur? Quis nostrum exercitationem
              ullam.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="container mx-auto py-3 w-[85%] p-8  bg-[#f1f1f1]">
        <div  id="before">
        <p className="text-sm font-medium"><i>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Quis nostrum exercitationem ullam.</i></p>
      </div>
      </div>

      <Footer1/>
    </>
  );
};
