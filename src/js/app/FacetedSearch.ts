///<reference path="../def/jquery.d.ts" />
///<reference path="../def/lodash.d.ts" />

module app {

    export class FacetedSearch {

        private settings:any;

        private defaults:any;

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

            




            this.settings = {
              facetStore : {},
              currentResults : []
            }; 


            _.assign(this.settings, this.defaults, usersettings);

            console.log(this.settings);

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

          var that = this;

          _.each(this.settings.facets, function(facettitle, facet) {
            that.settings.facetStore[facet] = {};
          });
          _.each(this.settings.items, function(item) {
           // intialize the count to be zero
            _.each(that.settings.facets, function(facettitle, facet) {
              if ($.isArray(item[facet])) {
                _.each(item[facet], function(facetitem:string) {
                  that.settings.facetStore[facet][facetitem] = that.settings.facetStore[facet][facetitem] || {count: 0, id: _.uniqueId('facet_')}
                });
              } else {
                if (item[facet] !== undefined) {
                  that.settings.facetStore[facet][item[facet]] = that.settings.facetStore[facet][item[facet]] || {count: 0, id: _.uniqueId('facet_')}
                }
              }
            });
          });
          // sort it:
          _.each(this.settings.facetStore, function(facet, facettitle) {
            var sorted = _.keys(that.settings.facetStore[facettitle]).sort();
            if (that.settings.facetSortOption && that.settings.facetSortOption[facettitle]) {
              sorted = _.union(that.settings.facetSortOption[facettitle], sorted);
            }
            var sortedstore:any = {};
            _.each(sorted, function(el) {
              sortedstore[el] = that.settings.facetStore[facettitle][el];
            });
            that.settings.facetStore[facettitle] = sortedstore;
          });
        }

        private resetFacetCount(): void {
          console.log('resetFacetCount');
          var that = this;

          _.each(this.settings.facetStore, function(items, facetname) {
            _.each(items, function(value, itemname) {
              that.settings.facetStore[facetname][itemname].count = 0;
            });
          });
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
