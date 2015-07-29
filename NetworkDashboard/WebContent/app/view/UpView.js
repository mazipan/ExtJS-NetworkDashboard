Ext.define('NETWORKDASHBOARD.view.UpView' ,{
    extend: 'Ext.container.Container',
    alias: 'widget.upView',
        
	layout: {
	    type: 'hbox',
	    pack: 'start',
	    align: 'stretch'
	},

	style: 'background-color: #b0b0b0;',
	
	items : [{
		xtype : 'areaLoad',
		flex : 2,
	},{
		xtype : 'incidentAlarmStatus',
		flex : 1,
	},{
		xtype : 'top10Worst',
		flex : 1,
	}],
	
    initComponent: function() {
    	
        this.callParent(arguments);
    }
});



