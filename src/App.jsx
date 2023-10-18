import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Config from "./Components/Config";
import Quiz from "./Components/Quiz";

const App = () => {
    return (

        <div style={{backgroundColor:"black"}} className="container mt-5 p-5">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/config" element={<Config />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </div>
    );
};

export default App;