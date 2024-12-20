import { cocoType } from "../../data";
import Button from "./Button";
const OurCocoa = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[28px] leading-[36px] text-choco mb-8 md:w-[36px] md:leading-[44px] whitespace-nowrap mx-auto">
          Our Cocoa
        </h1>

        <div className="md:flex md:justify-center md:items-center md:gap-3">
          {cocoType.map((info) => (
            <>
              <div
                className="flex flex-col justify-center items-center gap-2 mb-8"
                key={info.id}
              >
                <img
                  src={info.img}
                  alt=""
                  className="p-2 w-[113px] h-[113px] leading-[24px] md:w-[180px] md:h-[180px] md:p-0"
                />

                <div className="flex justify-center items-center gap-2 w-[70%]">
                  <h2 className="text-base text-choco font-semibold mx-auto">
                    {info.title}
                  </h2>
                  <img
                    src="/public/icons/link-04.png"
                    alt=""
                    className="md:hidden"
                  />
                </div>
                <p className="rows-3 text-sm text-grey px-10 text-center break-words leading-[20px]">
                  {info.desc}
                </p>
                <div className="hidden md:block">
                  <Button text="see more" />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurCocoa;
