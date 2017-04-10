function Login() {
    this.init();
}

Login.prototype = {
    init: function () {

        this.attachListeners();
        this.initKendoComponents();
        this.initFacebook();
    },
    attachListeners: function () {
        $('#username').on('keyup', $.proxy(this.onInputBlur, this));
        $('#password').on('keyup', $.proxy(this.onInputBlur, this));
        $('#login_button').on('click', $.proxy(this.onLogin, this));
        $('#password').on("keyup", function (e) {
            if (e.which === 13) {
                $('#login_button').trigger('click');
            }
        });
        


    },
    initKendoComponents: function () {
        
    },
    onInputBlur: function (event) {
        if ($("#username").val().length === 0)
        {
            $("#username").next().removeClass("hide");
        }
        else
        {
            $("#username").next().addClass("hide");
        }
        if ($("#password").val().length === 0)
        {
            $("#password").next().removeClass("hide");
        }
        else
        {
            $("#password").next().addClass("hide");
        }
    },
    onLogin: function () {
        
    },
    initFacebook: function () {
        
        
    }
};

$(document).ready(function () {
    var login = new Login();

});