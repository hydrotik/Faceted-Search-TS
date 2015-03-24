module com.hydrotik.events {	

	export class Event {

		public static COMPLETE:string = 'complete';
		public static OPEN:string = 'open';
		public static ERROR:string = "error";
		public static CHANGE:string = "change";

		/**
		 * Type of event
		 * @property type
		 * @type String
		 */
		public type:string = undefined;

		/**
		 * Reference to target object
		 * @property target
		 * @type Object
		 */
		public target:any = undefined;

		constructor(type:string){
			this.type = type;
		}

		public clone():Event{
			return new Event(this.type);
		}
	}
}