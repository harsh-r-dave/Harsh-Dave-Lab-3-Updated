var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // BATTERY CLASS ++++++++++++++++++++++++++++++++++++
    var Battery = (function (_super) {
        __extends(Battery, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Battery() {
            _super.call(this, "Battery");
            this._speed.x = 5; //battery speed
            this._reset(this._leftBounds);
            this.name = "battery";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Battery.prototype._checkBounds = function (value) {
            // check if the battery met reset criteria        
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the battery offscreen
        Battery.prototype._reset = function (value) {
            this.visible = true;
            this.y = Math.floor(Math.random() * this._bottomBounds);
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Battery.prototype.update = function () {
            // scroll the battery 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return Battery;
    })(objects.GameObject);
    objects.Battery = Battery;
})(objects || (objects = {}));
//# sourceMappingURL=battery.js.map