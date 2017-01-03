Ext.define('NETWORKDASHBOARD.view.NationalCS' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.nationalCS',
    
	title : '<font style="font-size: 8pt; color:#dadae0;">OPEN</font>',
    
    header : {
          height : 30 / 768 * screen.height,
          style : {
              "cursor" : "pointer",
			  "background": "#000000",
              "box-shadow" : "#000000 0 0 0 0 inset;",
              "border-width" : "0px",
              "border-right" : '5px solid #b0b0b0',
              "border-top-right-radius" : '10px',
              "border-top-left-radius" : '10px',
              "overflow" : "hidden",
              "white-space" : "nowrap",
              "text-overflow" : "ellipsis"
            }
        },
   
   bodyStyle: 'background-color: #121212; border-width: 0px; border-right : 5px solid #b0b0b0; border-bottom : 5px solid #b0b0b0; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; ',	

   layout: {
	    type: 'hbox',
	    pack: 'start',
	    align: 'stretch'
	},
	
	items: [{
		xtype : 'container',
		flex : 1,

		layout: {
		    type: 'vbox',
		    align : 'stretch',
		    pack  : 'start',
		},
		
		items : [{
			xtype : 'container',
			flex : 1,
			style: 'background-color: #121212;',
			
			layout: {
			    type: 'table',
			    columns: 3,
			    tableAttrs : {
		            style : 'width : 100%;'
		        }
			},
			
			items : [{
				xtype : 'label',
				text : 'Data 1',
				cls : 'white-label-small',
				colspan : 3,
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "padding-top" : "" + (1 / 768 * screen.height) + "px",
		                  "width" : "100%"
		                }
		              }
			},{
				xtype : 'label',
				text : '00',
				cls : 'white-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			},{
				xtype : 'label',
				text : '00',
				cls : 'white-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			},{
				xtype : 'label',
				text : '15',
				cls : 'green-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			}]
			
		},{
			xtype : 'container',
			flex : 1,
			style: 'background-color: #121212;',
			
			layout: {
			    type: 'table',
			    columns: 3,
			    tableAttrs : {
		            style : 'width : 100%;'
		        }
			},
			
			items : [{
				xtype : 'label',
				text : 'Data 2',
				cls : 'white-label-small',
				colspan : 3,
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "padding-top" : "" + (1 / 768 * screen.height) + "px",
		                  "width" : "100%"
		                }
		              }
			},{
				xtype : 'label',
				text : '00',
				cls : 'white-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			},{
				xtype : 'label',
				text : '01',
				cls : 'yellow-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			},{
				xtype : 'label',
				text : '19',
				cls : 'green-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			}]
			
		},{
			xtype : 'container',
			flex : 1,
			style: 'background-color: #121212; border-bottom-left-radius: 10px; ',
			
			layout: {
			    type: 'table',
			    columns: 3,
			    tableAttrs : {
		            style : 'width : 100%;'
		        }
			},
			
			items : [{
				xtype : 'label',
				text : 'Data 3',
				cls : 'white-label-small',
				colspan : 3,
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "padding-top" : "" + (1 / 768 * screen.height) + "px",
		                  "width" : "100%"
		                }
		              }
			},{
				xtype : 'label',
				text : '01',
				cls : 'red-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			},{
				xtype : 'label',
				text : '00',
				cls : 'white-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			},{
				xtype : 'label',
				text : '28',
				cls : 'green-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			}]
			
		}]
	},{
		xtype : 'container',
		flex : 1,
		
		layout: {
		    type: 'vbox',
		    align : 'stretch',
		    pack  : 'start',
		},
		
		items : [{
			xtype : 'container',
			flex : 1,
			style: 'background-color: #121212;',
			
			layout: {
			    type: 'table',
			    columns: 3,
			    tableAttrs : {
		            style : 'width : 100%;'
		        }
			},
			
			items : [{
				xtype : 'label',
				text : 'Data 4',
				cls : 'white-label-small',
				colspan : 3,
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "padding-top" : "" + (1 / 768 * screen.height) + "px",
		                  "width" : "100%"
		                }
		              }
			},{
				xtype : 'label',
				text : '00',
				cls : 'white-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			},{
				xtype : 'label',
				text : '00',
				cls : 'white-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			},{
				xtype : 'label',
				text : '15',
				cls : 'green-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			}]
			
		},{
			xtype : 'container',
			flex : 1,
			style: 'background-color: #121212;',
			
			layout: {
			    type: 'table',
			    columns: 3,
			    tableAttrs : {
		            style : 'width : 100%;'
		        }
			},
			
			items : [{
				xtype : 'label',
				text : 'Data 5',
				cls : 'white-label-small',
				colspan : 3,
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "padding-top" : "" + (1 / 768 * screen.height) + "px",
		                  "width" : "100%"
		                }
		              }
			},{
				xtype : 'label',
				text : '00',
				cls : 'white-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			},{
				xtype : 'label',
				text : '01',
				cls : 'yellow-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			},{
				xtype : 'label',
				text : '19',
				cls : 'green-label-3',
				tdAttrs : {
	                style : {
		                  "float" : "left",
		                  "text-align" : "left",
		                  "width" : "33%"
		                }
		              }
			}]
			
		},{
			xtype : 'container',
			flex : 1,
			style: 'background-color: #121212; border-bottom-right-radius: 10px;',
		}]
	}],
	
    initComponent: function() {
    	
        this.callParent(arguments);
    }
});



