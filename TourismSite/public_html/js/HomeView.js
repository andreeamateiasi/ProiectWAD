/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
HomeView = function(){
    this.initComponent();
};
HomeView.prototype = {
     initComponent: function () {

        this.attachListeners();
       
        this.onDropDownPopulate();
        this.onHomePopulate();
        this.onOfferLoad();
    },
    attachListeners: function () {
        $('#smth').on('click', 'button', $.proxy(this.onDropDownPopulate, this));
        $('nav').on('click', '#home', $.proxy(this.onHomePopulate, this));
        $('#ul_offer_page').on('click', 'li', $.proxy(this.onOfferLoad, this));
    },


onHomePopulate: function (e) {

        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/offers",
            dataType: "json",

            success: function (data) {
                
                //("#ul_offer_page").html('');
                var items = [];
                $('#ul_offer_page').empty();

                $.each(data, function () {
                    //items.push($("<li class='li_offer_ul'></li>").val(this['Destination']).html(this['Destination']));

                    var elem1 = document.createElement("li");
                    elem1.className = 'li_offer_ul';
                    elem1.id = this.OfferId;
                    var elem2 = document.createElement("div");
                    elem2.className = "div_img_offer";
                    elem2.className = "floating-box";

                    elem2.style["margin-top"] = "10%";
                    var elem3 = document.createElement("img");
                    elem3.setAttribute('src', this.Image);
                    elem3.setAttribute('width', '275');
                    elem3.setAttribute('height', '175');
                    elem3.className = "img_class";
                    var elem4 = document.createElement("a");
                    elem4.className = "container";

                    var textElem4 = document.createTextNode(this.Destination);
                    elem4.appendChild(textElem4);
                    // var imgElem3 = document.createTextNode(this.Image);
                    elem2.appendChild(elem3);
                    elem2.appendChild(elem4);
                    elem1.appendChild(elem2);

                    var element = document.getElementById("ul_offer_page");
                    element.appendChild(elem1);

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
    onOfferLoad: function (event) {
        var itemId = $(event.currentTarget).attr('id');

        $("#id_for_main").load('offers.html', function () {
            var offer = new OffersView();
            offer.onPackagesPopulate(itemId);
        });
    },
    /*   <a title=
     <a  title="Early booking Bulgaria" id="first-offer">
     <img src="Photos/bulgariaa.jpg" alt="Bulgaria" width="275" height="175">
     <div >Early booking Bulgaria 2017</div>
     
     </a>
     */

    onDropDownPopulate: function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/offers",
            dataType: "json",
            crossDomain: true,
            success: function (data) {

                $.each((data), function () {
                    //$('#dropDownHome').append($("<li></li>").val(this['Destination']).html(this['Destination']));

                    var elem1 = document.createElement("li");
                    elem1.className = 'li_dropdown_home';
                    elem1.id = this.OfferId;

                    var textElem2 = document.createTextNode(this.Destination);
                    elem1.appendChild(textElem2);

                    var element = document.getElementById("dropDownHome");
                    element.appendChild(elem1);
                    //li_dropdown_home
                });
            },
            failure: function (response) {
                alert(response.d);
            }

        });
        $('#dropDownHome').empty();
    }

};

