
function Register() {
    this.init();
}

Register.prototype = {
    init: function () {
        this.attachListeners();
        //this.initKendoComponents();
    },
    attachListeners: function () {
        $('#register_button').on('click', $.proxy(this.onKendoWindow, this));
        $('body').on('click', '.save_info', $.proxy(this.addTo, this));
        
    },
    addTo: function (event) {
        event.preventDefault();
       
        var valid = true, input;
        var username = $('#userName').val();
        var firstname = $('#firstName').val();
        var lastname = $('#lastName').val();
        var email = $('#email').val();
        if (email === '') {
            valid = false;
            input = $('#email');
        }
        if (username === '') {
            valid = false;
            input = $('#userName');
        }
        if (firstname === '') {
            valid = false;
            input = $('#firstName');
        }
        if (lastname === '') {
            valid = false;
            input = $('#lastName');
        }
        if ($('#passwordForm').val() !== $("#confirmPassword").val()) {
            valid = false;
            $('#passwordForm, #confirmPassword').addClass('invalid');
        }
        if (!valid) {
            input.addClass('invalid');
        } else {
            
           //add to db
        }
    },
   
   
   

             

                    
   
    onKendoWindow : function () {
                if ($("#kendo_window").length === 0) {
                    $('.li_kendo').append('<div id="kendo_window"></div>');
                }
                var myWindow = $("#kendo_window");
                myWindow.kendoWindow({
                    width: "400px",
                    height: "500px",
                    modal: true,
                    close: function () {
                        $("#kendo_window").data('kendoWindow').destroy();
                    },
                    title: "Form to register.",
                    actions: ["Maximize", "Close"],
                    content: 'formRegister.html'
                }).data('kendoWindow').center().open();
            }
};
$(document).ready(function () {
    var register = new Register();
});