import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Branches from "./Pageforms/Branches";
import Departments from "./Pageforms/Departments";
import Inventory from "./Pageforms/Inventory";
import Offers from "./Pageforms/Offers";
import User from "./Pageforms/User";
import MainLayout from "./pages/MainLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/user" element={<User />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
