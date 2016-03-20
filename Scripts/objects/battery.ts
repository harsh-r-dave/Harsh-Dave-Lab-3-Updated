module objects {
    // BATTERY CLASS ++++++++++++++++++++++++++++++++++++
    export class Battery extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("Battery");

            this._speed.x = 5; //battery speed
            this._reset(this._leftBounds);
            this.name = "battery";
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check if the battery met reset criteria        
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        }

        // reset the battery offscreen
        protected _reset(value: number): void {
            this.visible= true;
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the battery 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}