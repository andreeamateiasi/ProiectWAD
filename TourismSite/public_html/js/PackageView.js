
PackageView = function () {
    this.initComponent();
};
PackageView.prototype = {
    initComponent: function () {
        this.attachListeners();
    },
    attachListeners: function () {
        //$("#datetimepicker1").on('click', $.proxy(this.functionDateTime1, this));
        // $("#datetimepicker2").on('click', $.proxy(this.functionDateTime2, this));

    },
    onDropDownPackagePagePopulate: function (itemId) {
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/tripitinerariums",
            dataType: "json",
            crossDomain: true,
            success: function (data) {

                $.each((data), function () {
                    //$('#dropDownHome').append($("<li></li>").val(this['Destination']).html(this['Destination']));
                    if (itemId == this.PackageId) {
                        console.log("trip it id for package" + itemId);
                        var elem1 = document.createElement("li");
                        elem1.className = 'li_dropdown_home';
                        elem1.id = this.PackageId;

                        var textElem2 = document.createTextNode(this.Plane + " - " + this.Start + " to " + this.Finish + " - " + this.Price);
                        elem1.appendChild(textElem2);

                        var element = document.getElementById("drop_down_trip");
                        element.appendChild(elem1);
                        //li_dropdown_home
                    }
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
                        
                        var textElem2 = document.createTextNode("You will be staying at "+this.Hotel
                                +", meals included: "+this.Food+". This package is for "
                                +this.NoPassengers+" passengers");
                        elem.appendChild(textElem2);
                    }
                });
            },
            failure: function (response) {
                alert(response.d);
            }
        });


    },

    functionDateTime1: function () {

//        $("#datetimepicker1").kendoDateTimePicker({
//            value: new Date()
//        });
        $("#datetimepicker1").kendoDateTimePicker()
                .closest(".k-widget")
                .attr("id", "datetimepicker_wrapper");

        var datetimepicker = $("#datetimepicker1").data("kendoDateTimePicker");

        var setValue = function () {
            datetimepicker.value($("#value").val());
        };
    },
    functionDateTime2: function () {

//        $("#datetimepicker2").kendoDateTimePicker({
//            value: new Date()
//        });
        $("#datetimepicker2").kendoDateTimePicker()
                .closest(".k-widget")
                .attr("id", "datetimepicker_wrapper");

        var datetimepicker = $("#datetimepicker1").data("kendoDateTimePicker");

        var setValue = function () {
            datetimepicker.value($("#value").val());
        };
    }
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
