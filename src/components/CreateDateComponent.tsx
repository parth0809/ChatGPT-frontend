import SingleComponent from "./CreateSingleComponent"

const datas=require("../asset/data.json")

function CreateDateComponent() {
return <div>
            {
            datas.map((data: any,index:any) => 
            <div>
              <SingleComponent message={data.data}/>
              </div>
             )
            }
      </div>
}

export default CreateDateComponent;
