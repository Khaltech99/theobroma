const AuthModal = () => {
  return (
    <>
      <div className="flex justify-between rounded-md border-l-4 border-green-500 bg-white shadow-2xl text-green-500 border-solid p-3 capitalize w-full md:w-[400px] m-auto">
        <div>
          <h1 className="text-sm leading-[20px]"> Welcome!</h1>
          <p className="text-sm leading-[20px]">
            you account has been created🎉
          </p>
        </div>
        <img
          src="/icons/cancel-01.png"
          alt=""
          className="w-[24px] h-[24px] fill-green-500 bg-green-500"
        />
      </div>
    </>
  );
};

export default AuthModal;
