import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react"
import UserContext from "../Provider/userContext";


function List(props){
    // const listc=useRef(0);
    const user=useContext(UserContext);
      const[taskl,setTaskl]=useState([]);
      console.log(props.listdata);
      useEffect(()=>{
      axios(`https://sandhy9424-task-mbackend.onrender.com/gettaskbylistid?listId=${props.listdata.id}`).then((res)=>{setTaskl(res.data[0].tasks); console.log(res)}).catch((err)=>console.log("erraa",err));
},[])
    function addTask(event){
        if(event.target.parentNode.children[1]){
        let listid=event.target.parentNode.parentNode.children[0].innerText;
        let name=event.target.parentNode.children[1].value;
        console.log(name,listid);
        axios.post(`https://sandhy9424-task-mbackend.onrender.com/addtask?name=${name}&listId=${listid}`).then((res)=>{
            axios(`https://sandhy9424-task-mbackend.onrender.com/gettaskbylistid?listId=${listid}`).then((res)=>{setTaskl(res.data[0].tasks); console.log(res)}).catch((err)=>console.log("erraa",err));    
        console.log(res)}).catch((err)=>console.log(err))
    }   
}
    function addTask1(event){
        let listid=event.target.parentNode.parentNode.parentNode.children[0].innerText;
        let name=event.target.parentNode.parentNode.children[1].value;
        if(name==null||name==""){
            alert("enter a valid task name");
            return
        }
        console.log(name,listid);
        axios.post(`https://sandhy9424-task-mbackend.onrender.com/addtask?name=${name}&listId=${listid}`).then((res)=>{
            axios(`https://sandhy9424-task-mbackend.onrender.com/gettaskbylistid?listId=${listid}`).then((res)=>{setTaskl(res.data[0].tasks); console.log(res)}).catch((err)=>console.log("erraa",err));
            console.log(res)}).catch((err)=>console.log(err))
    }

function deleteTask(event){
    console.log("suru")
    let taskid=event.target.parentNode.children[0].innerText;
    console.log(taskid)
    axios.delete(`https://sandhy9424-task-mbackend.onrender.com/deletetask?taskid=${taskid}`).then((res)=>{
        console.log(res);
        axios(`https://sandhy9424-task-mbackend.onrender.com/gettaskbylistid?listId=${props.listdata.id}`).then((res)=>{setTaskl(res.data[0].tasks); console.log(res)}).catch((err)=>console.log("erraa",err));
    }).catch((err)=>console.log(err))
}
async function drag(event){
    let taskdi=event.target.children[0].innerText;
    let listdi=event.target.parentNode.parentNode.children[0].innerText;
  props.dragData.setDragData( {
        taskdi:taskdi,
        listdi:listdi,
        sett:setTaskl
    })
       console.log(event,taskdi,listdi,props.dragData.dragData)
 }
function drop(e){
   let listid=e.target.parentNode.children[0].innerText;
   console.log(listid);
   axios.put(`https://sandhy9424-task-mbackend.onrender.com/updatetask?listId=${listid}&taskId=${props.dragData.dragData.taskdi}`).then(()=>{
    axios(`https://sandhy9424-task-mbackend.onrender.com/gettaskbylistid?listId=${props.dragData.dragData.listdi}`).then((res)=>{props.dragData.dragData.sett(res.data[0].tasks); console.log(res)}).catch((err)=>console.log("erraa",err)) 
   axios(`https://sandhy9424-task-mbackend.onrender.com/gettaskbylistid?listId=${props.listdata.id}`).then((res)=>{setTaskl(res.data[0].tasks); console.log(res)}).catch((err)=>console.log("erraa",err))
   }).catch((err)=>console.log)
}
function dragover(e){
    // console.log(props.dragData.dragData)
 e.preventDefault();

}
    console.log(taskl);
    return(
        <div onDrop={drop} onDragOver={dragover} className="list-s">
            <p style={{display:"none"}}>{props.listdata.id}</p>
         <h1>{props.listdata.name} </h1>
            <div className="lic">
                {taskl.map((e)=>{
                
            return(<div draggable onDragStart={drag}> 
                <p style={{display:"none"}}>{e.id}</p>
                <input onChange={deleteTask} type="checkbox"></input>
         <p>{e.name}</p></div>)})}</div>
        <div className="add-t"> <svg  onClick={addTask} xmlns="http://www.w3.org/2000/svg" width="30" height="30" color="white" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
         <path onClick={addTask1} d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
          </svg><input type="text" placeholder="add-task"></input></div>
            
            
        </div>
    )
}

export default List;