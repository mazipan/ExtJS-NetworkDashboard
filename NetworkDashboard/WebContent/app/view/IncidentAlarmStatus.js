var IncidentAlarm_ChartObj = null;

Ext.define('NETWORKDASHBOARD.view.IncidentAlarmStatus' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.incidentAlarmStatus',
    
	title : '<font style="font-size: 8pt; color:#dadae0;">INCIDENT ALARM STATUS</font>',
    
    header : {
          height : 30 / 768 * screen.height,
          style : {
              "cursor" : "pointer",
			  "background": "#000000",
              "box-shadow" : "#000000 0 0 0 0 inset;",
              "border-width" : "0px",
              "border-top" : '5px solid #b0b0b0',
              "border-right" : '5px solid #b0b0b0',
              "border-top-right-radius" : '10px',
              "border-top-left-radius" : '10px',
              "overflow" : "hidden",
              "white-space" : "nowrap",
              "text-overflow" : "ellipsis"
            }
        },
   
   bodyStyle: 'background-color: #121212; border-width: 0px; border-right : 5px solid #b0b0b0; border-bottom : 5px solid #b0b0b0; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; ',	

   layout : 'border',
   
   items : [{
	   xtype : 'container',
	   id : 'incidentAlarmStatus', 
	   style: 'background-color: #121212; border-width: 0px;',	
	   region : 'center',
	   listeners:{
           resize: function(thisPanel, width, height, oldWidth, oldHeight, eOpts ){
           	if(IncidentAlarm_ChartObj != null){
           		IncidentAlarm_ChartObj.resizeTo(width, height);
           	}                	
           }
	   }
   },{
	   xtype : 'container',
	   region : 'south',
	   height : 10, 
	   style: 'background-color: #121212; border-width: 0px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; ',	
   }],
   
   listeners:{
	   boxready: function(){
           if (FusionCharts("IncidentAlarm_Chart"))
             FusionCharts("IncidentAlarm_Chart").dispose();
           	
           IncidentAlarm_ChartObj = new FusionCharts("../Ext-4/Charts/MSColumn2D.swf", "IncidentAlarm_Chart", Ext.getCmp('incidentAlarmStatus').getWidth(), Ext.getCmp('incidentAlarmStatus').getHeight(), "0", "1", "#121212");
           IncidentAlarm_ChartObj.setJSONUrl("./data/AlarmStatus.json");
           IncidentAlarm_ChartObj.render("incidentAlarmStatus");           
	   }
   },
	
    initComponent: function() {
    	
        this.callParent(arguments);
    }
});



