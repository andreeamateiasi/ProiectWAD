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
        } else
        {
            $("#username").next().addClass("hide");
        }
        if ($("#password").val().length === 0)
        {
            $("#password").next().removeClass("hide");
        } else
        {
            $("#password").next().addClass("hide");
        }
    },
    onLogin: function () {
        this.onInputBlur();
        $('#notification_li').empty();

        if ($("#alert_icon_username").hasClass('hide') && $("#alert_icon_password").hasClass('hide'))

        {
            
            var username = $("#username").val();
            var password = $("#password").val();
//            var user = {
//              username:  username,
//              password: password
//            };
            $.ajax({
                type: "GET",
                url: "http://localhost:57312/api/users",
                dataType: "json",
                crossDomain: true,
                success: function (data) {

                    $.each((data), function () {
                        if (username == this.UserNane && password == this.password) {
                            console.log("found" + username + " " + password);
                            console.log(this.user);
                            window.location.href = "index.html";
                            window.localStorage.setItem('sessionToken', this.current()._sessionToken);
                            window.localStorage.setItem('username', username);
                        }
                    });
                },
                failure: function (response) {
                    alert(response.d);
                }
            });

        } else
        {
            $('#notification_li').append("<div class='alert alert-danger'><strong>Error!</strong> Enter username and password.</div>");
        }
    },

    initFacebook: function () {


    }
};

$(document).ready(function () {
    var login = new Login();

});