
Ext.define('NETWORKDASHBOARD.controller.AppController', {
    extend: 'Ext.app.Controller',
  
    stores: [
             'AreaLoadStore',
             'Top10WorstStore'
             ],
  views: [
             'MainView',
             'CenterView',
             'UpView',
             'DailyComplainReview',
             'SecurityDashboard',
             'AreaLoad',
             'IncidentAlarmStatus',
             'Top10Worst',
             'NationalAvailibility',
             'NationalCS',
             'NationalPS',
             'MapView'
             
         ],
         
         
         
    init: function() {
        this.control({
        	
        });
    }
});
