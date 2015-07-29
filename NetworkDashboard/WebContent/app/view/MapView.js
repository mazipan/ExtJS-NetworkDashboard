var map_legend = 	
	'<div id="map_legend">' + 
	'	<table>' + 
	'		<tr><td colspan=2><font style="color: #088ccf; font-size: 12px; font-weight: bold;">Legend</font></td></tr>' + 

    '		<tr>' +
	'			<td align="center"> <img src="./images/markers/platinum-site.png" width="14" height="16"></img> </td>' +
	'			<td>Platinum Sites</td>' +
	'			<td><input type="checkbox"/></td>' +
	'		</tr>' +

    '		<tr>' +
	'			<td align="center"> <img src="./images/markers/gold-site.png" width="14" height="16"></img> </td>' +
	'			<td>Gold Sites</td>' +
	'			<td><input type="checkbox"/></td>' +
	'		</tr>' +
	
    '		<tr>' +
	'			<td align="center"> <img src="./images/markers/silver-site.png" width="14" height="16"></img> </td>' +
	'			<td>Silver Sites</td>' +
	'			<td><input type="checkbox"/></td>' +
	'		</tr>' +

    '		<tr>' +
	'			<td align="center"> <img src="./images/markers/platinum-hotspot.png" width="16" height="16"></img> </td>' +
	'			<td>Platinum Hotspots</td>' +
	'			<td><input type="checkbox"/></td>' +
	'		</tr>' +
	
    '	</table>' + 
    '</div>';

Ext.define('NETWORKDASHBOARD.view.MapView' ,{
    extend: 'Ext.container.Container',
    alias: 'widget.mapView',
    
    layout : 'border',
    html : map_legend,
    
    items : [{
    	xtype : 'container',
    	region : 'north',
    	height : 25,
    	style: 'background-color: black;',
    	
    	layout: {
    	    type: 'hbox',
    	    pack: 'start',
    	    align: 'stretch'
    	},
    	
    	items : [{
            xtype : 'checkboxgroup',
            width : 350,
            labelStyle : 'font-weight: bold; color: white;',
            style : 'font-weight: bold; font-size: 9px; color: white;',
            fieldLabel : 'Filter For Sites',
            margin : '0 30',
            items : [{
                  xtype : 'checkboxfield',
                  checked : true,
                  boxLabel : '<font style="color: #7FFF00">Green</font>',
                  fieldStyle : 'float: right',
                  width : 55 / 1366 * screen.width
                }, {
                  xtype : 'checkboxfield',
                  checked : true,
                  boxLabel : '<font style="color: yellow">Yellow</font>',
                  fieldStyle : 'float: right',
                  width : 60 / 1366 * screen.width
                }, {
                  xtype : 'checkboxfield',
                  checked : true,
                  boxLabel : '<font style="color: red">Red</font>',
                  fieldStyle : 'float: right',
                  width : 45 / 1366 * screen.width
                }]
          }, {
            xtype : 'checkboxgroup',
            labelStyle : 'font-weight: bold;color: white;',
            style : 'font-weight: bold; font-size: 9px; color: white;',
            items : [{
                  xtype : 'checkboxfield',
                  checked : true,
                  boxLabel : '2G Sites',
                  fieldStyle : 'float: right',
                  width : 70 / 1366 * screen.width
                }, {
                  xtype : 'checkboxfield',
                  checked : true,
                  boxLabel : '3G Sites',
                  fieldStyle : 'float: right',
                  width : 70 / 1366 * screen.width
                }]
          }]
    },{
    	xtype : 'container',
    	region : 'center',
    	id : 'map-container',
    	
    	listeners : {
    		boxready: function(){
    			initialize_map();
    		}
    	}
    }],
    
	
    initComponent: function() {
    	    	
        this.callParent(arguments);
    }
});



