OffersView = function () {
    this.initComponent();

};
OffersView.prototype = {
   
    initComponent: function () {
        this.attachListeners();
        this.onMainMenuItemOffer();


    },
    attachListeners: function () {
               console.log("i got here");

        $('li').on('click', 'a',  $.proxy(this.onMainMenuItemOffer, this));
    },
   
    onMainMenuItemOffer: function (event) {
        //event.preventDefault();
        console.log("i got here");
        var itemId = $(event.currentTarget).attr('id');
        switch (itemId) {
            case 'first':
                $('#id_for_main').load('package.html');
                break;
            case 'second':
                $('#id_for_main').load('package.html', function () {
                   var package = new PackageView();
                });
                break;
            case 'third':
                $('#id_for_main').load('package.html', function () {
                   var package = new PackageView();
                });
                break;
            case 'fourth':
               $('#id_for_main').load('package.html', function () {
                   var package = new PackageView();
                });
                break;
            case 'fifth':
                $('#id_for_main').load('package.html', function () {
                   var package = new PackageView();
                });
                break;
            case 'sixth':
                $('#id_for_main').load('package.html', function () {
                   var package = new PackageView();
                });
                break;


        }

    }
};

