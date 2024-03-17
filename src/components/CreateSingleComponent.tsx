import HistoryComponent from "./HistroyComponent";
import DateComponent from "./DateComponent";
const datas=require("../asset/data.json")

function SingleComponent(props:any) {    
return <div>
    {
        props.message.map((d:any,index:any)=>
            <div >
                <DateComponent message={d.date} />
                <HistoryComponent message={d.data} />
            </div>
        )
    }
</div>
}

export default SingleComponent;
