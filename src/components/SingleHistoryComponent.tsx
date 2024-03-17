import React, { useState } from "react";

function SingleHistoryComponent(props:any) {
  return <div className="dark:text-cyan-50 mt-2 dark:hover:bg-neutral-800 card bg-neutral rounded-md py-2 px-1">
    <div className="inline-flex inline text-sm">
    {props.message.topic.substring(0,26)}
    <span>
     <svg className="h-4 w-5 dark:text-cyan-50 absolute right-11"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
</svg>
<svg className="h-4 w-5 dark:text-cyan-50 absolute right-6"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
</svg>

      </span>
    </div>
    </div>
  }

export default SingleHistoryComponent;
