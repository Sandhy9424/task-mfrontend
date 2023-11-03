import { useContext, useEffect, useRef, useState } from "react"
import List from "./List";
import userContext from "./userContext";
import axios from "axios";
import { useNavigate } from "react-router";


function Task(){
    const listn=useRef(0);
   const navigate= useNavigate();
const user=useContext(userContext);
let [dragData,setDragData]=useState();
console.log(user);
let li=[];
if(user.user!=null){
    console.log()
    listn.current=user.user.lists.length;
    li=user.user.lists.map((e)=>e);
}
const[list,setList]=useState(li);
// useEffect(()=>{
//       setList(user.user.lists);
// },[user.user])
function addList(){
    axios.post(`https://sandhy9424-task-mbackend.onrender.com/addlist`,{name:`List ${listn.current+1}`,userId:user.user.id}).then((res)=>{
        axios.get(`https://sandhy9424-task-mbackend.onrender.com/getuserbyemail?email=${user.user.email}&password=${user.user.password}`).then((response)=>{
            setList(response.data[0].lists);user.setUser(response.data[0])}).catch((err)=>console.log(err))
    console.log(res)}).catch((err)=>console.log(err))
}

console.log(list);
    return (
        <div className="temp">
            <div className="navv"><h1>Welcome User</h1> <h1 onClick={()=>navigate("/")}>Log out</h1> </div>
            <div className="temp1">
            <div className="listdiv">
                {list.map((element) =><List dragData={{dragData:dragData,
                    setDragData:setDragData}} listdata={element}></List> )}
                
            </div>
            <div className="add-list" onClick={addList}>
                    <p>Create New List</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg>
            </div>
            </div>
            
        </div>

    )
}
export default Task;