import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./signup/signup";
import ExistingOrders from "./existingorders/existingorder";
import Orderpage from "./screens/orderPage";
import Creatingorder from "./screens/createOrder";
import Login from "./login/login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/creatingorder" element={<Creatingorder />} />
          <Route exact path="/orderPage" element={<Orderpage />} />
          <Route exact path="/existorder" element={<ExistingOrders />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
