Ext.define('NETWORKDASHBOARD.store.Top10WorstStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	fields : [ 'id', 'region', 'cluster', 'mitra', 'avail'],
	data : [{"id":"1", "region":"CAT-06", "cluster":"Test 01", "mitra":"Dump10", "avail":""},
	        {"id":"2", "region":"CAT-07", "cluster":"Test 02", "mitra":"Dump09", "avail":""},
	        {"id":"3", "region":"CAT-02", "cluster":"Test 03", "mitra":"Dump08", "avail":""},
	        {"id":"4", "region":"CAT-11", "cluster":"Test 04", "mitra":"Dump07", "avail":""},
	        {"id":"5", "region":"CAT-10", "cluster":"Test 05", "mitra":"Dump06", "avail":""},
	        {"id":"6", "region":"CAT-04", "cluster":"Test 06", "mitra":"Dump05", "avail":""},
	        {"id":"7", "region":"CAT-01", "cluster":"Test 07", "mitra":"Dump04", "avail":""},
	        {"id":"8", "region":"CAT-08", "cluster":"Test 08", "mitra":"Dump03", "avail":""},
	        {"id":"9", "region":"CAT-09", "cluster":"Test 09", "mitra":"Dump02", "avail":""}]

});