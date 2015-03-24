module com.hydrotik.events {	

	export class Event {

		public static COMPLETE:string = 'complete';
		public static OPEN:string = 'open';
		public static ERROR:string = 'error';
		public static CHANGE:string = 'change';

		public type:string = undefined;

		public target:any = undefined;

		constructor(type:string){
			this.type = type;
		}

		public clone():Event{
			return new Event(this.type);
		}
	}
}
