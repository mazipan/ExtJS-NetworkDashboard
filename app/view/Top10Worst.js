Ext.define('NETWORKDASHBOARD.view.Top10Worst' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.top10Worst',
    
	title : '<font style="font-size: 8pt; color:#dadae0;">TOP 10 WORST PERFORMANCE AVAILIBILITY</font>',
    
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
	  xtype : 'gridpanel',
	  store : 'Top10WorstStore',
	  region : 'center',
	  emptyText: 'No records to show',
	  autoScroll: true,
	  bodyStyle: 'background-color: #333333',
	  viewConfig: {
		    stripeRows: false
	  },
	  columns: [ 
		  	    { text: '<font style="font-size: 10px; color: white;">Region</font>', dataIndex: 'region', flex :1, baseCls:'custom-header-grid', tdCls: 'greyRowGrid'},
		  	    { text: '<font style="font-size: 10px; color: white;">Cluster</font>', dataIndex: 'cluster', flex :1, baseCls:'custom-header-grid', tdCls: 'greyRowGrid'},
		  	    { text: '<font style="font-size: 10px; color: white;">Mitra</font>', dataIndex: 'mitra', flex :1, baseCls:'custom-header-grid', tdCls: 'greyRowGrid'},
		  	    { text: '<font style="font-size: 10px; color: white;">Availibility</font>', dataIndex: 'avail', flex :1, baseCls:'custom-header-grid', tdCls: 'greyRowGrid'}
		  	],
   }],
   
   initComponent: function() {
    	
	   this.callParent(arguments);
   }
});



