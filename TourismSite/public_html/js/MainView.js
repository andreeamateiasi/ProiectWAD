MainView = function () {
    this.initComponent();

};
MainView.prototype = {

    initComponent: function () {

        this.attachListeners();
        this.onMainMenuItem();
        this.onNavItem();

        this.onDropDownPopulate();
        this.onOfferPopulate();
    },
    attachListeners: function () {
        //$().on('click', $.proxy(this.function1, this));
        $('nav').off();
        $('li').on('click', 'a', $.proxy(this.onMainMenuItem, this));
        $('nav').on('click', 'li', $.proxy(this.onNavItem, this));
        $('#smth').on('click', 'button', $.proxy(this.onDropDownPopulate, this));
        $('#dorpDownHome').on('click', 'li', $.proxy(this.onOfferPage, this));
        $('nav').on('click', '#home', $.proxy(this.onOfferPopulate, this));
        //$('nav').find('#home').trigger('click');
    },
    onOfferPage: function (e) {

        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/offers",
            dataType: "json",

            success: function (data) {
                $("#ul_offer_page").html('');
                var items = [];
                $.each(data, function (id, option) {
                    items.push('<li class="li_offer_ul"><div class="floating-box" style="margin-top: 10%">' + option.Destionation + '</div></li>');
                });
                $("#ul_offer_page").append(items.join(''));
                /*$.each((data), function () {
                    $('#ul_offer_page').append($("<li class='li_offer_ul'></li>").val(this['Destination']).html(this['Destination']));
                });*/

            },

            failure: function (response) {
                alert(response.d);
            }

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