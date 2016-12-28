var SecurityDashboard_ChartObj = null;

Ext.define('NETWORKDASHBOARD.view.SecurityDashboard' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.securityDashboard',
    
	title : '<font style="font-size: 8pt; color:#dadae0;">SECURITY DASHBOARD</font>',
    
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
	   id : 'securityDashboard', 
	   style: 'background-color: #121212; border-width: 0px; ',	
	   region : 'center',
	   listeners:{
           resize: function(thisPanel, width, height, oldWidth, oldHeight, eOpts ){
           	if(SecurityDashboard_ChartObj != null){
           		SecurityDashboard_ChartObj.resizeTo(width, height);
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
           if (FusionCharts("SecurityDashboard_Chart"))
             FusionCharts("SecurityDashboard_Chart").dispose();
           	
           SecurityDashboard_ChartObj = new FusionCharts("../Ext-4/Charts/MSCombi2D.swf", "SecurityDashboard_Chart", Ext.getCmp('securityDashboard').getWidth(), Ext.getCmp('securityDashboard').getHeight(), "0", "1", "#121212");
           SecurityDashboard_ChartObj.setJSONUrl("./data/SecurityDashboard.json");
           SecurityDashboard_ChartObj.render("securityDashboard");           
	   }
   },
   
    initComponent: function() {
    	
        this.callParent(arguments);
    }
});



