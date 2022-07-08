

// TEST FUNCTION
// function test(){
// var date = document.getElementById("date").value;
// var fullName = document.getElementById("fname").value + " " + document.getElementById("lname").value;
// var address = document.getElementById("address").value;
// var postal = document.getElementById("postal").value;
// var type = document.querySelector('input[name="telType"]:checked').value;
// var tel = document.getElementById("tel").value;
// var email = document.getElementById("email").value;
// var currentClient = document.querySelector('input[name="currentClient"]:checked').value;
// var gender = document.querySelector('input[name="gender"]:checked').value;
// var age = document.getElementById("age").value;
// var income = document.getElementById("income").value;
// var ownership = document.querySelector('input[name="ownership"]:checked').value;
// var expenses = document.querySelectorAll('input[type="checkbox"]:checked');

//     var div = document.getElementById("arraydiv");

//     var string = date + fullName + address + postal + type + tel + email + currentClient + gender + age + income + ownership;
//     var i = 0;
//     for(i = 0; i < expenses.length; i++){
//         string += expenses[i].value;
//     }

//     div.innerHTML = string;
// }

var customers = [];


function add() {
    var customer = {
        fullName: document.getElementById("fname").value + " " + document.getElementById("lname").value,
        address: document.getElementById("address").value,
        postal: document.getElementById("postal").value,
        phone: document.getElementById("tel").value,
        email: document.getElementById("email").value
    }

    customers.push(customer);
    document.getElementById("form").reset();
}

function display() {
    i = 0;
    var div = document.getElementById("arraydiv");
    var string = "";
    var box = "";
    div.innerHTML = "<h2 class='center'>Clients</h2>";
    for (var i = 0; i < customers.length; i++) {
        string = "<td><label for=" + customers[i].fullName + ">"  + customers[i].fullName + ", " + customers[i].address + ", " + customers[i].postal + ", " + customers[i].phone + ", " + customers[i].email + "</label></td></table><br>";
        box = "<table><tr><td><input type='checkbox' value='" + customers[i].fullName + "' name='item' ></td>";
        customerString = box + string;
        div.innerHTML += customerString;
    }

    div.innerHTML += "<button type='button' onclick='remove()'>Remove Selected Clients</button>";
}


function remove() {
    //get an array of all the checked elements
    var elements = document.querySelectorAll('input[name="item"]:checked');
    var i = 0;

    // go through the array and match the checked elements with the array of customer objects throught their firstname
    for (i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            var nameToDelete = elements[i].value;
            //find index of element to delete
            var index = customers.findIndex(item => item.fullName === nameToDelete);
            customers.splice(index, 1);
        }
    }
    //refresh the display
    display();
}