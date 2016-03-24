/*
    Source File: COMP397-W2016-MailPilotDemo-master/ end.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 24, 2016
    Date Last  Modified: Mar 24, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Game over scene
    Revision History: added background image and button - Mar 24, 2016
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// END SCENE
var scenes;
(function (scenes) {
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            //Add Background Image
            this._backgroundImage = new objects.Road();
            this.addChild(this._backgroundImage);
            // add score label to the END scene
            this._scoreLabel = new objects.Label("Score: " + scoreboard.getScore(), "60px Consolas", "#FFFF00", 320, 260, true);
            this.addChild(this._scoreLabel);
            // add the DRIVE_AGAIN button to the END scene
            this._driveAgain = new objects.Button("DriveAgain", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._driveAgain);
            // DRIVE_AGAIN Button event listener
            this._driveAgain.on("click", this._driveAgainButtonClick, this);
            // add the GO_HOME button to the END scene
            this._goHome = new objects.Button("GoHome", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._goHome);
            // GO_HOME Button event listener
            this._goHome.on("click", this._goHomeButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // END Scene updates here
        End.prototype.update = function () {
            this._backgroundImage.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // DRIVE_AGAIN Button click event handler
        End.prototype._driveAgainButtonClick = function (event) {
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        // GO_HOME Button click event handler
        End.prototype._goHomeButtonClick = function (event) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return End;
    })(objects.Scene);
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map