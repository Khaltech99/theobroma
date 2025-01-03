const ContactUs = () => {
  return (
    <>
      <div className="flex  flex-col justify-center md:flex gap-3 md:justify-around md:items-start md:h-[572px] md:flex-row ">
        <div className=" w-full md:w-[540px]">
          <h1 className="text-choco text-[36px] ml-0 mb-2 whitespace-nowrap">
            Contact Us
          </h1>
          <p className="text-grey text-base leading-[24px] mb-3">
            Connect with Our Dedicated Team of Real Estate Investment
            Professionals Today for Expert Guidance and Personalized Assistance
            in Finding The Right Property.
          </p>
          <div className="flex flex-col mt-4 capitalize W-[168px]">
            <h2 className="text-grey font-bold text-sm ">Contact email</h2>
            <span className="text-sm text-grey ">0818375208</span>
          </div>
          <div className="flex flex-col mt-4 capitalize W-[168px]">
            <h2 className="text-grey font-bold text-sm ">
              Contact phone number
            </h2>
            <span className="text-sm text-grey ">0818375208</span>
          </div>
          <div className="flex flex-col mt-4 capitalize W-[168px]">
            <h2 className="text-grey font-bold text-sm ">Contact address</h2>
            <span className="text-sm text-grey ">oke owode</span>
          </div>
        </div>

        <form className="mt-5 flex flex-col md:justify-end md:h-[452px] gap-2 w-full md:w-[356px]">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-semibold text-grey">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="outline-none bg-none border-solid border-choco border h-[52px] rounded-sm focus:border-2  px-2"
              placeholder="what's your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-grey">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="outline-none bg-none border-solid border-choco border h-[52px]  rounded-sm focus:border-2  px-2"
              placeholder="what's your email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="font-semibold text-grey">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="outline-none bg-none border-solid border-choco border rounded-sm focus:border-2  px-2 h-[116px] "
              placeholder="talk to us"
            />
          </div>
          <input
            type="submit"
            value="submit"
            className="text-white text-center bg-choco px-5 py-2 capitalize rounded-sm w-[100%] mt-5"
          />
        </form>
      </div>
    </>
  );
};

export default ContactUs;
