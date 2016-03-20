module objects {
    // CARS CLASS ++++++++++++++++++++++++++++++++++++
    export class Cars extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        private _laneOne: number;
        private _laneTwo: number;
        private _laneThree: number;
        private _laneFour: number;
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(carModel: string) {
            super(carModel);
            this._laneOne = 16;
            this._laneTwo = 132;
            this._laneThree = 260;
            this._laneFour = 372;
            this._reset(this._leftBounds);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the cars met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        }

        // reset the cars offscreen
        protected _reset(value: number): void {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;

            // keep the cars in a specific lane
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
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}