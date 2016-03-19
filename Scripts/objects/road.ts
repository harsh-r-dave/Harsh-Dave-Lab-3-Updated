module objects {
	//ROAD CLASS
	export class Road extends createjs.Bitmap {
		//PRIVATE INSTANCE VARIABLES
		private _speed: number;
		
		// CONSTRUCTOR ++++++++++++++++++++++++
		constructor() {
			super(assets.getResult("Road"));
			
			this._speed = 5;
			this._reset();
		}
		
        
		// PUBLIC METHODS
		public update():void {
			this.x += this._speed;      //left to right
            //this.x -= this._speed;       // right to left
			this._checkBounds();
		}
		
		//PRIVATE METHODS
        
        // reset the road to make it look continues
		private _reset():void {
			this.x = -260;      // left to right
            //this.x = 0;       // right to left
		}
		
		// check boundaries of road
        private _checkBounds():void {
		    if(this.x >= 0) {       // left to right
				this._reset();
			}
            /*if(this.x <= -260)      // right to left
            {
                this._reset();
            }*/
		}
	}
}