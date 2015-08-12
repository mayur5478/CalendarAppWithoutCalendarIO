
define(["app"],function(CalendarApp){
    CalendarApp.module("Calendar.Normal", function(Normal, CalendarApp, Backbone, Marionette, $, _){
        Normal.Model = Backbone.Model.extend({
            defaults:{
                "startTime": "",
                "endTime": "",
                "title": ""
            }
        });
        Normal.Collection = Backbone.Collection.extend({

           model:Normal.Model,
            initialize:function(){
                this.id = {};
            }

        });
    });
    return CalendarApp.Calendar.Normal.Collection;
});
