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
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

// Game Scenes
var menu: scenes.Menu;
var play: scenes.Play;
var end: scenes.End;
var instructions: scenes.Instructions;

var assetData: objects.Asset[] = [
    // Add your Assets here
    { id: "LetsDrive", src: "../../Assets/images/LetsDrive.png" },         // menu scene
    { id: "Help", src: "../../Assets/images/Help.png" },                   // menu scene
    { id: "Instructions", src: "../../Assets/images/Instruction.png" },     // instruction scene
    { id: "DriveAgain", src: "../../Assets/images/DriveAgain.png" },       // end scene
    { id: "GoHome", src: "../../Assets/images/GoHome.png" },               // end scene
    { id: "GotIt", src: "../../Assets/images/GotIt.png" },                 // instruction scene
    { id: "Road", src: "../../Assets/images/Road.png" },                   // menu and game play scene
    { id: "Car", src: "../../Assets/images/Car.png" },                     // play scene
    { id: "Car1", src: "../../Assets/images/Car1.png" },                     // play scene
    { id: "Car2", src: "../../Assets/images/Car2.png" },                     // play scene
    { id: "Car3", src: "../../Assets/images/Car3.png" },                     // play scene
    { id: "Car4", src: "../../Assets/images/Car4.png" },                     // play scene
    { id: "Car5", src: "../../Assets/images/Car5.png" },                     // play scene
    { id: "Car6", src: "../../Assets/images/Car6.png" },                     // play scene
    { id: "Bike", src: "../../Assets/images/Bike.png" },                   // play scene
    { id: "Police", src: "../../Assets/images/Police.png" },                   // play scene
    { id: "Battery", src: "../../Assets/images/Battery.png" },             // play scene
];

function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init(): void {
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
function gameLoop(event: createjs.Event): void {
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
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {

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