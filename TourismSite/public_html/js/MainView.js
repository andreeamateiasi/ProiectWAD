MainView = function () {
    this.initComponent();
};
MainView.prototype = {
    initComponent: function () {
        this.attachListeners();
        this.onMainMenuItem();


    },
    attachListeners: function () {
        //$().on('click', $.proxy(this.function1, this));
       // $('nav').off();
        $('li').on('click', 'a',  $.proxy(this.onMainMenuItem, this));
        //$('nav').find('#city_alerts_index').trigger('click');
    },
   
    onMainMenuItem: function (event) {
        //event.preventDefault();
        var itemId = $(event.currentTarget).attr('id');
        switch (itemId) {
            case 'first-offer':
                $('main').load('html/offers.html');
                break;
            case 'second-offer':
                $('main').load('html/offers.html', function () {
                    //var offers = new OffersView();
                });
                break;
            case 'third-offer':
                $('main').load('html/offers.html', function () {
                    //var offers = new OffersView();
                });
                break;
            case 'fourth-offer':
               $('main').load('html/offers.html', function () {
                    //var offers = new OffersView();
                });
                break;
            case 'fifth-offer':
                $('main').load('html/offers.html', function () {
                    //var offers = new OffersView();
                });
                break;
            case 'sixth-offer':
                $('main').load('html/offers.html', function () {
                    //var offers = new OffersView();
                });
                break;


        }

    }
};

$(document).ready(function () {
    var mainApp = new MainView();
});