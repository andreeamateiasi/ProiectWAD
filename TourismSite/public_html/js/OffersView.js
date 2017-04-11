OffersView = function () {
    this.initComponent();
};
OffersView.prototype = {
   
    initComponent: function () {
        this.attachListeners();
        this.onMainMenuItemOffer();


    },
    attachListeners: function () {
       
        $('li').on('click', 'a',  $.proxy(this.onMainMenuItemOffer, this));
    },
   
    onMainMenuItemOffer: function (event) {
        //event.preventDefault();
        var itemId = $(event.currentTarget).attr('id');
        switch (itemId) {
            case 'first':
                $('main').load('html/package.html');
                break;
            case 'second':
                $('main').load('html/package.html', function () {
                    //var offers = new OffersView();
                });
                break;
            case 'third':
                $('main').load('html/package.html', function () {
                    //var offers = new OffersView();
                });
                break;
            case 'fourth':
               $('main').load('html/package.html', function () {
                    //var offers = new OffersView();
                });
                break;
            case 'fifth':
                $('main').load('html/package.html', function () {
                    //var offers = new OffersView();
                });
                break;
            case 'sixth':
                $('main').load('html/package.html', function () {
                    //var offers = new OffersView();
                });
                break;


        }

    }
};

$(document).ready(function () {
    var mainApp = new OffersView();
});