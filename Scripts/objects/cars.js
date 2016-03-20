var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CARS CLASS ++++++++++++++++++++++++++++++++++++
    var Cars = (function (_super) {
        __extends(Cars, _super);
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Cars(carModel) {
            _super.call(this, carModel);
            this._laneOne = 16;
            this._laneTwo = 132;
            this._laneThree = 260;
            this._laneFour = 372;
            this._reset(this._leftBounds);
            this.name = "cars";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Cars.prototype._checkBounds = function (value) {
            // check to see if the cars met the reset criteria
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the cars offscreen
        Cars.prototype._reset = function (value) {
            this.visible = true;
            this._speed.x = Math.floor(Math.random() * 5) + 6;
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
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Cars.prototype.update = function () {
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return Cars;
    })(objects.GameObject);
    objects.Cars = Cars;
})(objects || (objects = {}));
//# sourceMappingURL=cars.js.map