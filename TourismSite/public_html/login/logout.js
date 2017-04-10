

function Logout() {
    this.init();
}

Logout.prototype = {
    init: function () {
        Parse.initialize("CbMhbUkMkQyMySJ5gBWC6tCHXc96iLayYBSZ5jxy", "nnku4WAbz4EjffUKCZ5RkSNxXU4zNtG1nZ5qaPuQ");
        this.attachListeners();
    },
    attachListeners: function () {
        $('#log_out').on('click', $.proxy(this.onLogOut, this));
    },
    onLogOut: function (event) {
        event.preventDefault();
        
        Parse.User.logOut();
        var currentUser = Parse.User.current();  // this will now be null
        console.log(currentUser);
        localStorage.clear();
        window.location.href = "login/login.html";
    }
};

$(document).ready(function () {
    var logout = new Logout();

});