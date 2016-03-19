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

// INSTRUCTIONS SCENE
module scenes {
    export class Instructions extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _instructionsImage: createjs.Bitmap;
        private __gotItButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Add Instructions image to the scene
            this._instructionsImage =  new createjs.Bitmap(assets.getResult("Instructions"));
            this.addChild(this._instructionsImage);            
            
            // add the Got It button to the INSTRUCTIONS scene
            this.__gotItButton = new objects.Button(
                "GotIt",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this.__gotItButton);
            
            // Got It Button event listener
            this.__gotItButton.on("click", this._gotItButtonClick, this);
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // GOT IT Button click event handler
        private _gotItButtonClick(event: createjs.MouseEvent) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        }
     }
}