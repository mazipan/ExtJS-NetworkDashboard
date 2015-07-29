Ext.define('NETWORKDASHBOARD.view.MainView' ,{
    extend: 'Ext.container.Container',
    alias: 'widget.mainView',
    
    layout : 'border',
    
	items : [{
		xtype : 'container',
		region : 'north',
		height : 30,
		style: 'background-color: black',
		
		layout: {
		    type: 'vbox',
		    align : 'stretch',
		    pack  : 'center',
		},
		
		items : [{
			xtype : 'label',
			text : 'NETWORK DASHBOARD',
			style : 'color: #dadae0; font-weight: bold; font-size: 16px; padding-left: 10px;'
		}]
	},{
		xtype : 'container',
		region : 'center',
	    layout : 'border',
	    
	    items : [{
	    	xtype : 'upView',
			region : 'north',
			height : 250,	
	    },{
	    	xtype : 'centerView',
			region : 'center'    	
	    }]
	}],
	
    initComponent: function() {
    	
        this.callParent(arguments);
    }
});



