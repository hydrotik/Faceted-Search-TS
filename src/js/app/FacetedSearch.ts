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

          var that = this;

          var itemtemplate  = _.template(this.settings.listItemTemplate);
          var titletemplate = _.template(this.settings.facetTitleTemplate);
          var containertemplate = _.template(this.settings.facetContainer);
          
          $(this.settings.facetSelector).html('');
          _.each(this.settings.facets, function(facettitle, facet) {
            var facetHtml     = $(containertemplate({id: facet}));
            var facetItem     = {title: facettitle};
            var facetItemHtml = $(titletemplate(facetItem));

            facetHtml.append(facetItemHtml);
            var facetlist = $(that.settings.facetListContainer);
            _.each(that.settings.facetStore[facet], function(filter:any, filtername){
              var item:any = {id: filter.id, name: filtername, count: filter.count};
              var filteritem  = $(itemtemplate(item));
              if (_.indexOf(that.settings.state.filters[facet], filtername) >= 0) {
                filteritem.addClass('activefacet');
              }
              facetlist.append(filteritem);
            });
            facetHtml.append(facetlist);
            $(that.settings.facetSelector).append(facetHtml);
          });
          // add the click event handler to each facet item:
          $('.facetitem').click(function(event){
            var filter = that.getFilterById(this.id);
            that.toggleFilter(filter.facetname, filter.filtername);
            $(that.settings.facetSelector).trigger('facetedsearchfacetclick', filter);
            that.order();
            that.updateFacetUI();
            that.updateResults();
          });
          // Append total result count
          var bottom = $(this.settings.bottomContainer);
          console.warn('facetedsearch line 242: ' + this.settings.currentResults.length);
          //countHtml = _.template(settings.countTemplate, {count: settings.currentResults.length});
          //$(bottom).append(countHtml);
          // generate the "order by" options:
          var ordertemplate = _.template(this.settings.orderByTemplate);
          var itemHtml = $(ordertemplate({'options': this.settings.orderByOptions}));
          $(bottom).append(itemHtml);
          $(this.settings.facetSelector).append(bottom);
          $('.orderbyitem').each(function(){
            var id = this.id.substr(8);
            if (that.settings.state.orderBy === id) {
              $(this).addClass('activeorderby');
            }
          });
          // add the click event handler to each "order by" item:
          $('.orderbyitem').click(function(event){
            var id = this.id.substr(8);
            that.settings.state.orderBy = id;
            $(that.settings.facetSelector).trigger('facetedsearchorderby', id);
            that.settings.state.shownResults = 0;
            that.order();
            that.updateResults();
          });
          // Append deselect filters button
          var deselect = $(this.settings.deselectTemplate).click(function(event){
            that.settings.state.filters = {};
            that.facetUpdate();
          });
          $(bottom).append(deselect);
          $(this.settings.facetSelector).trigger('facetuicreated');
        }

        private getFilterById(id:string): any {
          console.log('getFilterById');

          var that = this;

          var result:any = false;
          _.each(this.settings.facetStore, function(facet, facetname) {
            _.each(facet, function(filter:any, filtername){
              if (filter.id === id) {
                result =  {'facetname': facetname, 'filtername': filtername};
              }
            });
          });
          return result;
        }

        private updateFacetUI(): void {
          console.log('updateFacetUI');

          var that = this;

          var itemtemplate = _.template(this.settings.listItemTemplate);
          _.each(this.settings.facetStore, function(facet, facetname) {
            _.each(facet, function(filter:any, filtername){
              var item:any = {id: filter.id, name: filtername, count: filter.count};
              var filteritem  = $(itemtemplate(item)).html();
              $('#'+filter.id).html(filteritem);
              if (that.settings.state.filters[facetname] && _.indexOf(that.settings.state.filters[facetname], filtername) >= 0) {
                $('#'+filter.id).addClass('activefacet');
              } else {
                $('#'+filter.id).removeClass('activefacet');
              }
            });
          });
          console.warn('facetedsearch line 307: ' + this.settings.currentResults.length);
          //countHtml = _.template(settings.countTemplate, {count: settings.currentResults.length});
          //$(settings.facetSelector + ' .facettotalcount').replaceWith(countHtml);
        }

        private updateResults(): void {
          console.log('updateResults');
        }

        private showMoreResults(): void {
          console.log('showMoreResults');
        }


    }
}
