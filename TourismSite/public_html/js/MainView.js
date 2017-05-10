MainView = function () {
    this.initComponent();

};
MainView.prototype = {

    initComponent: function () {

        this.attachListeners();
        // this.onMainMenuItem();
        this.onNavItem();
        this.getDestAPI();
        this.loadData();
        this.insertItem();
        this.updateItem();
        this.deleteItem();
        this.onDropDownPopulate(e);
        this.onOfferPopulate();
        this.onOfferLoad();
    },
    attachListeners: function () {
        //$().on('click', $.proxy(this.function1, this));
        $('nav').off();
        //$('li').on('click', 'a', $.proxy(this.onMainMenuItem, this));
        $('nav').on('click', 'li', $.proxy(this.onNavItem, this));
        $('#smth').on('click', 'button', $.proxy(this.onDropDownPopulate, this));
        $('#dorpDownHome').on('click', 'li', $.proxy(this.onOfferPage, this));
        $('nav').on('click', '#home', $.proxy(this.onOfferPopulate, this));
        //$('nav').find('#home').trigger('click');
        $('#ul_offer_page').on('click', 'li', $.proxy(this.onOfferLoad, this));
    },
    getDestAPI: function () {
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
    },
    onOfferPopulate: function (e) {

        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/offers",
            dataType: "json",
            success: function (data) {
                //("#ul_offer_page").html('');
                var items = [];
                $.each(data, function () {
                    //items.push($("<li class='li_offer_ul'></li>").val(this['Destination']).html(this['Destination']));

                    var elem1 = document.createElement("li");
                    elem1.className = 'li_offer_ul';
                    elem1.id = this.OfferId;
                    var elem2 = document.createElement("div");
                    elem2.className = "floating-box";
                    elem2.style["margin-top"] = "10%";
                    var elem3 = document.createElement("img");
                    elem3.setAttribute('src', this.Image);
                    elem3.setAttribute('width', '275');
                    elem3.setAttribute('height', '175');
                    var elem4 = document.createElement("a");
                    var textElem4 = document.createTextNode(this.Destination);
                    elem4.appendChild(textElem4);
                    // var imgElem3 = document.createTextNode(this.Image);
                    elem2.appendChild(elem3);
                    elem2.appendChild(elem4);
                    elem1.appendChild(elem2);

                    var element = document.getElementById("ul_offer_page");
                    element.appendChild(elem1);
//
//                    var elem = "<li><div class='floating-box' style='margin-top: 5%' ><a><img width='275' height='175'></a></div></li>";
//                    $("div").attr("id", this.offerId);
//                    $().val(this['Destination']).html(this['Destination']);
//                    //$(id).val(this['Destination']).html(this['Destination']);
//                    $("li").addClass("li_offer_ul");
//                    $("img").attr("src", this['Image']);
//                    $("#ul_offer_page").append(elem);

                });
                // $("#ul_offer_page").append(items.join(''));
//                $.each((data), function () {
//                    $('#ul_offer_page').append($("<li class='li_offer_ul'></li>").val(this['Destination']).html(this['Destination']));
//                });

            },

            failure: function (response) {
                alert(response.d);
            }

        });
    },
    onOfferLoad: function (e) {
        e.preventDefault();
        var itemId = $(e.currentTarget).attr('id');

        $("#id_for_main").load('offers.html', function () {
            var main = new OffersView();
        });

    },
    /*   <a title=
     <a  title="Early booking Bulgaria" id="first-offer">
     <img src="Photos/bulgariaa.jpg" alt="Bulgaria" width="275" height="175">
     <div >Early booking Bulgaria 2017</div>
     
     </a>
     */




    onDropDownPopulate: function (e) {
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/offers",
            dataType: "json",
            crossDomain: true,
            success: function (data) {

                $.each((data), function () {
                    $('#dropDownHome').append($("<li></li>").val(this['Destination']).html(this['Destination']));
                });
            },
            failure: function (response) {
                alert(response.d);
            }

        });
    },
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