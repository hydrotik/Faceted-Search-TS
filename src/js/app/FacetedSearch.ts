///<reference path="../def/jquery.d.ts" />
///<reference path="../def/lodash.d.ts" />

module app {

    export class FacetedSearch {

        private settings:Object;

        private defaults:Object;

        private moreButton:Object;

        /**
        *   Application Facade
        *   
        *   @param {Object} search settings
        */
        constructor(usersettings: Object) {

            this.log('Initializing FacetedSearch');

            this.defaults = {
              items              : [{a:2,b:1,c:2},{a:2,b:2,c:1},{a:1,b:1,c:1},{a:3,b:3,c:1}],
              facets             : {'a': 'Title A', 'b': 'Title B', 'c': 'Title C'},
              resultSelector     : '#results',
              facetSelector      : '#facets',
              facetContainer     : '<div class=facetsearch id=<%= id %> ></div>',
              facetTitleTemplate : '<h3 class=facettitle><%= title %></h3>',
              facetListContainer : '<div class=facetlist></div>',
              listItemTemplate   : '<div class=facetitem id="<%= id %>"><%= name %> <span class=facetitemcount>(<%= count %>)</span></div>',
              bottomContainer    : '<div class=bottomline></div>',
              orderByTemplate    : '<div class=orderby><span class="orderby-title">Sort by: </span><ul><% _.each(options, function(value, key) { %>'+
                                   '<li class=orderbyitem id=orderby_<%= key %>>'+
                                   '<%= value %> </li> <% }); %></ul></div>',
              countTemplate      : '<div class=facettotalcount><%= count %> Results</div>',
              deselectTemplate   : '<div class=deselectstartover>Deselect all filters</div>',
              resultTemplate     : '<div class=facetresultbox><%= name %></div>',
              noResults          : '<div class=results>Sorry, but no items match these criteria</div>',
              orderByOptions     : {'a': 'by A', 'b': 'by B', 'RANDOM': 'by random'},
              state              : {
                                     orderBy : false,
                                     filters : {}
                                   },
              showMoreTemplate   : '<a id=showmorebutton>Show more</a>',
              enablePagination   : true,
              paginationCount    : 20
            }

            $.extend(this.settings, this.defaults, usersettings);


            this.settings = {
              facetStore : <Object> null,
              currentResults : new Array<any>()
            };

            this.settings.facetStore = {};
            this.settings.currentResults = [];


            $(this.settings.facetSelector).data('settings', this.settings);
            this.initFacetCount();
            this.filter();
            this.order();
            this.createFacetUI();
            this.updateResults();
        }

        private log(message: string): void {
            console.log(message);
        }

        facetUpdate():void{
          console.log('facetUpdate');
        }

        private initFacetCount(): void {
          console.log('initFacetCount');
        }

        private resetFacetCount(): void {
          console.log('resetFacetCount');
        }

        private filter(): void {
          console.log('filter');
        }

        private order(): void {
          console.log('order');
        }

        private toggleFilter(): void {
          console.log('toggleFilter');
        }

        private createFacetUI(): void {
          console.log('createFacetUI');
        }

        private getFilterById(): void {
          console.log('getFilterById');
        }

        private updateFacetUI(): void {
          console.log('updateFacetUI');
        }

        private updateResults(): void {
          console.log('updateResults');
        }

        private showMoreResults(): void {
          console.log('showMoreResults');
        }


    }
}
