import React from "react";
// import NavBar from '../components/NavBar'
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <div className="py-10">
        <Header />
      </div>
      <hr />
      <Hero />
      <Footer/>
    </div>
  );
}

export default Home;
