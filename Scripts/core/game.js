/*
    Source File: COMP397-W2016-MailPilotDemo-master/ game.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 18, 2016
    Date Last  Modified: Mar 19, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Contains assests and other required features needed during game play.
    Revision History: updated assests
*/
/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
// Game Scenes
var menu;
var play;
var end;
var instructions;
var assetData = [
    // Add your Assets here
    { id: "LetsDrive", src: "../../Assets/images/LetsDrive.png" },
    { id: "Help", src: "../../Assets/images/Help.png" },
    { id: "Instructions", src: "../../Assets/images/Instruction.png" },
    { id: "DriveAgain", src: "../../Assets/images/DriveAgain.png" },
    { id: "GoHome", src: "../../Assets/images/GoHome.png" },
    { id: "GotIt", src: "../../Assets/images/GotIt.png" },
    { id: "Road", src: "../../Assets/images/Road.png" },
    { id: "Car", src: "../../Assets/images/Car.png" },
    { id: "Car1", src: "../../Assets/images/Car1.png" },
    { id: "Car2", src: "../../Assets/images/Car2.png" },
    { id: "Car3", src: "../../Assets/images/Car3.png" },
    { id: "Car4", src: "../../Assets/images/Car4.png" },
    { id: "Car5", src: "../../Assets/images/Car5.png" },
    { id: "Car6", src: "../../Assets/images/Car6.png" },
    { id: "Bike", src: "../../Assets/images/Bike.png" },
    { id: "Police", src: "../../Assets/images/Police.png" },
    { id: "Battery", src: "../../Assets/images/Battery.png" },
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INSTRUCTIONS:
            // show the INSTRUCTIONS scene
            stage.removeAllChildren();
            instructions = new scenes.Instructions();
            currentScene = instructions;
            console.log("Starting INSTRUCTIONS Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;
//# sourceMappingURL=game.js.map