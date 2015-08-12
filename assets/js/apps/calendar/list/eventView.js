/**
 * Created by Mayur on 09/08/2015.
 */
define(["app","tpl!../list/event_template.html","scheduler","jquery-ui","syphon"],
    function(CalendarApp,calendarTemplate) {
        CalendarApp.module("Calendar.List.EventView", function (View, CalendarApp, Backbone, Marionette, $, _) {
            View.Layout = Marionette.LayoutView.extend({
                template:calendarTemplate,
                id:'event',
                events:{
                },
                initialize: function (options) {
                    console.log("Inside Calendar");
                    this.model = options.model;
                },
                render: function () {
                    this.$el.html(this.template({model:this.model}));
                     return this.$el;
                }

            });

        });
        return CalendarApp.Calendar.List.EventView.Layout;
    });