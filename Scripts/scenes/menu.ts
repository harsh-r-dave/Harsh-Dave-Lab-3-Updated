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

// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: objects.Road;
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
            this._backgroundImage = new objects.Road();
            this.addChild(this._backgroundImage);          
            
            // add the Let's Drive button to the MENU scene
            this._letsDriveButton = new objects.Button(
                "LetsDrive",
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._letsDriveButton);
            
            // LETS_DRIVE event listener
            this._letsDriveButton.on("click", this._letsDriveButtonClick, this);
            
            // add the Help button to the MENU scene
            this._helpButton = new objects.Button(
                "Help",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._helpButton);
            
            // HELP event listener
            this._helpButton.on("click", this._helpButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // MENU Scene updates here
        public update(): void {
            this._backgroundImage.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LET'S DRIVE Button click event handler
        private _letsDriveButtonClick(event: createjs.MouseEvent) {
            // Switch to the PLAY Scene
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