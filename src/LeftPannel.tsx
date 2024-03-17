import ImageComponentLeftPannel from './components/ImageComponentLeftPannel'
import CreateDateComponent from './components/CreateDateComponent';
import FooterComponent from './components/FooterComponent';

function LeftPannel() {
 
    return (
      <div className="hover:scrollbar-thumb-[#171717] scrollbar-thin active:scrollbar-thumb-[#171717] h-dvh scrollbar scrollbar-thumb-[#171717] scrollbar-track-[#808080] no-scrollbar overflow-y-scroll ">
    <div className="h-dvh bg-[#171717]">
    <div className="bg-stone-50 dark:bg-black px-6 py-1 ring-1 ring-slate-900 shadow-xl h-dvh  ">
    <ImageComponentLeftPannel />
    <CreateDateComponent />
    <FooterComponent />
    </div>
    </div>
</div>
//       <div className="scrollbar-thumb-[#171717] scrollbar-thin scrollbar-track-[#171717] overflow-y-scroll">
//     <div>
//    
// </div>
//    </div>
      );
}

export default LeftPannel;
