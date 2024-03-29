import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header2 from "./components/header/Header2";
import Footer2 from "./components/footer/Footer2";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Header2 />
      <AppRouter />
      <Footer2 />
    </BrowserRouter>
  );
};

export default App;
