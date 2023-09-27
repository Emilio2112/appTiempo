
const Rain = () => {
  return (
    <div className="flex-col align-middle justify-center">
    <div className="relative w-24 h-24 bg-slate-500 rounded-full shadow-2xl after:w-24 after:h-20 after:bg-slate-500 after:absolute after:-bottom-6 after:-left-6 after:rounded-full after:shadow-[0px_30px_30px_#6e6e6e] before:w-24 before:h-20 before:bg-slate-500 before:absolute before:-bottom-6 before:-right-10 before:rounded-full before:shadow-[0px_20px_30px_#6e6e6e] animate-cloud"></div>
      <div className="relative z-10 flex">
        <div className="m-1 w-2 h-5 bg-cyan-400 rounded-b-full animate-drop"></div>
        <div className="m-1 w-2 h-7 bg-cyan-400 rounded-b-full animate-drop2"></div>
        <div className="m-2 w-2 h-6 bg-cyan-400 rounded-b-full animate-drop3"></div>
        <div className="m-1 w-3 h-7 bg-cyan-400 rounded-b-full animate-drop"></div>
        <div className="m-1 w-2 h-7 bg-cyan-400 rounded-b-full animate-drop"></div>
        <div className="m-2 w-3 h-7 bg-cyan-400 rounded-b-full animate-drop2"></div>
        <div className="m-1 w-3 h-5 bg-cyan-400 rounded-b-full animate-drop3"></div>
      </div>
    </div>
  );
};

export default Rain;
