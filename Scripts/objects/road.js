var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //ROAD CLASS
    var Road = (function (_super) {
        __extends(Road, _super);
        //PRIVATE INSTANCE VARIABLES
        // CONSTRUCTOR ++++++++++++++++++++++++
        function Road() {
            _super.call(this, "Road");
            this._speed.y = 5; // road speed
            this._reset(-260);
        }
        // PUBLIC METHODS
        Road.prototype.update = function () {
            this.x += this._speed.y; //left to right
            //this.x -= this._speed.y;      // right to left
            this._checkBounds(0); // left to right
            //this._checkBounds(-260);        // right to left
        };
        //PRIVATE METHODS
        // reset the road to make it look continues
        Road.prototype._reset = function (value) {
            this.x = value; // left to right -260
            //this.x = 0;       // right to left    0
        };
        // check boundaries of road
        Road.prototype._checkBounds = function (value) {
            if (this.x >= value) {
                this._reset(-260);
            }
            /*if(this.x <= value)      // right to left compare with -260, reset to 0
            {
                this._reset(0);
            }*/
        };
        return Road;
    })(objects.GameObject);
    objects.Road = Road;
})(objects || (objects = {}));
//# sourceMappingURL=road.js.map