import "./home.scss"
import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/lists/List";

export const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Featured/> 
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home;
