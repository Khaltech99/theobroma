import { services } from "../../data";

const Services = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[28px] leading-[36px] text-choco mb-8 md:w-[36px] md:leading-[44px] whitespace-nowrap mx-auto">
          Our Services
        </h1>

        <div className="md:flex md:justify-center md:items-center md:gap-3">
          {services.map((info) => (
            <>
              <div
                className="flex flex-col justify-center items-center gap-2 mb-8"
                key={info.id}
              >
                <img
                  src={info.img}
                  alt=""
                  className="bg-[#F0EBE7] p-2 w-[40px] h-[40px] md:w-[42px] md:h-[42px] md:p-0 md:bg-transparent"
                />

                <h2 className="text-base text-choco font-semibold">
                  {info.title}
                </h2>
                <p className="rows-3 text-sm text-grey px-10 text-center break-words">
                  {info.desc}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
