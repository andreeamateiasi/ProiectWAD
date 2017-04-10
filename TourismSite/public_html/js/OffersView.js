OffersView = function () {
    this.initComponent();
};
OffersView.prototype = {
    initComponent: function () {
        this.attachListeners();
        
    },
    attachListeners: function () {
       
    }
    
};

$(document).ready(function () {
    var mainApp = new OffersView();
});