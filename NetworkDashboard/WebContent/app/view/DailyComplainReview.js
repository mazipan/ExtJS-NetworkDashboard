var DailyComplainReview_ChartObj = null;

Ext.define('NETWORKDASHBOARD.view.DailyComplainReview.' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.dailyComplainReview',
    
	title : '<font style="font-size: 8pt; color:#dadae0;">DAILY COMPLAIN REVIEW</font>',
    
    header : {
          height : 30 / 768 * screen.height,
          style : {
			  "background": "#000000",
              "box-shadow" : "#000000 0 0 0 0 inset;",
              "border-width" : "0px",
              //"border-left" : '5px solid #b0b0b0',
              "border-right" : '5px solid #b0b0b0',
              "border-top-right-radius" : '10px',
              "border-top-left-radius" : '10px',
            }
        },
   
   bodyStyle: 'background-color: #121212; border-width: 0px; border-right : 5px solid #b0b0b0; border-bottom : 5px solid #b0b0b0; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; ',	
		 
   layout : 'border',
   
   items : [{
	   xtype : 'container',
	   id : 'dailyComplainReview', 
	   style: 'background-color: #121212; border-width: 0px;',	
	   region : 'center',
	   listeners:{
           resize: function(thisPanel, width, height, oldWidth, oldHeight, eOpts ){
           	if(DailyComplainReview_ChartObj != null){
           		DailyComplainReview_ChartObj.resizeTo(width, height);
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
           if (FusionCharts("DailyComplainReview_Chart"))
             FusionCharts("DailyComplainReview_Chart").dispose();
           	
           DailyComplainReview_ChartObj = new FusionCharts("../Ext-4/Charts/MSCombiDY2D.swf", "DailyComplainReview_Chart", Ext.getCmp('dailyComplainReview').getWidth(), Ext.getCmp('dailyComplainReview').getHeight(), "0", "1", "#121212");
           DailyComplainReview_ChartObj.setJSONUrl("./data/DailyComplainReview.json");
           DailyComplainReview_ChartObj.render("dailyComplainReview");           
	   }
   },
   
    initComponent: function() {
    	
        this.callParent(arguments);
    }
});



