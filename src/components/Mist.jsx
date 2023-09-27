import React from "react";

const Mist = () => {
  return (
    <div className="mt-10 flex-col">
      <div className="w-40 h-6 bg-slate-300 opacity-90 animate-mist2 relative top-3"></div>
      <div className="w-40 h-16 bg-slate-500 opacity-20 animate-mist1 relative top-2 "></div>
      <div className="w-40 h-6 bg-slate-600 opacity-90 animate-mist3 relative -top-2"></div>
      <div className="w-40 h-14 bg-slate-300 opacity-50 animate-mist2 relative -top-3"></div>
      <div className="w-40 h-6 bg-slate-500 opacity-90 animate-mist1 relative -top-5"></div>
    </div>
  );
};

export default Mist;
