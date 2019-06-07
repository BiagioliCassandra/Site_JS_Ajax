var requestURL = "http://localhost/Lab/semaine25/Ajax/js/customer.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var customers = request.response;
    //console.log(customers);
    showCustomer(customers);
}

function showCustomer(jsonObj) {
    var customers = jsonObj["customers"];

    var table = document.createElement("table");
    var tHead = document.createElement("thead");
    var trHead = document.createElement("tr");
    var thHeadId = document.createElement("th");
    var thHeadName = document.createElement("th");
    var thHeadAge = document.createElement("th");
    var thHeadCity = document.createElement("th");
    var tBody = document.createElement("tbody");
    var trBody = document.createElement("tr");

    thHeadId.innerHTML = "Id";
    thHeadName.innerHTML = "Nom";
    thHeadAge.innerHTML = "Age";
    thHeadCity.innerHTML = "Ville";

    table.appendChild(tHead);
    tHead.appendChild(trHead);
    trHead.appendChild(thHeadId);
    trHead.appendChild(thHeadName);
    trHead.appendChild(thHeadAge);
    trHead.appendChild(thHeadCity);
    table.appendChild(tBody);
    tBody.appendChild(trBody);

    for (var i =0; i < customers.length; i++) {
        var thBodyId = document.createElement("th");
        var thBodyName = document.createElement("th");
        var thBodyAge = document.createElement("th");
        var thBodyCity = document.createElement("th");
        var br = document.createElement("br");

        thBodyId.innerHTML = customers[i].id;
        thBodyName.innerHTML = customers[i].name;
        thBodyAge.innerHTML = customers[i].age;
        thBodyCity.innerHTML = customers[i].city;

        thBodyCity.appendChild(br);
        trBody.appendChild(thBodyId);
        trBody.appendChild(thBodyName);
        trBody.appendChild(thBodyAge);
        trBody.appendChild(thBodyCity);
    }
document.getElementsByTagName("main")[0].appendChild(table);
}