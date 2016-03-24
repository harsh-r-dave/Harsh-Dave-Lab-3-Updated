module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        //PRIVATE INSTANCE VARIABLES
        private _topBounds: number;
        private _bottomBounds: number;
        private _engine: createjs.AbstractSoundInstance;

        private _laneOne: number;
        private _laneTwo: number;
        private _laneThree: number;
        private _laneFour: number;

        //PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;

        constructor() {
            super(assets.getResult("Bike"));

            this._laneOne = 58;
            this._laneTwo = 174;
            this._laneThree = 302;
            this._laneFour = 414;

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.x = 555;
            
            this._engine = createjs.Sound.play("BikeEngine", 0, 0, 0, -1, 1, 0);
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }

            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        }


        // PUBLIC METHODS
        public update(): void {
            this.y = stage.mouseY;

            // keep player in a specific lane
            if (this.y > 0 && this.y <= 120) {
                this.y = this._laneOne;
            }
            else if (this.y > 120 && this.y <= 230) {
                this.y = this._laneTwo;
            }
            else if (this.y > 230 && this.y <= 360) {
                this.y = this._laneThree;
            }
            else if (this.y > 360) {
                this.y = this._laneFour;
            }

            this._checkBounds();
        }        
        
        // method to stop the engine sound
        public engineOff(): void {
            this._engine.stop();
        }
    }
}