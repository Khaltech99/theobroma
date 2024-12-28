import { useState, useEffect } from "react";
import { reviewers } from "../../data";

const Review = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Update itemsPerPage based on the screen width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // 1 item per page for small screens
      } else {
        setItemsPerPage(3); // 3 items per page for larger screens
      }
    };

    updateItemsPerPage(); // Set initial value
    window.addEventListener("resize", updateItemsPerPage); // Update on resize
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(reviewers.length / itemsPerPage);

  const handleGotoPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-6 mb-10">
        {/* Slider Section */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentPage * (100 / itemsPerPage)}%)`,
            }}
          >
            {reviewers.map((review, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full ${
                  itemsPerPage === 1 ? "sm:w-full" : "md:w-[33.33%]"
                } px-2`}
              >
                <div className="w-full h-auto my-4 object-cover rounded-md bg-[white] border-solid border-[#c7c2be] shadow-lg px-4 py-6 ">
                  <div className="flex justify-between items-center w-[100%]">
                    <div className="mt-5 relative bottom-6 flex justify-between items-baseline gap-3">
                      <img
                        src={review.img}
                        alt=""
                        className="rounded-full w-[40px] h-[40px] border-[0.5px] border-[#c7c2be]"
                      />
                      <span className="text-xs leading-[12px] text-choco">
                        {review.name}
                      </span>
                    </div>
                    <img
                      src="/icons/format_quote.png"
                      alt=""
                      className="w-[14.17px] h-[10px]"
                    />
                  </div>
                  {/* p segment */}
                  <p className="text-[11px] leading-[16px] text-[#857c73] w-[288px]">
                    {review.msg}
                  </p>
                  {/* star segment */}
                  <div className="flex gap-1 w-[52.91px] h-[8px] mr-7 my-4 md:mr-0">
                    <img src="/icons/vector.png" alt="" />
                    <img src="/icons/vector.png" alt="" />
                    <img src="/icons/vector.png" alt="" />
                    <img src="/icons/vector.png" alt="" />
                    <img src="/icons/vector.png" alt="" />
                    <img src="/icons/vector.png" alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 justify-center items-center">
          <div className="hidden md:flex w-[24px] h-[24px] text-sm bg-choco  justify-center items-center rounded-full text-white ">
            1
          </div>
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => handleGotoPage(pageIndex)}
                className={`w-[8px] h-[8px] rounded-full ${
                  currentPage === pageIndex ? "bg-choco" : "bg-gray-400"
                } transition-all duration-300`}
              />
            ))}
          </div>
          <div className="hidden md:flex w-[24px] h-[24px] text-sm bg-choco  justify-center items-center rounded-full text-white ">
            {totalPages}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
