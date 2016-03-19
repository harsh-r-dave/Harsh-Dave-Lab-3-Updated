/*
    Source File: N/A
    Author's name: Harsh Dave, Student, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 18, 2016
    Date Last  Modified: Mar 18, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Instruction scene gives help on how to play game
    Revision History: added instructions image and button
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// INSTRUCTIONS SCENE
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instructions.prototype.start = function () {
            //Add Instructions image to the scene
            this._instructionsImage = new createjs.Bitmap(assets.getResult("Instructions"));
            this.addChild(this._instructionsImage);
            // add the Got It button to the INSTRUCTIONS scene
            this.__gotItButton = new objects.Button("GotIt", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this.__gotItButton);
            // Got It Button event listener
            this.__gotItButton.on("click", this._gotItButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // GOT IT Button click event handler
        Instructions.prototype._gotItButtonClick = function (event) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instructions;
    })(objects.Scene);
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map