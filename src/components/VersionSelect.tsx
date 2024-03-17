import React, { useEffect, useState } from "react";


function VersionSelect() {
  const [clicked,onClick]=useState(false);
  async function handleClickEvent(e: {preventDefault: () => void; })
{
  await onClick(!clicked);
  e.preventDefault() 
}

let constPart1=
<div >
<nav >
<button className="text-slate-900 dark:text-white mt-4 text-base font-medium text-lg dark:hover:bg-neutral-800 p-2 hover:bg-gray-50 rounded-md" onClick={handleClickEvent}>ChatGPT 
<span className="text-gray-500 dark:text-gray-300"> 3.5</span><span> </span>
<svg className="inline-flex items-baseline w-2 h-3 text-gray-500 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8" stroke="currentColor" strokeWidth="2">
  <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
  </svg>
</button>
</nav>
</div>

let constPart2=<div>
  <nav >
<button className="text-slate-900  dark:text-white mt-4 text-base font-medium text-lg dark:hover:bg-neutral-800 dark:bg-neutral-800 p-2 hover:bg-gray-50 rounded-md" onClick={handleClickEvent}>ChatGPT 
<span className="text-gray-500 dark:text-gray-300"> 3.5</span><span> </span>
<svg className="inline-flex items-baseline w-2 h-3 text-gray-500 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8" stroke="currentColor" strokeWidth="2">
  <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
  </svg>
</button>
</nav>
<div className="fixed">
<a className="block max-w-xs mt-2 bg-white border-xs border-gray-200 rounded-lg shadow dark:bg-neutral-800  dark:border-white ">
<button className="block p-3 mt-2 bg-white hover:border-2 hover:border-gray-200 dark:hover:bg-neutral-700 rounded-lg shadow dark:bg-neutral-800  dark:border-white">
<div className="flex items-center">
<svg className="h-8 w-8 dark:text-gray-50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          <div className="pl-3 dark:text-gray-50 items-start flex flex-col">
            GPT-3.5<br></br>
            <div className="dark:text-zinc-500 items-start flex flex-col">
             Great for everyday tasks
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white ml-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
</svg>
        </div>
</button>
<button className="block w-full p-3 mt-2 bg-white  hover:border-gray-200 dark:hover:bg-neutral-700 rounded-lg shadow dark:bg-neutral-800 dark:border-white">
<div className="flex items-center">
<svg className="h-8 w-8 dark:text-gray-50"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          <div className="pl-3 dark:text-gray-50 items-start flex flex-col">
            GPT-4<br></br>
            <div className="dark:text-zinc-500 flex flex-col">
             Our smartest and most
            </div>
            <div className="dark:text-zinc-500 flex flex-col">
             capable model. Includes
            </div>
            <div className="dark:text-zinc-500 flex flex-col">
             DALLE-E,browsing & more.
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white ml-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
</svg>
        </div>
        <button className="block w-1/2 p-1 mt-2 ml-16 bg-violet-700 text-white hover:bg-violet-800 shadow rounded-lg shadow ">
          Upgrade to Plus
</button>
</button>
</a>
</div>
</div>
if(clicked===false)
return constPart1
return constPart2

}

export default VersionSelect;
