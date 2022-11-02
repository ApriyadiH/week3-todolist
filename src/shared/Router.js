import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Page from "../components/page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/:id" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;