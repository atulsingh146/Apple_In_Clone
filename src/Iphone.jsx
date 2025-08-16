import React from "react";

const Iphone = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-center bg-customGrey relative">
      {/* Top Content */}
      <div className="pt-6 space-y-4 ">
        <h1 className="text-4xl font-bold">iPhone</h1>
        <h2 className="text-xl text-gray-700">Meet the iPhone 16 family.</h2>

        <div className="flex justify-center gap-4">
          <button className="px-5 py-2 bg-bblue hover:bg-blue-600 text-white rounded-3xl">
            Learn more
          </button>
          <button className="px-5 py-2 text-bblue rounded-3xl border border-bblue hover:bg-bblue hover:text-white">
            Shop iPhone
          </button>
        </div>

        <h3 className=" font-bold text-lg font-light text-gray-600 bg-gradient-to-r from-[#148BF7] via-[#BB62FC] to-[#F3493F] bg-clip-text text-transparent">
          Built for Apple Intelligence.
        </h3>
      </div>

      {/* Image touching bottom */}
      <img
        src="src/assets/iphone_top.png"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl object-contain"
        alt="iPhone"
      />
    </div>
  );
};

export default Iphone;
