import React from "react";
import Header from "../components/header";
import "../styles/home.css";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <section style={{ backgroundColor: "red" }}>hi there</section>
    </div>
  );
};
export default Home;
