import { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import MileProjects from './pages/MileProjects'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";

import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import StudentProjectCreate from './pages/StudentProjectCreate'
import TagTours from "./pages/TagTours";
import Main from "./pages/Main";
import Milestone from "./pages/Milestone";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
    <Header />
     <Routes>
        <Route path="/" element={
        <Home />} />
         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addproject" element={<StudentProjectCreate />} />
          <Route path="/editproject" element={<StudentProjectCreate />} />
              <Route path="/main" element={<Main />} />
              <Route path="/milestone" element={<Milestone />} />
              <Route path="/mileProject" element={<MileProjects />} />


</Routes> 
      {/* <div className="App">
        
        <ToastContainer />
       
        
          <Route path="/tours/search" element={<Home />} />
          <Route path="/tours/tag/:tag" element={<TagTours />} />
         

          <Route
            path="/dashboard"
            element={
              
                <Dashboard/>
              
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div> */}
    </BrowserRouter>
  );
}

export default App;
