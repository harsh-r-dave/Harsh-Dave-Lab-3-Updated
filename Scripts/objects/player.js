var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, assets.getResult("Bike"));
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
        }
        // PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        };
        // PUBLIC METHODS
        Player.prototype.update = function () {
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
        };
        return Player;
    })(createjs.Bitmap);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map