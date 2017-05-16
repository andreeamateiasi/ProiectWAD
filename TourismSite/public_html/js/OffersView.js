OffersView = function () {
    this.initComponent();

};
OffersView.prototype = {

    initComponent: function () {
        this.attachListeners();
        this.onModalWinGetPackage();
        //this.onPackageLoad();

        //this.onMainMenuItemOffer();
        //this.onAllPackagesPopulate();
        //this.onPackagesPopulate();
    },
    attachListeners: function () {
        console.log("i got here");
        $('#submit_bttn').on('click', $.proxy(this.onModalWinGetPackage, this));
        $('#ul_offers_by_id').on('click', 'li', $.proxy(this.onPackageLoad, this));

        //$('nav').on('click', '#offers', $.proxy(this.onAllPackagesPopulate, this));
        //$('li').on('click', 'a', $.proxy(this.onMainMenuItemOffer, this));
        // $('#ul_offer_page').on('click', 'li', $.proxy(this.onPackagesPopulate, this));
    },
    onPackageLoad: function (event) {
        var itemId = $(event.currentTarget).attr('id');
        console.log("here is wrong " + itemId);
        $("#id_for_main").load('package.html', function () {
            var package = new PackageView();
            package.onPackagePagePopulate(itemId);
            package.onDropDownPackagePagePopulate(itemId);
        });
    },
    onModalWinGetPackage: function () {
        var destId = document.getElementById("dest_id").value;
        var hotel = document.getElementById("hotel").value;
        var food = document.getElementById("food").value;
        var no_pass = document.getElementById("no_pass").value;
        var price = document.getElementById("price").value;
        var dest_city = document.getElementById("dest_city").value;
        var img1 = document.getElementById("img1").value;
        var img2 = document.getElementById("img2").value;

// Returns successful data submission message when the entered information is stored in database.
        var obj = {
            "OfferId": destId,
            "DestinationCity": dest_city,
            "Image1": img1,
            "Image2": img2,
            "Hotel": hotel,
            "Food": food,
            "NoPassengers": no_pass,
            "Price": price
        };

        /* 'Hotel=' + hotel + '&Food=' + food + '&NoPassengers='
         + no_pass + '&Price=' + price + '&OfferId=' + destId + '&DestinationCity='
         + dest_city + '&Image1=' + img1 + '&Image2=' + img2;*/
        if (hotel == '' || food == '' || no_pass == '' || price == ''
                || destId == '' || dest_city == '' || img1 == '' || img2 == '') {
            console.log("fill all the fields");
            //alert("Please Fill All Fields");
        } else {
// AJAX code to submit form.
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
               
                type: "POST",
                url: "http://localhost:57312/api/packages",
                data: JSON.stringify(obj),
                
                dataType: 'json',
                cache: false,
                success: function () {
                    console.log('added succesfully');
                },
                fail: function () {
                    console.log('failed');
                }

            });
        }
        return false;
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
                        var textElem4 = document.createTextNode(this.DestinationCity + " - " + this.Hotel);
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
                    var textElem4 = document.createTextNode(this.DestinationCity + " - " + this.Hotel);
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

