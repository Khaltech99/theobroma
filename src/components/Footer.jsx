const Footer = () => {
  return (
    <>
      <div className=" bg-choco bg-contain text-white p-4 mt-10 md:mt-40">
        <div className="text-white md:max-w-6xl md:mx-auto py-10  md:p-leading-[20px] flex flex-col gap-6">
          {/* first div of logo */}

          <div>
            <img
              src="/icons/LOGO.png"
              alt="logo"
              className="md:h-[64px] md:w-[76.94]"
            />
          </div>

          {/* second div of list  */}
          <div className="flex justify-between w-[100%] md:justify-between md:flex-row  capitalize">
            <p className="md:w-[307px] text-sm w-[136px]">
              Cocoa Worlds key services include cocoa sourcing, quality
              assurance, logistics solutions, and market insights. The platform
              is committed to fair pricing, eco-friendly farming practices, and
              community development. Additionally, Cocoa World provides valuable
              market insights to help clients make informed decisions.
            </p>
            <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center basis-1/2">
              <ul className="list-none">
                <h2 className="font-semibold mb-6">Features</h2>
                <li className="text-sm mb-2">About us</li>
                <li className="text-sm mb-2">Our cocoa</li>
                <li className="text-sm mb-2">How it works</li>
              </ul>
              <ul className="list-none">
                <h2 className="font-semibold mb-6">other info</h2>
                <li className="text-sm mb-2">terms and conditions</li>
                <li className="text-sm mb-2">privacy and policy</li>
                <li className="text-sm mb-2">blog</li>
              </ul>
              <ul className="list-none">
                <h2 className="font-semibold mb-6">contact us</h2>
                <li className="text-sm mb-2">epe</li>
                <li className="text-sm mb-2">Our cocoa</li>
                <li className="text-sm mb-2">31, furqaan</li>
              </ul>
            </div>
          </div>
          {/* third div of icons */}
          <div className="flex flex-col gap-6 md:flex-row-reverse md:justify-between md:items-center mt-6">
            <div className="flex gap-2">
              <img src="/icons/mdi_instagram.png" alt="" />
              <img src="/icons/mdi_twitter.png" alt="" />
              <img src="/icons/ic_outline-facebook.png" alt="" />
            </div>
            <h2 className="text-sm capitalize">Copyright @2023 Cocoa World</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
