UsersView = function () {
    this.initComponents();
};
UsersView.prototype = {
    initComponents: function () {
        this.attachListners();

    },
    attachListners: function () {

        $('table').on('click', 'tr', $.proxy(this.getId, this));
        $('#edit_bttn').on('click', $.proxy(this.onFormEditUserPopulate, this));
        $('#submit_edited_user').on('click', $.proxy(this.saveEditedUser, this));
        $('#del_bttn').on('click', $.proxy(this.deleteUser, this));
    },
    getUser: function(id){
        var obj;
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/users/get/"+id,
            dataType: 'json',
            async: false,
            cache: false,
            success: function (data) {
//                $.each(data, function(){
//                    obj = data;
//                });
                obj = data[0];

            },
            fail: function () {
                console.log('failed');
            }

        });
        return obj;

    },
    deleteUser: function () {
        var id= window.localStorage.getItem('idForEdit');
        var obj = this.getUser(id);
        $.ajax({
            type: 'DELETE',
            url: "http://localhost:57312/api/users/delete/" + id,
           // data: JSON.stringify(obj),
           // contentType:'application/json',  // <---add this
    //dataType: 'text', 
            success: function(){
                console.log('success');
            },
            error: function(){
                console.log('error');
            }
        });
    },
    getId: function (e) {
        if (typeof e !== 'undefined') {
            var id = $(e.currentTarget).attr('id');
            window.localStorage.setItem('idForEdit', id);
        }
        return id;
    },

    saveEditedUser: function () {
        var userId = $('#userIdEdit').val();
        var userType = $('#usersTypeEdit').val();
        var firstName = $('#firstNameEdit').val();
        var lastName = $('#lastNameEdit').val();
        var userName = $('#userNameEdit').val();
        var email = $('#emailEdit').val();
        var phone = $('#phone_numEdit').val();
        var password = $('#passEdit').val();
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
            url: "http://localhost:57312/api/users/" + userId,
            data: JSON.stringify(obj),

            success: function () {
                console.log('user updated successfully by admin');

            },
            error: function () {
                console.log('error updating user by admin');
            }
        });
        this.onAllUsersPopulate();

    },
    onFormEditUserPopulate: function () {
        var itemId = window.localStorage.getItem('idForEdit');
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/users/get/" + itemId,
            dataType: "json",
            success: function (data) {
                $.each(data, function () {
                    $('#userIdEdit').val(this.UserId);
                    $('#usersTypeEdit').val(this.userType);
                    $('#firstNameEdit').val(this.FirstName);
                    $('#lastNameEdit').val(this.LastName);
                    $('#userNameEdit').val(this.UserNane);
                    $('#emailEdit').val(this.Email);
                    $('#phone_numEdit').val(this.PhoneNumber);
                    $('#passEdit').val(this.password);
                });
            }
        });
        window.localStorage.removeItem('userIdEdit');
    },
    saveChangesUser: function () {

    },
    onAllUsersPopulate: function () {
        $('#users_table').empty();
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/users",
            dataType: "json",
            success: function (data) {

                $.each(data, function () {

                    var tr = document.createElement("tr");
                    tr.id = this.UserId;
                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var td3 = document.createElement("td");
                    var td4 = document.createElement("td");
                    var td5 = document.createElement("td");
                    var td6 = document.createElement("td");
                    var td7 = document.createElement("td");
                    var td8 = document.createElement("td");
                    var userId = document.createTextNode(this.UserId);
                    var firstName = document.createTextNode(this.FirstName);
                    var lastName = document.createTextNode(this.LastName);
                    var userName = document.createTextNode(this.UserNane);
                    var phone = document.createTextNode(this.PhoneNumber);
                    var email = document.createTextNode(this.Email);
                    var userType = document.createTextNode(this.userType);
                    var pass = document.createTextNode(this.password);


                    td1.appendChild(userId);
                    td2.appendChild(firstName);
                    td3.appendChild(lastName);
                    td4.appendChild(userName);
                    td5.appendChild(userType);
                    td6.appendChild(email);
                    td7.appendChild(phone);
                    td8.appendChild(pass);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tr.appendChild(td6);
                    tr.appendChild(td7);
                    tr.appendChild(td8);

                    var element = document.getElementById("users_table");
                    element.appendChild(tr);



                });

            },
            failure: function (response) {
                alert(response.d);
            }
        });
    }

};