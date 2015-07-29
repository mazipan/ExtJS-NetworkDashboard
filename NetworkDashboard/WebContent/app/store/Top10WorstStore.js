Ext.define('NETWORKDASHBOARD.store.Top10WorstStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	fields : [ 'id', 'region', 'cluster', 'mitra', 'avail'],
	data : [{"id":"1", "region":"REG-06", "cluster":"Cluster 01", "mitra":"Mitra10", "avail":""},
	        {"id":"2", "region":"REG-07", "cluster":"Cluster 02", "mitra":"Mitra09", "avail":""},
	        {"id":"3", "region":"REG-02", "cluster":"Cluster 03", "mitra":"Mitra08", "avail":""},
	        {"id":"4", "region":"REG-11", "cluster":"Cluster 04", "mitra":"Mitra07", "avail":""},
	        {"id":"5", "region":"REG-10", "cluster":"Cluster 05", "mitra":"Mitra06", "avail":""},
	        {"id":"6", "region":"REG-04", "cluster":"Cluster 06", "mitra":"Mitra05", "avail":""},
	        {"id":"7", "region":"REG-01", "cluster":"Cluster 07", "mitra":"Mitra04", "avail":""},
	        {"id":"8", "region":"REG-08", "cluster":"Cluster 08", "mitra":"Mitra03", "avail":""},
	        {"id":"9", "region":"REG-09", "cluster":"Cluster 09", "mitra":"Mitra02", "avail":""}]

});