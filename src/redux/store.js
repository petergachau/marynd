import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import projectReducer from "./features/projectSlice";
export default configureStore({
  reducer: {
    auth: AuthReducer,
    project:projectReducer,
  },
});
