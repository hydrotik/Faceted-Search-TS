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

          var that = this;

          // first apply the filters to the items
          this.settings.currentResults = _.select(this.settings.items, function(item) {
            var filtersApply = true;
            _.each(that.settings.state.filters, function(filter:any, facet) {
              if ($.isArray(item[facet])) {
                 var inters:any = _.intersection(item[facet], filter);
                 if (inters.length === 0) {
                   filtersApply = false;
                 }
              } else {
                if (filter.length && _.indexOf(filter, item[facet]) === -1) {
                  filtersApply = false;
                }
              }
            });
            return filtersApply;
          });
          // Update the count for each facet and item:
          // intialize the count to be zero
          this.resetFacetCount();
          // then reduce the items to get the current count for each facet
          _.each(this.settings.facets, function(facettitle, facet) {
            _.each(that.settings.currentResults, function(item) {
              if ($.isArray(item[facet])) {
                _.each(item[facet], function(facetitem:string) {
                  that.settings.facetStore[facet][facetitem].count += 1;
                });
              } else {
                if (item[facet] !== undefined) {
                  that.settings.facetStore[facet][item[facet]].count += 1;
                }
              }
            });
          });
          // remove confusing 0 from facets where a filter has been set
          _.each(this.settings.state.filters, function(filters, facettitle) {
            _.each(that.settings.facetStore[facettitle], function(facet:any) {
              if (facet['count'] === 0 && that.settings.state.filters[facettitle].length){
                facet['count'] = '+';
              }
            });
          });
          this.settings.state.shownResults = 0;
        }

        private order(): void {
          console.log('order');

          var that = this;

          if (this.settings.state.orderBy) {
            $('.activeorderby').removeClass('activeorderby');
            $('#orderby_'+this.settings.state.orderBy).addClass('activeorderby');
            this.settings.currentResults = _.sortBy(this.settings.currentResults, function(item) {
              if (that.settings.state.orderBy === 'RANDOM') {
                return Math.random()*10000;
              } else {
                return item[that.settings.state.orderBy];
              }
            });
          }
        }

        private toggleFilter(key, value): void {
          console.log('toggleFilter');

          this.settings.state.filters[key] = this.settings.state.filters[key] || [] ;
          if (_.indexOf(this.settings.state.filters[key], value) === -1) {
            this.settings.state.filters[key].push(value);
          } else {
            this.settings.state.filters[key] = _.without(this.settings.state.filters[key], value);
            if (this.settings.state.filters[key].length === 0) {
              delete this.settings.state.filters[key];
            }
          }
          this.filter();
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
