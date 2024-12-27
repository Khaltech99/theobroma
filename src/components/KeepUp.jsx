import { testimonies } from "../../data";
import Button from "./Button";
const KeepUp = () => {
  return (
    <div>
      <h1 className="mb-4 text-center text-4xl">Keep up with us </h1>
      <div className="flex flex-col gap-6 md:flex-row md:w-[1128px]">
        {testimonies.map((testimony) => (
          <>
            <div className="flex flex-col md:flex-row w-[1128px] justify-center relative">
              <div className="flex items-center flex-wrap w-[343px] md:w-[360px] ">
                <img
                  src={testimony.img}
                  alt=""
                  className="  h-[320px] md:h-[480px] "
                />
                <div className="p-4 shadow-xl absolute left-48 md:right-1 bg-white w-[264px] h-[252px] flex flex-col justify-between items-end md:h-[328px] ">
                  <div className="flex flex-col pb-10">
                    <div className="flex justify-between items-center w-[126px] mb-6">
                      <h3 className="text-grey text-xs">{testimony.date}</h3>
                      <span className="text-grey text-xs">
                        By {testimony.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <h2 className="mb-2 text-choco font-semibold">
                        subscribe
                      </h2>
                      <img
                        src="/icons/link-04.png"
                        alt=""
                        className="w-[20px] h-[20px]"
                      />
                    </div>
                    <p className="text-grey text-xs">{testimony.info}</p>
                  </div>
                  <div className="text-center">
                    <Button background={true} text="click" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default KeepUp;
