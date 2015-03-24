///<reference path="Model.ts"/>


module app {

    import Model = app.Model;

    export class App {

        private view: HTMLElement;

        private model:Array<Object>;
        /**
        *   Application Facade
        *   
        *   @param {HTMLElement} view target container
        */
        constructor(view: HTMLElement) {
            this.view = view;

            this.model = new Model().getItems();

            this.log('Initializing Application from ' + this.view);
        }

        private log(message: string): void {
            console.log(message);
        }

        initializeApplication(message:string): void {
            this.log(message);

            console.log(this.model);
        }
    }
}
