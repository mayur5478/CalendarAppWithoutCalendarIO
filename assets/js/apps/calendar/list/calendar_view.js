define(["app","apps/calendar/list/eventView","tpl!../list/calendar_template.html","scheduler","jquery-ui","syphon"],
    function(CalendarApp,EventView,calendarTemplate) {
        CalendarApp.module("Calendar.List.View", function (View, CalendarApp, Backbone, Marionette, $, _) {
            View.Layout = Marionette.LayoutView.extend({
                el:'#calendar',
                template:calendarTemplate,
                events:{
                    'click button#today':'handleClickOnToday',
                    'click button#next':'handleNextClick',
                    'click button#previous':'handlePreviousClick'
                },
                initialize: function (options) {
                    console.log("Inside Calendar");
                    this.model = options.model;
                    this.handleClickOnToday();
                },
                render: function () {
                    this.$el.html(this.template());
                    console.log("Render");
                },
                handleClickOnToday:function(){
                    this.render();
                    var now = new Date();
                    this.$el.find('#currentDate').text(now.toDateString());
                    this.model.id['currentDate'] = now.getDate();
                    this.addEventToView(now);
                },
                handleNextClick:function(){
                    this.render();
                    var currentDate = this.model.id['currentDate'];
                    currentDate  =currentDate + 1;
                    var now = new Date();
                    now.setDate(currentDate);
                    this.$el.find('#currentDate').text(now.toDateString());
                    this.model.id['currentDate'] = now.getDate();
                    this.addEventToView(now);
                },
                handlePreviousClick:function(){
                    this.render();
                    var currentDate = this.model.id['currentDate'];
                    currentDate  =currentDate - 1;
                    var now = new Date();
                    now.setDate(currentDate);
                    this.$el.find('#currentDate').text(now.toDateString());
                    this.model.id['currentDate'] = now.getDate();
                    this.addEventToView(now);
                },
                addEventToView:function(now){
                    for(var index in this.model.models){
                        var newDateStartTime = new Date(this.model.models[index].get('startTime'));
                        if(newDateStartTime.toLocaleDateString()== now.toLocaleDateString()){
                            var eventView = new EventView({model:this.model.models[index]});
                            var newDateEndTime = new Date(this.model.models[index].get('endTime'));
                            var diffMins = this.findDiffInMin(newDateStartTime,newDateEndTime);
                            var selector = this.$el.find('#'+(newDateStartTime.getHours()-1)+'.grey-background');
                            var height = selector.height();
                            selector.append(eventView.render());
                            var noOfParts = (60/newDateStartTime.getMinutes());
                            selector.find('#event').css('marginTop',(height/noOfParts));
                            selector.find('#event').css('height',(diffMins/60)*height);
                        }
                    }
                },
                findDiffInMin:function(start,end){
                    var diffMs = (end - start);
                    return Math.round(((diffMs % 86400000)) / 60000);
                }
            });

        });
        return CalendarApp.Calendar.List.View.Layout;
    });