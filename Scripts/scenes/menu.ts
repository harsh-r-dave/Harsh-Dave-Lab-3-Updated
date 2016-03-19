/* 
    Source File: COMP397-W2016-MailPilotDemo-master/ menu.ts
    Author's name: Tom Tsiliopoulos, Professor, Centennial College
    Modified by: Harsh Dave, Student, Centennial College
    
    Date First Modified: Mar 18, 2016
    Date Last  Modified: Mar 18, 2016
    Last Modified by: Harsh Dave, student, Centennial College
    
    Program Description: Main menu scene
    Revision History: added image and buttons for menu scene
*/

// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _letsDriveButton: objects.Button;
        private _helpButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Add Background Image
            this._backgroundImage = new createjs.Bitmap(assets.getResult("Road"));
            this.addChild(this._backgroundImage);          
            
            // add the Let's Drive button to the MENU scene
            this._letsDriveButton = new objects.Button(
                "LetsDrive",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._letsDriveButton);
            
            // Start Button event listener
            this._letsDriveButton.on("click", this._letsDriveButtonClick, this);
            
            // add the Help button to the MENU scene
            this._helpButton = new objects.Button(
                "Help",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._helpButton);
            
            // Start Button event listener
            this._helpButton.on("click", this._helpButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LET'S DRIVE Button click event handler
        private _letsDriveButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.PLAY;
            changeScene();
        }
        
        // HELP Button click event handler
        private _helpButtonClick(event: createjs.MouseEvent) {
            // Switch to the INSTRUCTIONS Scene
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        }
    }
}