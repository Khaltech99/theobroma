import { who } from "../../data";

const Who = () => {
  return (
    <>
      <div className="mb-12">
        <h1 className="text-[28px] text-center leading-[36px] text-choco mb-8 md:w-[36px] md:leading-[44px] whitespace-nowrap mx-auto">
          Who We are
        </h1>

        <div className="md:flex md:gap-3">
          {who.map((info) => (
            <>
              <div
                className="flex flex-col justify-center gap-2 mb-4"
                key={info.id}
              >
                <img
                  src={info.img}
                  alt=""
                  className="rounded w-[100%] md:w-[360px] md:h-[260px]"
                />
                <div className="mx-2">
                  <h2 className="text-choco font-semibold">{info.title}</h2>
                  <p className="text-grey text-base md:text-sm">{info.desc}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Who;
