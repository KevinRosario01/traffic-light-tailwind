import React, { useState } from "react";

//create your first component
const Home = () => {
    const [color, setColor] = useState("red");

    return (
        <div className="absolute top-4 left-4 flex flex-col items-center bg-gray-200 h-screen w-screen">
            <div id="app" className="flex flex-col items-center">
                <div className="w-2 h-12 bg-black"></div>
                <div id="trafficTop" className="w-20 h-64 bg-gray-800 rounded-lg p-2 flex flex-col justify-around items-center">
                    <div className={"w-16 h-16 rounded-full " + (color === "red" ? "bg-red-500 shadow-[0_0_20px_10px_rgba(255,0,0,0.7)]" : "bg-red-800")} onClick={() => setColor("red")}></div>
                    <div className={"w-16 h-16 rounded-full " + (color === "yellow" ? "bg-yellow-500 shadow-[0_0_20px_10px_rgba(255,255,0,0.7)]" : "bg-yellow-800")} onClick={() => setColor("yellow")}></div>
                    <div className={"w-16 h-16 rounded-full " + (color === "green" ? "bg-green-500 shadow-[0_0_20px_10px_rgba(0,255,0,0.7)]" : "bg-green-800")} onClick={() => setColor("green")}></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
