/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var grid={

    getDestAPI: function () {
        var retApi = new MainApp();
        var hostName = 'http://localhost:57312';//window.location.protocol + "//" + window.location.host;    
        retApi.setBaseURL(hostName);
        return retApi;
    },
    loadData: function (filter)
    {
        var deferred = $.Deferred();
        var destApi = this.getDestAPI();
        destApi.getAllDestinations().done(
                function (response)
                {
                    deferred.resolve(response);
                });
        return deferred.promise();
    },
    insertItem: function (insertingItem) {
        var destApi = this.getDestAPI();
        return destApi.addNewOffer(insertingItem);
    },

    updateItem: function (updatingItem) {
        var destApi = this.getDestAPI();
        return destApi.updateOffer(updatingItem);
    },

    deleteItem: function (deletingItem) {
        var destApi = this.getDestAPI();
        return destApi.deleteOffer(deletingItem);
    }
    };