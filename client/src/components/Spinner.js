import React from "react";

function Spinner() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full z-10">
      <div className="h-20 w-20   border-b-8 border-b-primary rounded-full animate-spin"></div>
    </div>
    // <div className="flex justify-center items-center h-screen">
    //   <div className="animate-spin rounded-full border-t-4 border-b-4 border-gray-900 h-16 w-16"></div>
    // </div>

    // <div className="flex items-center justify-center h-screen">
    //   <div className="flex items-center animate-spin mr-2">
    //     <div className="w-6 h-6 border-4 border-t-4 border-blue-500 rounded-full"></div>
    //     <svg
    //       className="w-5 h-5 ml-2 text-blue-500"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M19 14l-7 7m0 0l-7-7m7 7V3"
    //       />
    //     </svg>
    //   </div>
    // </div>
  );
}

export default Spinner;
