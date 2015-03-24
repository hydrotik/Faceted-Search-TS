///<reference path='Event.ts' />

module com.hydrotik.events {


	import Event = com.hydrotik.events.Event;

	export class EventDispatcher {

		private listeners:Array<Array<Function>> = new Array<Array<Function>>();
		private target:any;

		constructor(target:any = null){
			this.target = target || this;
		}


		public addEventListener(type:string, listener:Function){
			if (this.listeners[ type ] === undefined){
				this.listeners[ type ] = new Array<Function>();
			}

			if (this.getEventListenerIndex(type, listener) === -1){
				this.listeners[ type ].push(listener);
			}
		}

		public removeEventListener(type:string, listener:Function){
			var index:number = this.getEventListenerIndex(type, listener);

			if (index !== -1){
				this.listeners[ type ].splice(index, 1);
			}
		}

		public dispatchEvent(event:Event){
			var listenerArray:Array<Function> = this.listeners[ event.type ];

			if (listenerArray !== undefined) {
				var l:number = listenerArray.length;

				event.target = this.target;

				for (var i:number = 0; i < l; i++){
					listenerArray[i](event);
				}
			}
		}

		private getEventListenerIndex(type:string, listener:Function):number{
			if (this.listeners[ type ] !== undefined) {
				var a:Array<Function> = this.listeners[ type ];
				var l:number = a.length;

				for (var i:number = 0; i < l; i++){
					if (listener === a[i]){
						return i;
					}
				}
			}

			return -1;
		}

		public hasEventListener(type:string, listener?:Function):boolean{
			if (listener != null) {
				return ( this.getEventListenerIndex(type, listener) !== -1 );
			} else {
				if (this.listeners[ type ] !== undefined){
					return ( this.listeners[ type ].length > 0 );
				}

				return false;
			}

			return false;
		}

		
	}
}
