import VersionSelect from './components/VersionSelect'
import CenterElement from './components/centerElement';


function RightPannel() {
  return (
    <div className="bg-white dark:bg-neutral-900 px-6 ring-1 ring-slate-900/5 shadow-xl h-dvh">
      <VersionSelect/>
      <CenterElement />
        </div>
  );
}

export default RightPannel;
