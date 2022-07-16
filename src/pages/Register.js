import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register } from "../redux/features/authSlice";

const initialState = {
 name:'',
  email: "",
  password: "",
  phone:'',
  aob:'',
  dob:'',
  bloodGroup:'',
  allergy:'',
};

const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error,user } = useSelector((state) => ({ ...state.auth }));
  const { email, password, name} = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
      dispatch(register({ formValue, navigate, toast }));
    
  };
 
  return (
    
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setFormValue({ ...formValue, password: e.target.value })}
        />
         <input
          type="number"
          placeholder="phone"
          onChange={(e) => setFormValue({ ...formValue, phone: e.target.value })}
        />
         <input
          type="date"
          placeholder="dob"
          onChange={(e) => setFormValue({ ...formValue, dob: e.target.value })}
        />
         <input
          type="text"
          placeholder="allergy"
          onChange={(e) => setFormValue({ ...formValue, allergy: e.target.value })}
        />
         <input
          type="text"
          placeholder="bloodGroup"
          onChange={(e) => setFormValue({ ...formValue, bloodGroup: e.target.value })}
        />
         <input
          type="text"
          placeholder="aob"
          onChange={(e) => setFormValue({ ...formValue, aob: e.target.value })}
        />
        <button>
          register
          {/* {user.rigisterStatus === "pending" ? "Submitting..." : "Register"} */}
        </button>
        {/* {user.registerStatus === "rejected" ? (
          <p>{user.registerError}</p>
        ) : null} */}
      </form>
    
  );
};

export default Register;
