var iconRender = 
function(value, metadata, record, rowIndex,colIndex, store)  {
	if(value == '1'){
	    return  '<img src="./images/green-up.png" />';
	}else if(value == '0'){
	    return  '<img src="./images/yellow-down.png" />';		  	    			
	}else{
		return '';
	}
};

Ext.define('NETWORKDASHBOARD.view.AreaLoad' ,{
   extend: 'Ext.container.Container',
   alias: 'widget.areaLoad',    

   style: 'background-color: #b0b0b0; border-width: 0px; border: 5px solid #b0b0b0; border-radius: 10px;',	
		 
   layout : 'border',
   
   items : [{
	  xtype : 'gridpanel',
	  store : 'AreaLoadStore',
	  region : 'center',
	  emptyText: 'No records to show',
	  //autoScroll: true,
	  overflowX : 'hidden',
	  overflowY : 'auto',
	  viewConfig: {
		    stripeRows: false
	  },
	  style : 'border-radius: 10px; background-color: #1a1a1a;',
	  columns: [ 
		  	    { text: '<font style="font-size: 10px; color: white;">AREA-1</font>', flex: 1, dataIndex: 'area', baseCls:'black-custom-header-grid', tdCls: 'areaRowGrid1'},
		  	    { text: '<font style="font-size: 10px; color: white;">REG-01</font>', width: 40, dataIndex: 'reg1', align: 'center', baseCls:'black-custom-header-grid', tdCls: 'areaRowGrid2', renderer : iconRender },
		  	    { text: '<font style="font-size: 10px; color: white;">REG-02</font>', width: 40, dataIndex: 'reg2', align: 'center', baseCls:'black-custom-header-grid', tdCls: 'areaRowGrid2', renderer : iconRender },
		  	    { text: '<font style="font-size: 10px; color: white;">REG-03</font>', width: 40, dataIndex: 'reg3', align: 'center', baseCls:'black-custom-header-grid', tdCls: 'areaRowGrid2', renderer : iconRender },
		  	    { text: '<font style="font-size: 10px; color: white;">REG-04</font>', width: 40, dataIndex: 'reg4', align: 'center', baseCls:'black-custom-header-grid', tdCls: 'areaRowGrid2', renderer : iconRender },
		  	    { text: '<font style="font-size: 10px; color: white;">REG-05</font>', width: 40, dataIndex: 'reg5', align: 'center', baseCls:'black-custom-header-grid', tdCls: 'areaRowGrid2', renderer : iconRender },
		  	    { text: '<font style="font-size: 10px; color: white;">REG-06</font>', width: 40, dataIndex: 'reg6', align: 'center', baseCls:'black-custom-header-grid', tdCls: 'areaRowGrid2', renderer : iconRender },
		  	    { text: '<font style="font-size: 10px; color: white;">REG-07</font>', width: 40, dataIndex: 'reg7', align: 'center', baseCls:'black-custom-header-grid', tdCls: 'areaRowGrid2', renderer : iconRender },
		  	    { text: '<font style="font-size: 10px; color: white;">REG-08</font>', width: 40, dataIndex: 'reg8', align: 'center', baseCls:'black-custom-header-grid', tdCls: 'areaRowGrid2', renderer : iconRender },
		  	    { text: '<font style="font-size: 10px; color: white;">REG-09</font>', width: 40, dataIndex: 'reg9', align: 'center', baseCls:'black-custom-header-grid', tdCls: 'areaRowGrid2', renderer : iconRender },
		  	    { text: '<font style="font-size: 10px; color: white;">REG-10</font>', width: 40, dataIndex: 'reg10', align: 'center', baseCls:'black-custom-header-grid', tdCls: 'areaRowGrid2', renderer : iconRender },
		  	    { text: '<font style="font-size: 10px; color: white;">REG-11</font>', width: 40, dataIndex: 'reg11', align: 'center', baseCls:'black-custom-header-grid', tdCls: 'areaRowGrid2', renderer : iconRender },
		  	],
   }],
   
   initComponent: function() {
    	
	   this.callParent(arguments);
   }
});



