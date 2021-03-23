import React from "react";
import "./css/styles.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App(){
    return(
        <div className="App">
            <Header></Header>
            <SideBar></SideBar>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;