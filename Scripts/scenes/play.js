/*
    Source File: COMP397-W2016-MailPilotDemo-master/ play.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 18, 2016
    Date Last  Modified: Mar 19, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Play scene where gameplay takes action.
    Revision History: added road image - Mar 18, 2016
                      added battery object - Mar 18, 2016
                      added car object - Mar 18, 2016
                      added player object - Mar 19, 2016
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // set cars count
            this._carsCount = 3;
            // instatiate cars array
            this._cars = new Array();
            //add road  to scene
            this._road = new objects.Road();
            this.addChild(this._road);
            //add battery to scene
            this._battery = new objects.Battery();
            this.addChild(this._battery);
            // add cars to scene
            for (var car = 0; car < this._carsCount; car++) {
                if (car == 0) {
                    this._cars[car] = new objects.Cars("Car");
                }
                if (car == 1) {
                    this._cars[car] = new objects.Cars("Police");
                }
                if (car == 2) {
                    this._cars[car] = new objects.Cars("Car2");
                }
                this.addChild(this._cars[car]);
            }
            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            this._road.update();
            this._battery.update();
            this._cars.forEach(function (car) {
                car.update();
            });
            this._player.update();
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map