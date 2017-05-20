
PackageView = function () {
    this.initComponent();
};
PackageView.prototype = {
    initComponent: function () {
        this.attachListeners();
        this.bookPackage();
    },
    attachListeners: function () {

    },
    bookPackage: function(){
        
        var userId;//get from token
        var tripItinerariumId;//get from dropdown
        
        var obj = {"UserId": userId, "TripItinerariumId": tripItinerariumId };
        
        $.ajax({
            type: "POST",
            url: "http://localhost:57312/api/books",
            data: JSON.stringify(obj),
            dataType: 'json',
            crossDomain: true,
            success: function () {
                console.log('book made  succesfully');
            },
            fail: function () {
                console.log('failed to book the package');
            }

        });
        
    },
    onDropDownPackagePagePopulate: function (itemId) {
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/tripitinerariums/package/"+itemId,
            dataType: "json",
            crossDomain: true,
            success: function (data) {

                $.each((data), function () {
                    //$('#dropDownHome').append($("<li></li>").val(this['Destination']).html(this['Destination']));
                   // if (itemId == this.PackageId) {
                        console.log("trip it id for package" + itemId);
//                        var elem1 = document.createElement("li");
//                        elem1.className = 'li_dropdown_home';
//                        elem1.id = this.PackageId;
//
//                        var textElem2 = document.createTextNode(this.Plane + " - " + this.Start + " to " + this.Finish + " - " + this.Price);
//                        elem1.appendChild(textElem2);
//
//                        var element = document.getElementById("drop_down_trip");
//                        element.appendChild(elem1);
//                        
//                        
//                            
                        var tr = document.createElement("tr");
                        var td1 = document.createElement("td");
                        var td2 = document.createElement("td");
                        var td3 = document.createElement("td");
                        var td4 = document.createElement("td");
                        var plane = document.createTextNode(this.Plane);
                        var start = document.createTextNode(this.Start);
                        var finish = document.createTextNode(this.Finish);
                        var price = document.createTextNode(this.Price);
                        td1.appendChild(plane);
                        td2.appendChild(start);
                        td3.appendChild(finish);
                        td4.appendChild(price);
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                        tr.appendChild(td3);
                        tr.appendChild(td4);
                        var element = document.getElementById("table_package_info_page");
                        element.appendChild(tr);
                        //li_dropdown_home
                   // }
                });
            },
            failure: function (response) {
                alert(response.d);
            }

        });
        $('#dropDownHome').empty();

    },
    onPackagePagePopulate: function (itemId) {
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/packages",
            dataType: "json",
            success: function (data) {
                // var tempId = this.OfferId;
                //var items = [];
                $.each(data, function () {

                    console.log("try to add img package page");
                    console.log("package id  :: " + this.PackageId);
                    console.log("item id (package)::  " + itemId);
                    if (this.PackageId == itemId) {
                        var li1 = document.getElementById('1img');
                        li1.src = this.Image1;
                        var li2 = document.getElementById('2img');
                        li2.src = this.Image2;
                        var elem = document.getElementById('info_package');

                        var textElem2 = document.createTextNode("You will be staying at " + this.Hotel
                                + ", meals included: " + this.Food + ". This package is for "
                                + this.NoPassengers + " passengers");
                        elem.appendChild(textElem2);
                        var p1 = document.getElementById('location');
                        var textp1 = document.createTextNode(this.Location);
                        p1.appendChild(textp1);
                        var p2 = document.getElementById('facilityHotel');
                        var textp2 = document.createTextNode(this.HotelFacility);
                        p2.appendChild(textp2);
                        var p3 = document.getElementById('facilityRoom');
                        var textp3 = document.createTextNode(this.RoomFacility);
                        p3.appendChild(textp3);
                    }
                });
            },
            failure: function (response) {
                alert(response.d);
            }
        });


    },

};



//
//
//
//    $("#enable").click(function () {
//        datetimepicker.enable();
//    });
//
//    $("#disable").click(function () {
//        datetimepicker.enable(false);
//    });
//
//    $("#readonly").click(function () {
//        datetimepicker.readonly();
//    });
//
//    $("#openDateView").click(function () {
//        datetimepicker.open("date");
//    });
//
//    $("#openTimeView").click(function () {
//        datetimepicker.open("time");
//    });
//
//    $("#closeDateView").click(function () {
//        datetimepicker.close("date");
//    });
//
//    $("#closeTimeView").click(function () {
//        datetimepicker.close("time");
//    });
//
//    $("#value").kendoDateTimePicker({
//        change: setValue
//    });
//
//    $("#set").click(setValue);
//
//    $("#get").click(function () {
//        alert(datetimepicker.value());
//    });
