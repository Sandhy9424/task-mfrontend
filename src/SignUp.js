
import { useNavigate } from "react-router";
import "./sign.css";
import axios from "axios";
function SignUp(){
    
      const navigate=useNavigate();
    function signUp(event){
        event.preventDefault();
        let inputs=document.getElementById("signupid").children;
        let data={
            name:`${inputs[1][0].value} ${inputs[1][1].value} ${inputs[1][2].value}`,
            email:inputs[1][3].value,
            password:inputs[1][4].value
        }
        axios.post(`https://sandhy9424-task-mbackend.onrender.com/adduser`,{
            name:`${inputs[1][0].value} ${inputs[1][1].value} ${inputs[1][2].value}`,
            email:inputs[1][3].value,
            password:inputs[1][4].value
        }).then((res)=>{
            alert("SignUp Successfully")
            navigate("/");
            console.log(res.data)}).catch((err)=>{console.log(err); alert("Some Err Found")});
        console.log("data",data);
      
    }
    function check(e){
        console.log("aya")
        if(e.target.value==document.getElementById("pass").value){
            document.getElementById("signUpForDataInput").disabled=false;
        }
        else{
            document.getElementById("signUpForDataInput").disabled=true;
        }
    }
    return(
        <div id="signupid" className="sign-up">

            <h1 >Signup</h1>
            <form onSubmit={signUp}>
     <input required type="text" name="firstName" placeholder="First Name"/>
     <input type="text" name="middleName" placeholder="Middle Name"/>
     <input required type="text" name="LastName" placeholder="Last Name"/>
     <input required type="email" placeholder="E-Mail"/>
     <input id="pass" required type="password" placeholder="Password"/>
     <input onChange={check} required type="password" placeholder="Confirm Password"/>
     <button type="submit" id="signUpForDataInput">Signup</button>
     <button onClick={()=>navigate("/")}>Log In</button>
     </form>
        </div>
    )
}

export default SignUp;