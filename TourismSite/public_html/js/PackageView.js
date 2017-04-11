
PackageView = function () {
    this.initComponent();
};
PackageView.prototype = {
    initComponent: function () {
        this.attachListeners();

    },
    attachListeners: function () {
        $("#datetimepicker1").on('click', $.proxy(this.functionDateTime1, this));
        $("#datetimepicker2").on('click', $.proxy(this.functionDateTime2, this));
       
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

$(document).ready(function () {
    var mainApp = new PackageView();



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
});
