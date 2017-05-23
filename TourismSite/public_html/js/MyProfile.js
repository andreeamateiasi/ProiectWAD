MyProfile = function () {
    this.initComponents();
    var arrayTripId = [];
};
MyProfile.prototype = {
    initComponents: function () {
        this.onFormPopulate();
        //this.onSvaeButton();
        this.attachListeners();
        this.getTrips();
        //this.populate();
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
                    $('#pass').val(this.password);
                });
            }
        });
    },

    onSaveButton: function () {
        var userId = $('#userId').val();
        var userType = $('#usersType').val();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var userName = $('#userName').val();
        var email = $('#email').val();
        var phone = $('#phone_num').val();
        var password = $('#pass').val();
        var obj = {
            'UserId': userId,
            'UserNane': userName,
            'FirstName': firstName,
            'userType': userType,
            'LastName': lastName,
            'Email': email,
            'PhoneNumber': phone,
            'password': password
        };
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            type: 'PUT',
            url: "http://localhost:57312/api/users/put/" + userId,
            data: JSON.stringify(obj),
            success: function () {
                console.log('user updated successfully');
            },
            error: function () {
                console.log('error updating user');
            }
        });
        localStorage.removeItem('username');
        window.localStorage.setItem('username', userName);
        this.onFormPopulate();
    },
    getTripIds: function (arrayTripId) {
        arrayTripId = [];
        var userId = window.localStorage.getItem('userId');//var userId = $('#userId').val();
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/books/user/" + userId,
            dataType: "json",
            crossDomain: true,
            async: false,
            success: function (data) {

                $.each(data, function () {
                    if (typeof this.TripItinerariumId !== 'undefined')
                        arrayTripId.push(this.TripItinerariumId);
                });
            },
            failure: function (response) {
                alert(response.d);
            }

        });
        return arrayTripId;


    },
    getTrips: function () {
        $("#table_package_info_books").empty();
        var array = this.getTripIds(array);
        for (i = 0; i < array.length; i++) {
           
            this.populate(array[i]);
        }
    },
    populate: function (id) {
        $.ajax({
            type: 'GET',
            url: "http://localhost:57312/api/tripItinerariums/getTripPackage/"+id,
            dataType: "json",
            async: false,
             success: function (data) {
                 console.log(data);
                //$.each(data, function () {

                    var trU = document.createElement("tr");
                    
                    var td01 = document.createElement("td");
                    var td02 = document.createElement("td");
                    var td03 = document.createElement("td");
                    var td04 = document.createElement("td");
                    var td05 = document.createElement("td");
                    var td06 = document.createElement("td");

                    var city = document.createTextNode(data.DestinationCity);
                    var hotel = document.createTextNode(data.Hotel);
                    var flight = document.createTextNode(data.Plane);
                    var departure = document.createTextNode(data.Start);
                    var returne = document.createTextNode(data.Finish);
                    var price = document.createTextNode(data.Price);


                    td01.appendChild(city);
                    td02.appendChild(hotel);
                    td03.appendChild(flight);
                    td04.appendChild(departure);
                    td05.appendChild(returne);
                    td06.appendChild(price);

                    trU.appendChild(td01);
                    trU.appendChild(td02);
                    trU.appendChild(td03);
                    trU.appendChild(td04);
                    trU.appendChild(td05);
                    trU.appendChild(td06);

                    var elementU = document.getElementById("table_package_info_books");
                    elementU.appendChild(trU);


               // });

            },
            failure: function (response) {
                alert(response.d);
            }
        });
           
    }
    
};
