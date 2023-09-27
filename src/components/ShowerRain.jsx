import React from 'react'

const ShowerRain = () => {
  return (
    <div class="flex-col align-middle justify-center">
    <div class="relative w-24 h-24 bg-slate-300 rounded-full shadow-2xl after:w-24 after:h-20 after:bg-slate-300 after:absolute after:-bottom-6 after:-left-6 after:rounded-full after:shadow-[0px_30px_30px_#6e6e6e] before:w-24 before:h-20 before:bg-slate-300 before:absolute before:-bottom-6 before:-right-10 before:rounded-full before:shadow-[0px_30px_30px_#6e6e6e] animate-cloud"></div>      
    <div class="relative ml-10 z-10 flex">
          <div class="m-1 w-2 h-5 bg-cyan-400 rounded-b-full animate-drop"></div>
          <div class="m-1 w-2 h-7 bg-cyan-400 rounded-b-full animate-drop2"></div>
          <div class="m-2 w-2 h-6 bg-cyan-400 rounded-b-full animate-drop3"></div>
          <div class="m-1 w-3 h-7 bg-cyan-400 rounded-b-full animate-drop"></div>
    </div>
  </div>
  )
}

export default ShowerRain