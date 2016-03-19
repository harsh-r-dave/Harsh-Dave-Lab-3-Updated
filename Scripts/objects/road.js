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
        // CONSTRUCTOR ++++++++++++++++++++++++
        function Road() {
            _super.call(this, assets.getResult("Road"));
            this._speed = 5;
            this._reset();
        }
        // PUBLIC METHODS
        Road.prototype.update = function () {
            this.x += this._speed; //left to right
            //this.x -= this._speed;       // right to left
            this._checkBounds();
        };
        //PRIVATE METHODS
        // reset the road to make it look continues
        Road.prototype._reset = function () {
            this.x = -260; // left to right
            //this.x = 0;       // right to left
        };
        // check boundaries of road
        Road.prototype._checkBounds = function () {
            if (this.x >= 0) {
                this._reset();
            }
            /*if(this.x <= -260)      // right to left
            {
                this._reset();
            }*/
        };
        return Road;
    })(createjs.Bitmap);
    objects.Road = Road;
})(objects || (objects = {}));
//# sourceMappingURL=road.js.map