MyProfile = function () {
    this.initComponents();
    var arrayTripId = [];
};
MyProfile.prototype = {
    initComponents: function () {
        this.onFormPopulate();
        //this.onSvaeButton();
        this.attachListeners();
        this.getTripIds();
    },
    attachListeners: function () {
        $('#save_changes_my_profile_bttn').on('click', $.proxy(this.onSaveButton, this));

    },
    onFormPopulate: function () {
        var userName = window.localStorage.getItem('username');
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/users/" + userName,
            dataType: "json",
            success: function (data) {
                $.each(data, function () {
                    $('#userId').val(this.UserId);
                    $('#usersType').val(this.userType);
                    $('#firstName').val(this.FirstName);
                    $('#lastName').val(this.LastName);
                    $('#userName').val(this.UserNane);
                    $('#email').val(this.Email);
                    $('#phone_num').val(this.PhoneNumber);
                });
            }
        });
    },
    onSaveButton: function () {
        var userId = $('#userId').val();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var userName = $('#userName').val();
        var email = $('#email').val();
        var phone = $('#phone_num').val();

        var obj = {
            'FirstName': firstName,
            'LastName': lastName,
            'UserNane': userName,
            'Email': email,
            'PhoneNumber': phone
        };
        $.ajax({
            type: 'PUT',
            url: "http://localhost:57312/api/users/" + userId,
            data: obj,
            success: function () {
                console.log('user updated successfully');
            },
            error: function () {
                console.log('error updating user');
            }
        });
    },
    getTripIds: function () {
        //table_package_info_books
        var userId = $('#userId').val();
        var arrayTripId = [];
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/books/user/" + userId, //de def in api
            dataType: "json",
            crossDomain: true,
            success: function (data) {

                $.each(data, function () {
                    arrayTripId.push(this.TripItinerariumId);
                });
            },
            failure: function (response) {
                alert(response.d);
            }

        });
        if (arrayTripId.length !== 0) {
            this.getTrips(arrayTripId);
        }
    }
   
};
