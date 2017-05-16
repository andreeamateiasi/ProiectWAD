MainView = function () {
    this.initComponent();

};
MainView.prototype = {

    initComponent: function () {

        this.attachListeners();
        // this.onMainMenuItem();
        this.onNavItem();

    },
    attachListeners: function () {
        $('nav').off();
        //$('li').on('click', 'a', $.proxy(this.onMainMenuItem, this));
        $('nav').on('click', 'li', $.proxy(this.onNavItem, this));
        $('#id_for_main').load( 'home.html', function(){ 
            var home = new HomeView();
            home.onHomePopulate();
        });

        //  $('#smth').on('click', 'button', $.proxy(this.onDropDownPopulate, this));
        //$('#dorpDownHome').on('click', 'li', $.proxy(this.onOfferPage, this));
        //  $('nav').on('click', '#home', $.proxy(this.onOfferPopulate, this));
        //$('nav').find('#home').trigger('click');
        //$('#ul_offer_page').on('click', 'li', $.proxy(this.onOfferLoad, this));
    },
    
    onNavItem: function (event) {
        /*var itemId = 'home';
         if (event)
         {
         itemId = $(event.currentTarget).attr('id');
         }*/
        var itemId = $(event.currentTarget).attr('id');
        switch (itemId) {
            case 'home':
                $('#id_for_main').load('home.html', function () {
                    var home = new HomeView();
                    home.onHomePopulate();
                });
                break;
            case 'offers':
                $('#id_for_main').load('offers.html', function () {
                    var offers = new OffersView();
                    offers.onAllPackagesPopulate();
                });
                break;
            case 'contact':
                $('#id_for_main').load('contact.html');
                break;
            case 'reg':
                window.location.href = "login/login.html";
                break;
            case 'login':
                window.location.href = "login/login.html";
                break;
        }
    }
};
$(document).ready(function () {
    var mainApp = new MainView();
});



/* getDestAPI: function () {
 var retApi = new MainApp();
 var hostName = 'http://localhost:57312'; //window.location.protocol + "//" + window.location.host;    
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
 },*/

//    onMainMenuItem: function (event) {
//        //event.preventDefault();
//        var itemId = $(event.currentTarget).attr('id');
//        switch (itemId) {
//            case 'first-offer':
//                $('main').load('html/offers.html', function () {
//                    var offers = new OffersView();
//                });
//                break;
//            case 'second-offer':
//                $('#id_for_main').load('html/offers.html', function () {
//                    var offers = new OffersView();
//                });
//                break;
//            case 'third-offer':
//                $('#id_for_main').load('html/offers.html', function () {
//                    var offers = new OffersView();
//                });
//                break;
//            case 'fourth-offer':
//                $('#id_for_main').load('html/offers.html', function () {
//                    var offers = new OffersView();
//                });
//                break;
//            case 'fifth-offer':
//                $('#id_for_main').load('html/offers.html', function () {
//                    var offers = new OffersView();
//                });
//                break;
//            case 'sixth-offer':
//                $('#id_for_main').load('html/offers.html', function () {
//                    var offers = new OffersView();
//                });
//                break;
//        }
//
//    },