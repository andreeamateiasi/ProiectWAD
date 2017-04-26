MainView = function () {
    this.initComponent();
};
MainView.prototype = {
    initComponent: function () {
        this.attachListeners();
        this.onMainMenuItem();
        this.onNavItem();

    },
    attachListeners: function () {
        //$().on('click', $.proxy(this.function1, this));
        $('nav').off();
        $('li').on('click', 'a', $.proxy(this.onMainMenuItem, this));
        $('nav').on('click', 'li', $.proxy(this.onNavItem, this));
        //$('nav').find('#home').trigger('click');
    },

    onMainMenuItem: function (event) {
        //event.preventDefault();
        var itemId = $(event.currentTarget).attr('id');
        switch (itemId) {
            case 'first-offer':
                $('main').load('html/offers.html', function () {
                    var offers = new OffersView();
                });
                break;
            case 'second-offer':
                $('#id_for_main').load('html/offers.html', function () {
                    var offers = new OffersView();
                });
                break;
            case 'third-offer':
                $('#id_for_main').load('html/offers.html', function () {
                    var offers = new OffersView();
                });
                break;
            case 'fourth-offer':
                $('#id_for_main').load('html/offers.html', function () {
                    var offers = new OffersView();
                });
                break;
            case 'fifth-offer':
                $('#id_for_main').load('html/offers.html', function () {
                    var offers = new OffersView();
                });
                break;
            case 'sixth-offer':
                $('#id_for_main').load('html/offers.html', function () {
                    var offers = new OffersView();
                });

                break;


        }

    },
    onNavItem: function (event) {
        var itemId = $(event.currentTarget).attr('id');
        switch (itemId) {
            case 'home':
                $('#id_for_main').load('home.html', function () {
                    var main = new MainView();
                });
                break;
            case 'offers':
                $('#id_for_main').load('html/offers.html', function () {
                    var offers = new OffersView();
                });
                break;
            case 'contact':
                $('#id_for_main').load('html/contact.html');
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