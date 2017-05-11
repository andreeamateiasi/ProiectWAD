OffersView = function () {
    this.initComponent();

};
OffersView.prototype = {

    initComponent: function () {
        this.attachListeners();
        //this.onMainMenuItemOffer();
        //this.onAllPackagesPopulate();
        //this.onPackagesPopulate();
    },
    attachListeners: function () {
        console.log("i got here");
        //$('nav').on('click', '#offers', $.proxy(this.onAllPackagesPopulate, this));
        //$('li').on('click', 'a', $.proxy(this.onMainMenuItemOffer, this));
        // $('#ul_offer_page').on('click', 'li', $.proxy(this.onPackagesPopulate, this));
    },

    onPackagesPopulate: function (itemId) {
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/packages",
            dataType: "json",
            success: function (data) {
                // var tempId = this.OfferId;
                //var items = [];
                console.log("try1");
                $.each(data, function () {
                    console.log("offer id  :: " + this.OfferId);
                    console.log("item id ::  " + itemId);
                    if (this.OfferId == itemId) {

                        var elem1 = document.createElement("li");
                        elem1.className = 'li_offer_ul';
                        elem1.id = this.PackageId;
                        var elem2 = document.createElement("div");
                        elem2.className = "div_img_offer";
                        elem2.className = "floating-box";
                        elem2.style["margin-top"] = "10%";
                        var elem3 = document.createElement("img");
                        elem3.setAttribute('src', this.Image1);
                        elem3.setAttribute('width', '275');
                        elem3.setAttribute('height', '175');
                        elem3.className = "img_class";
                        var elem4 = document.createElement("a");
                        elem4.className = "container";
                        var textElem4 = document.createTextNode(this.DestinationCity+" - "+this.Hotel);
                        //var textElem5 = document.createTextNode();
                        elem4.appendChild(textElem4);
                       // elem4.appendChild(textElem5);
                        // var imgElem3 = document.createTextNode(this.Image);
                        elem2.appendChild(elem3);
                        elem2.appendChild(elem4);
                        elem1.appendChild(elem2);

                        var element = document.getElementById("ul_offers_by_id");
                        element.appendChild(elem1);
                    }
                });

            },
            failure: function (response) {
                alert(response.d);
            }
        });
    },
    onAllPackagesPopulate: function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/packages",
            dataType: "json",
            success: function (data) {
                // var tempId = this.OfferId;
                //var items = [];
                console.log("try2 function onAllPackagesPopulate");
                $.each(data, function () {

                    var elem1 = document.createElement("li");
                    elem1.className = 'li_offer_ul';
                    elem1.id = this.PackageId;
                    var elem2 = document.createElement("div");
                    elem2.className = "div_img_offer";
                    elem2.className = "floating-box";
                    elem2.style["margin-top"] = "10%";
                    var elem3 = document.createElement("img");
                    elem3.setAttribute('src', this.Image1);
                    elem3.setAttribute('width', '275');
                    elem3.setAttribute('height', '175');
                    elem3.className = "img_class";
                    var elem4 = document.createElement("a");
                    elem4.className = "container";
                    var textElem4 = document.createTextNode(this.DestinationCity+" - "+this.Hotel);
                    elem4.appendChild(textElem4);
                    // var imgElem3 = document.createTextNode(this.Image);
                    elem2.appendChild(elem3);
                    elem2.appendChild(elem4);
                    elem1.appendChild(elem2);

                    var element = document.getElementById("ul_offers_by_id");
                    element.appendChild(elem1);

                });

            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }

//    onMainMenuItemOffer: function (event) {
//        //event.preventDefault();
//        console.log("i got here");
//        var itemId = $(event.currentTarget).attr('id');
//        switch (itemId) {
//            case 'first':
//                $('#id_for_main').load('package.html');
//                break;
//            case 'second':
//                $('#id_for_main').load('package.html', function () {
//                    var package = new PackageView();
//                });
//                break;
//            case 'third':
//                $('#id_for_main').load('package.html', function () {
//                    var package = new PackageView();
//                });
//                break;
//            case 'fourth':
//                $('#id_for_main').load('package.html', function () {
//                    var package = new PackageView();
//                });
//                break;
//            case 'fifth':
//                $('#id_for_main').load('package.html', function () {
//                    var package = new PackageView();
//                });
//                break;
//            case 'sixth':
//                $('#id_for_main').load('package.html', function () {
//                    var package = new PackageView();
//                });
//                break;
//
//
//        }
//
//    }
};

