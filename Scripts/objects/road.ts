module objects {
	//ROAD CLASS
	export class Road extends objects.GameObject {
		//PRIVATE INSTANCE VARIABLES
		
		// CONSTRUCTOR ++++++++++++++++++++++++
		constructor() {
			super("Road");
			
			this._speed.y = 5;      // road speed
			this._reset(-260);
		}
		
        
		// PUBLIC METHODS
		public update():void {
			this.x += this._speed.y;        //left to right
            //this.x -= this._speed.y;      // right to left
			this._checkBounds(0);           // left to right
            //this._checkBounds(-260);        // right to left
		}
		
		//PRIVATE METHODS
        
        // reset the road to make it look continues
		protected _reset(value: number):void {
			this.x = value;      // left to right -260
            //this.x = 0;       // right to left    0
		}
		
		// check boundaries of road
        protected _checkBounds(value: number):void {
		    if(this.x >= value) {       // left to right compare with 0, reset to -260
				this._reset(-260);
			}
            /*if(this.x <= value)      // right to left compare with -260, reset to 0
            {
                this._reset(0);
            }*/
		}
	}
}