/*
    Source File: COMP397-W2016-MailPilotDemo-master/ play.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 18, 2016
    Date Last  Modified: Mar 24, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Play scene where gameplay takes action.
    Revision History: added road image - Mar 18, 2016
                      added battery object - Mar 18, 2016
                      added car object - Mar 18, 2016
                      added player object - Mar 19, 2016
                      added collision manager - Mar 19,2016
                      added scoreboard feature - Mar 24, 2016
*/

// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _road: objects.Road;
        private _battery: objects.Battery;
        private _cars: objects.Cars[];
        private _carsCount: number;
        private _player: objects.Player;
        private _carsCollection: string[];

        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // reset scoreboard
            scoreboard.setLives(5);
            scoreboard.setScore(0);
            console.log("Score: " + scoreboard.getScore());
            console.log("Lives: " + scoreboard.getLives());

            // instatiate cars collection
            this._carsCollection = new Array("Car", "Car1", "Car2", "Car3", "Car4", "Car5", "Car6", "Police");

            // set cars count
            this._carsCount = 3;
            // instatiate cars array
            this._cars = new Array<objects.Cars>();

            //add road to scene
            this._road = new objects.Road();
            this.addChild(this._road);

            //add battery to scene
            this._battery = new objects.Battery();
            this.addChild(this._battery);

            // add cars to scene
            for (var car: number = 0; car < this._carsCount; car++) {
                // get random car model
                var randomCar = Math.floor(Math.random() * 8);

                if (car == 0) {
                    this._cars[car] = new objects.Cars(this._carsCollection[randomCar]);
                }
                if (car == 1) {
                    this._cars[car] = new objects.Cars(this._carsCollection[randomCar]);
                }
                if (car == 2) {
                    this._cars[car] = new objects.Cars(this._carsCollection[randomCar]);
                }
                this.addChild(this._cars[car]);
            }

            // add player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            // add Score Label to the scene
            this._scoreLabel = new objects.Label("Score: ", "40px Consolas", "#FFFF00", 5, 5, false);
            this.addChild(this._scoreLabel);

            // add Lives Label to the scene
            this._livesLabel = new objects.Label("Lives: ", "40px Consolas", "#FFFF00", 350, 5, false);
            this.addChild(this._livesLabel);

            // add collision manager to the scene
            this._collision = new managers.Collision(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._road.update();
            this._battery.update();
            this._player.update();

            this._cars.forEach(car => {
                car.update();
                this._collision.check(car);
            });

            this._collision.check(this._battery);
            this._updateScore();

            // check if life becomes 0
            if (scoreboard.getLives() < 1) {
                scene = config.Scene.END;
                changeScene();
            }
        }
        
        // update score in the scene
        private _updateScore(): void {
            this._scoreLabel.text = "Score: " + scoreboard.getScore();
            this._livesLabel.text = "Lives: " + scoreboard.getLives();
        }

        //EVENT HANDLERS ++++++++++++++++++++
    }
}