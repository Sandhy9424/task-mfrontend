import logo from './logo.svg';
import './App.css';
import { Routes,Route } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';
import Task from './Task';
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
