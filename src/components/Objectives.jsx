const Objectives = () => {
  return (
    <>
      <div className="md:max-w-6xl md:mx-auto p-4">
        <div className="flex justify-center items-center flex-col gap-4 md:flex-row text-choco mb-6 capitalize">
          <div className="basis-1/2">
            <h1 className="text-[22px] leading-[28px] mb-2">Our Story</h1>
            <p className="text-sm leading-[20px]">
              Cocoa World was founded by a team of individuals who share a
              deep-rooted love for cocoa. Our journey began with a simple idea:
              to bridge the gap between cocoa farmers and large consumers in a
              way that benefits everyone involved. We understand the challenges
              faced by cocoa farmers, including access to markets and fair
              prices. We also recognize the demands and quality standards of
              large consumers. Cocoa World was born to address these challenges,
              serving as the middle ground where farmers can showcase their
              products and large consumers can find the quality they seek.
            </p>
          </div>
          <div>
            <h1 className="text-[22px] leading-[28px] mb-2">Our mission</h1>
            <ul className="list-inside list-disc text-left">
              <p className="text-sm leading-[20px] mb-4">
                Our mission is to transform the cocoa trading landscape by:
              </p>
              <li className="text-sm leading-[20px]">
                Empowering cocoa farmers by giving them direct access to a
                global marketplace.
              </li>
              <li className="text-sm leading-[20px]">
                Enabling large consumers to source high-quality cocoa products
                with ease.
              </li>
              <li className="text-sm leading-[20px]">
                Fostering fair and transparent transactions.
              </li>
              <li className="text-sm leading-[20px]">
                Supporting sustainability in the cocoa industry.
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-[100%] flex justify-center items-center flex-col gap-4 md:flex-row text-choco mb-6 capitalize">
          <div className="basis-1/2">
            <h1 className="text-[22px] leading-[28px] mb-2">
              What Sets Us Apart
            </h1>
            <ul className="list-inside list-disc text-left ">
              <li className="text-sm leading-[20px] mb-4 mx-4 md:w-[533px]">
                Transparency: We believe in transparency throughout the trading
                process. Our platform provides clear information about cocoa
                products, pricing, and transaction term
              </li>
              <li className="text-sm leading-[20px] mb-4 mx-4">
                Quality Assurance: We encourage quality standards and
                certifications, ensuring that large consumers receive the best
                cocoa products.
              </li>
              <li className="text-sm leading-[20px] mb-4 mx-4">
                User-Focused: We have designed our platform with the user in
                mind. Our user-friendly interface makes trading simple and
                efficient
              </li>
              <li className="text-sm leading-[20px] mb-4 mx-4">
                Transparency: We believe in transparency throughout the trading
                process. Our platform provides clear information about cocoa
                products, pricing, and transaction terms. Quality Assurance: We
                encourage quality standards and certifications, ensuring that
                large consumers receive the best cocoa products. User-Focused:
                We have designed our platform with the user in mind. Our
                user-friendly interface makes trading simple and efficient.
                Community: Cocoa World is more than a platform; it is a
                community of farmers, large consumers, and cocoa enthusiasts
                working together to strengthen the cocoa industry.
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="basis-1/2 mb-16">
              <h1 className="text-[22px] leading-[28px] mb-2">
                join our community
              </h1>
              <p className="text-sm leading-[20px] mb-4">
                We invite you to join the Cocoa World community, where cocoa
                farmers and large consumers come together to build strong
                partnerships and contribute to the growth of the cocoa industry.
              </p>
            </div>
            <div>
              <h1 className="text-[22px] leading-[28px] mb-2">contact us</h1>
              <p className="text-sm leading-[20px] mb-4">
                Have questions or want to learn more about Cocoa World? We are
                here to help. Contact us at [Insert Contact Information] or
                visit our [FAQs](link to FAQ page) for more information.
              </p>
              <p className="text-sm leading-[20px] mb-4">
                Thank you for choosing Cocoa World as your trusted partner in
                cocoa trading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Objectives;
