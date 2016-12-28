Ext.define('NETWORKDASHBOARD.view.CenterView' ,{
    extend: 'Ext.container.Container',
    alias: 'widget.centerView',
    
	layout: {
	    type: 'hbox',
	    pack: 'start',
	    align: 'stretch'
	},

	style: 'background-color: #b0b0b0;',
    
	items : [{
		xtype : 'container',
		flex : 3,
		style: 'background-color: #b0b0b0;',
		
		
		layout: {
		    type: 'vbox',
		    align : 'stretch',
		    pack  : 'start',
		},
		
		items : [{
			xtype : 'mapView',
			flex : 2,
			style: 'background-color: #121212; border-radius: 10px; border-left : 5px solid #b0b0b0; border-right : 5px solid #b0b0b0; border-bottom : 5px solid #b0b0b0;',			
		},{
			xtype : 'container',
			height : 150,
			style: 'background-color: #b0b0b0;',	
			
			layout: {
			    type: 'hbox',
			    pack: 'start',
			    align: 'stretch'
			},
			
			items : [{
				xtype : 'nationalAvailibility',
				flex : 1
			},{
				xtype : 'nationalCS',
				flex : 1
			},{
				xtype : 'nationalPS',
				flex : 1
			}]
		}]
		
	},{
		xtype : 'container',
		flex : 1,
		style: 'background-color: #b0b0b0;',
		
		layout: {
		    type: 'vbox',
		    align : 'stretch',
		    pack  : 'start',
		},
		
		items : [{
			xtype : 'dailyComplainReview',
			flex : 1,
	 
		},{
			xtype : 'securityDashboard',
			flex : 1,
	
		}]
	}],
	
    initComponent: function() {
    	
        this.callParent(arguments);
    }
});



