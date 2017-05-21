UsersView = function () {
    this.initComponents();
};
UsersView.prototype = {
    initComponents: function () {

    },
    attachListners: function () {

    },
    onAllUsersPopulate: function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:57312/api/users",
            dataType: "json",
            success: function (data) {

                $.each(data, function () {

                    var tr = document.createElement("tr");
                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var td3 = document.createElement("td");
                    var td4 = document.createElement("td");
                    var td5 = document.createElement("td");
                    var td6 = document.createElement("td");
                    var firstName = document.createTextNode(this.FirstName);
                    var lastName = document.createTextNode(this.LastName);
                    var userName = document.createTextNode(this.UserNane);
                    var phone = document.createTextNode(this.PhoneNumber);
                    var email = document.createTextNode(this.Email);
                    var userType = document.createTextNode(this.userType);
                    //var edit = document.createTextNode("<td><p data-placement='top' data-toggle='tooltip' title='Edit'><button class='btn btn-primary btn-xs' data-title='Edit' data-toggle='modal' data-target='#edit' ><span class='glyphicon glyphicon-pencil'></span></button></p></td>");
                    td1.appendChild(userName);
                    td2.appendChild(firstName);
                    td3.appendChild(lastName);
                    td4.appendChild(userType);
                    td5.appendChild(email);
                    td6.appendChild(phone);
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tr.appendChild(td6);
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