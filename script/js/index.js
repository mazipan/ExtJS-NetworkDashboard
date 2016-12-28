/**
 * author Irfan Maulana
 */

Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'NETWORKDASHBOARD',

    appFolder: 'app',
    
    controllers: [
        'AppController'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
        	layout: 'fit',
            items: [
                {
                    xtype: 'mainView'
                }
            ]
        });
    }
});