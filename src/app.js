import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const Layout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const LayoutContainer = document.getElementById("root");
const root = ReactDOM.createRoot(LayoutContainer);
root.render(<Layout></Layout>);
