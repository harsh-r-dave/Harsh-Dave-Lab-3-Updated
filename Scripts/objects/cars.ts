module objects {
    // CARS CLASS ++++++++++++++++++++++++++++++++++++
    export class Cars extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(carModel: string) {
            super(carModel);

            this._reset(this._leftBounds);
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the cars met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        }

        // reset the cloud offscreen
        protected _reset(value: number): void {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;

            if (this.y > 0 && this.y <= 120) {
                this.y = 16;
            }
            else if (this.y > 120 && this.y <= 230) {
                this.y = 132;
            }
            else if (this.y > 230 && this.y <= 360) {
                this.y = 260;
            }
            else if (this.y > 360) {
                this.y = 372;
            }
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}