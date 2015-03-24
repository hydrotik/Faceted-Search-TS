///<reference path="Model.ts"/>
///<reference path="../def/jquery.d.ts" />

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



              var item_template = 
               '<div class="item">' +
                 '<img src="<%= obj.imageURL %>">' +
                 '<h4><%= obj.lastname %>, <%= obj.firstname %></h4>' + 
                 '<p class="tags">' + 
                 '<% if (obj.category) {  %><%= obj.category %><% } %>' +
                 '<% if (obj.continent) {  %>, <%= obj.continent %><% } %>' +
                 '<% if (obj.language) {  %>, <%= obj.language %><% } %>' +
                 '</p>' +
                 '<p class="desc"><%= obj.description %></p>' +
               '</div>';
            var settings = { 
              items            : this.model,
              facets           : { 
                                  'category'     : 'What Category',
                                  'continent'    : 'Which Continent',
                                  'language'     : 'Programming Language'
              },  
              resultSelector   : '#results',
              facetSelector    : '#facets',
              resultTemplate   : item_template,
              paginationCount  : 50,
              orderByOptions   : {'firstname': 'First name', 'lastname': 'Last name', 'category': 'Category', 'RANDOM': 'Random'},
              facetSortOption  : {'continent': ['North America', 'South America']}
            }   

            // use them!
            $.facetelize(settings);

        }
    }
}
