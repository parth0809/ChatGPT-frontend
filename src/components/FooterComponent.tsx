
function FooterComponent() {
return <div>
    <div className="flex flex-col fixed bottom-14">
        <footer className="dark:text-white">

        <button className="p-2 mt-2 mr-2 bg-white dark:hover:bg-neutral-700 shadow dark:bg-neutral-950  w-screen">
<div className="flex items-center">
<svg className="h-8 w-8 dark:text-gray-50 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
          <div className="dark:text-gray-50 items-start flex flex-col">
          Upgrade plan<br></br>
            <div className="dark:text-zinc-400 items-start flex flex-col text-xs">
            Get GPT-4,DALL-E, and more
            </div>
          </div>
        </div>
</button>

    </footer>
    </div>
    <div className="flex flex-col fixed bottom-2 w-full">
        <footer className="dark:text-white ">
        <button className="p-2 mr-2 bg-white dark:hover:bg-neutral-700 shadow dark:bg-neutral-950  max-width">
<div className="flex items-center">
<img
      className="object-cover object-center h-8 w-8 rounded-full"
      src="./image/profile.jpeg"
      alt="nature image"
    />
          <div className="pl-3 dark:text-gray-50 items-start flex flex-col w-screen">
          Parth upadhyay<br></br>
          </div>
        </div>
</button>

    </footer>
    </div>
</div>

}

export default FooterComponent;
