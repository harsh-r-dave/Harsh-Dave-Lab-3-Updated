/*
    Source File: COMP397-W2016-MailPilotDemo-master/ play.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 18, 2016
    Date Last  Modified: Mar 18, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Play scene where gameplay takes action.
    Revision History: added road image
                      added battery object
*/

// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _road: objects.Road;
        private _battery: objects.Battery;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //add road  to scene
            this._road = new objects.Road();
            this.addChild(this._road);

            //add island to scene
            this._battery = new objects.Battery();
            this.addChild(this._battery);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._road.update();
            this._battery.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}