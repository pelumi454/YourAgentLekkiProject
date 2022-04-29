import React from "react";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer hideProgressBar={true} autoClose={3000} />
    </div>
  );
}

export default App;
