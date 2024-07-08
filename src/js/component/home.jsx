import React, { useState } from "react";
import { Howl } from "howler";

//create your first component
const Home = () => {
    const [color, setColor] = useState("red");

const playSoundGo = () => {
    const sound = new Howl({src: ['/go.mp3'] });
    sound.play();
};
const playSoundStop = () => {
    const sound = new Howl({src: ['/stop.mp3'] });
    sound.play();
};

const handleClick = (newColor) => {
	setColor(newColor);
	if (newColor === "green") {
		playSoundGo();
	}
	else if (newColor === "red") {
		playSoundStop();
	}
};

    return (
        <div className="absolute top-4 left-4 flex flex-col items-center bg-gray-200 h-screen w-screen">
            <div id="app" className="flex flex-col items-center">
                <div className="w-2 h-12 bg-black"></div>
                <div id="trafficTop" className="w-20 h-64 bg-gray-800 rounded-lg p-2 flex flex-col justify-around items-center">
                    <div className={"w-16 h-16 rounded-full " + (color === "red" ? "bg-red-500 shadow-[0_0_20px_10px_rgba(255,0,0,0.7)]" : "bg-red-800")} onClick={() => handleClick("red")}></div>
                    <div className={"w-16 h-16 rounded-full " + (color === "yellow" ? "bg-yellow-500 shadow-[0_0_20px_10px_rgba(255,255,0,0.7)]" : "bg-yellow-800")} onClick={() => setColor("yellow")}></div>
                    <div className={"w-16 h-16 rounded-full " + (color === "green" ? "bg-green-500 shadow-[0_0_20px_10px_rgba(0,255,0,0.7)]" : "bg-green-800")} onClick={() => handleClick("green")}></div>
                </div>
            </div>
        </div>
    );
};

export default Home;
