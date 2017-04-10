

function Logout() {
    this.init();
}

Logout.prototype = {
    init: function () {
        this.attachListeners();
    },
    attachListeners: function () {
        $('#log_out').on('click', $.proxy(this.onLogOut, this));
    },
    onLogOut: function (event) {
        event.preventDefault();
        
        console.log(currentUser);
        localStorage.clear();
        window.location.href = "login/login.html";
    }
};

$(document).ready(function () {
    var logout = new Logout();

});