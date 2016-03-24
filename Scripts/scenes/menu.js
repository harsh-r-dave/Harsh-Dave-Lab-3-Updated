/*
    Source File: COMP397-W2016-MailPilotDemo-master/ menu.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 18, 2016
    Date Last  Modified: Mar 24, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Main menu scene
    Revision History: added image and buttons for menu scene
                      updated background image - Mar 24, 2016
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            //Add Background Image
            this._backgroundImage = new objects.Road();
            this.addChild(this._backgroundImage);
            // add the Let's Drive button to the MENU scene
            this._letsDriveButton = new objects.Button("LetsDrive", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._letsDriveButton);
            // LETS_DRIVE event listener
            this._letsDriveButton.on("click", this._letsDriveButtonClick, this);
            // add the Help button to the MENU scene
            this._helpButton = new objects.Button("Help", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._helpButton);
            // HELP event listener
            this._helpButton.on("click", this._helpButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // MENU Scene updates here
        Menu.prototype.update = function () {
            this._backgroundImage.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LET'S DRIVE Button click event handler
        Menu.prototype._letsDriveButtonClick = function (event) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        // HELP Button click event handler
        Menu.prototype._helpButtonClick = function (event) {
            // Switch to the INSTRUCTIONS Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map