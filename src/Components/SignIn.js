import { useContext } from "react";
import "../CSS/sign.css";
import { useNavigate} from "react-router-dom";
import axios from "axios"
import userContext from "../Provider/userContext";
function SignIn(){
  
  const navigate= useNavigate();
     const user=useContext(userContext);

  function logIn(event){
    event.preventDefault();
    const email=document.getElementById("logEmail").value;
    const password=document.getElementById("logPassword").value;
    console.log("ayaya")
    
    axios.get(`https://sandhy9424-task-mbackend.onrender.com/getuserbyemail?email=${email}&password=${password}`).then((res)=>{
    user.setUser(res.data[0]); 
    navigate("task-dashboard");
    console.log(user)}).catch((err)=>console.log(err))
    console.log(user.user);
    }
    return(
        <div id="loginDiv" class="sign">
          <h1>Login</h1>
          <form>
          <input required id="logEmail" type="email" name="email" placeholder="Enter Email" />
          <input required id="logPassword" type="password" name="password" placeholder="Enter Password" />
          <button onClick={logIn}>Login</button>
          <button onClick={()=>navigate("/sign-up")} id="signUp">Signup</button>
          </form>
        </div>
    )
}

export default SignIn;