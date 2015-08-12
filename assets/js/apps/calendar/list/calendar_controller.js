/**
 * Created by Mayur on 09/08/2015.
 */
define(["app","apps/calendar/list/calendar_view","apps/calendar/list/calendar_model"],function(CalendarApp,view,model){
    CalendarApp.module("Calendar.Normal", function(Normal, CalendarApp, Backbone, Marionette, $, _){
        Normal.Controller = {
            showCalendar: function () {
                console.log("Inside Show Calendar Controller");
                var calendarModel = new model();
                calendarModel.fetch({ url: "assets/js/apps/calendar/list/sample-data.json",
                     reset: true,
                success:function(){
                    var calendarView = new view({model: calendarModel});
                },
                failure:function(){
                    console.log('Fetch failed');
                }});


            }
        }
        ;



    });
    return CalendarApp.Calendar.Normal.Controller;
});