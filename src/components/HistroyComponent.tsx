import SingleHistoryComponent from "./SingleHistoryComponent";
function HistoryComponent(props:any) {
return <div>
    {
            props.message.map((d: any) => 
            <div>
                <SingleHistoryComponent message={d} />
            </div>
             )
    }   
</div>
}

export default HistoryComponent;
