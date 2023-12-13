import logo from './logo.svg';
import './CSS/App.css';
import { Routes,Route } from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Task from './Components/Task';

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path="/" element={<SignIn></SignIn>}></Route>
      <Route path="sign-up" element={<SignUp></SignUp>}></Route>
       <Route path="task-dashboard" element={<Task></Task>}></Route> 
     </Routes>  
    </div>
  );
}

export default App;
