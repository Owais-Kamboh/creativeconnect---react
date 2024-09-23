import { Icon } from "@iconify/react";

export const Header = () => {
  return (
    <>
      {/* // first header */}
      <div className="bg-[#950507] w-full py-3 flex justify-center items-center text-white body-font">
        <div className="text-center flex items-center  ">
          <h1 className="font-semibold text-sm">Sale Offer </h1>
          <p className="text-xs pl-1"> 50% Sale on Business Card</p>
        </div>
      </div>
      {/* // second header */}
      <div className="bg-[#f6f6f8] w-full py-2 text-white body-font">
    <div className="flex justify-center lg:justify-start items-center container mx-auto">
        <span className="px-3">
            <Icon
                icon="flowbite:facebook-solid"
                width="21"
                height="21"
                style={{ color: "black" }}
            />
        </span>
        <span className="px-3">
            <Icon
                icon="bi:twitter"
                width="16"
                height="16"
                style={{ color: "black" }}
            />
        </span>
        <span className="px-3">
            <Icon
                icon="ri:instagram-line"
                width="16"
                height="16"
                style={{ color: "black" }}
            />
        </span>
        <span className="px-3">
            <Icon
                icon="ri:linkedin-fill"
                width="16"
                height="16"
                style={{ color: "black" }}
            />
        </span>
        <span className="px-3">
            <Icon
                icon="jam:pinterest"
                width="16"
                height="16"
                style={{ color: "black" }}
            />
        </span>
    </div>
</div>
      
    </>
  );
};
