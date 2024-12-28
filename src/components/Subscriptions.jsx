import { subscriptions } from "../../data";
import Button from "./Button";

const Subscriptions = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-3 md:hidden">
        {subscriptions.map((subscription) => (
          <>
            <div className="bg-[#F0EBE7] flex justify-center items-center flex-col mb-4 p-4 break-words rounded h-[224px]">
              <h3 className="text-choco font-semibold">{subscription.title}</h3>
              <h4 className="text-sm text-grey">{subscription.sub}</h4>
              <p className="text-xs text-center text-grey break-words">
                {subscription.desc}
              </p>
              <div className="mt-5">
                <Button background={true} text="get started" />
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="hidden md:flex gap-5">
        {subscriptions.map((subscription) => (
          <>
            <div className="border-solid border-2 border-choco rounded px-7 h-[450px] flex flex-col justify-between items-end py-5">
              <div className="flex  flex-col gap-2">
                <h1 className="text-left text-choco font-semibold">
                  {subscription.title}
                </h1>
                <h2 className="text-sm text-grey">{subscription.sub}</h2>
                <p className="text-xs text-grey">{subscription.desc}</p>

                <ul className="text-grey mt-4 list-inside list-disc ">
                  <li className="text-sm leading-[20px]">
                    Access to cocoa sourcing and quality assurance services.
                  </li>
                  <li className="text-sm leading-[20px]">
                    Limited access to logistics solutions.
                  </li>
                  <li className="text-sm leading-[20px]">
                    Market insights delivered via email.
                  </li>
                  <li className="text-sm leading-[20px]">
                    Access to the Cocoa World community forum
                  </li>
                  <li className="text-sm leading-[20px]">Email support.</li>
                </ul>
              </div>
              <Button background={true} text="register" />
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Subscriptions;
