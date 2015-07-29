Ext.define('NETWORKDASHBOARD.store.AreaLoadStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	fields : [ 'id', 'area', 'reg1', 'reg2', 'reg3', 'reg4', 'reg5', 'reg6', 'reg7', 'reg8', 'reg9', 'reg10', 'reg11' ],
	data : [{"id":"1", "area":"CPU Load 2G", "reg1":"1", "reg2":"1", "reg3":"1", "reg4":"1", "reg5":"1", "reg6":"1", "reg7":"1", "reg8":"1", "reg9":"1", "reg10":"1", "reg11":"1"},
	        {"id":"2", "area":"CPU Load 3G", "reg1":"1", "reg2":"1", "reg3":"1", "reg4":"1", "reg5":"1", "reg6":"1", "reg7":"1", "reg8":"1", "reg9":"1", "reg10":"1", "reg11":"1"},
	        {"id":"3", "area":"PCU Load", "reg1":"", "reg2":"", "reg3":"", "reg4":"", "reg5":"", "reg6":"", "reg7":"", "reg8":"", "reg9":"", "reg10":"", "reg11":""},
	        {"id":"4", "area":"Call Down", "reg1":"", "reg2":"", "reg3":"", "reg4":"", "reg5":"", "reg6":"", "reg7":"", "reg8":"", "reg9":"", "reg10":"", "reg11":""},
	        {"id":"5", "area":"CCSR 2G", "reg1":"1", "reg2":"1", "reg3":"1", "reg4":"1", "reg5":"1", "reg6":"1", "reg7":"1", "reg8":"1", "reg9":"1", "reg10":"1", "reg11":"1"},
	        {"id":"6", "area":"CCSR 3G", "reg1":"0", "reg2":"1", "reg3":"0", "reg4":"0", "reg5":"1", "reg6":"1", "reg7":"1", "reg8":"1", "reg9":"1", "reg10":"0", "reg11":"1"},
	        {"id":"7", "area":"CSSR 2G", "reg1":"0", "reg2":"0", "reg3":"1", "reg4":"0", "reg5":"0", "reg6":"1", "reg7":"1", "reg8":"1", "reg9":"1", "reg10":"0", "reg11":"1"},
	        {"id":"8", "area":"CSSR 3G", "reg1":"1", "reg2":"1", "reg3":"1", "reg4":"0", "reg5":"0", "reg6":"0", "reg7":"1", "reg8":"1", "reg9":"1", "reg10":"1", "reg11":"0"},
	        {"id":"9", "area":"SCR", "reg1":"1", "reg2":"1", "reg3":"1", "reg4":"1", "reg5":"1", "reg6":"1", "reg7":"1", "reg8":"1", "reg9":"1", "reg10":"1", "reg11":"1"},
	        {"id":"10", "area":"PDP", "reg1":"1", "reg2":"1", "reg3":"1", "reg4":"1", "reg5":"1", "reg6":"1", "reg7":"1", "reg8":"1", "reg9":"1", "reg10":"1", "reg11":"1"}]

});