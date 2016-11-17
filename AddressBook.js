
var contacts = [["Greg Dorr", "651-783-2528", "dorrg@augsburg.edu"],
                ["Bob", "911", "Bob@bob.bob"],
                ["Peter", "7", "peter@peter.peter"]];

//displays the info for the user
function displayContact(event, num) {
    //shows the tags
    document.getElementById("info").style.display = "inline";

    //getting the values in the innerHTML
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");

    if(name.style.display == "none"){
        hideTextFields();
    }

    //adds the items to the screen
    name.innerHTML = contacts[num][0];
    phone.innerHTML = contacts[num][1];
    email.innerHTML = contacts[num][2];

}

//allows the user to edit the data
function editData(event){

    //getting the values in the innerHTML
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");

    //saving the ids to a var
    var nameEdit =  document.getElementById("nameEdit");
    var phoneEdit = document.getElementById("phoneEdit");
    var emailEdit = document.getElementById("emailEdit");

    //setting the text in the text field
    nameEdit.value = name.innerHTML;
    phoneEdit.value = phone.innerHTML;
    emailEdit.value = email.innerHTML;

    //displaying the variables
   showTextFields();

}

function showTextFields(){

    //display fields
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");

    //text fields
    var nameEdit =  document.getElementById("nameEdit");
    var phoneEdit = document.getElementById("phoneEdit");
    var emailEdit = document.getElementById("emailEdit");


    //showing text fields
    nameEdit.style.display = "inline";
    phoneEdit.style.display = "inline";
    emailEdit.style.display = "inline";

    //hiding display fields
    name.style.display = "none";
    phone.style.display = "none";
    email.style.display = "none";
}

function hideTextFields(){

    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");

    //saving the ids to a var
    var nameEdit =  document.getElementById("nameEdit");
    var phoneEdit = document.getElementById("phoneEdit");
    var emailEdit = document.getElementById("emailEdit");

    //hiding the text fields
    nameEdit.style.display = "none";
    phoneEdit.style.display = "none";
    emailEdit.style.display = "none";

    //showing the display fields
    name.style.display = "inline";
    phone.style.display = "inline";
    email.style.display = "inline";
}

//saves the data after it's been changed
function save(event){
    var index = indexOf(document.getElementById("name").innerHTML);

    contacts[index][0] = document.getElementById("nameEdit").value;
    contacts[index][1] = document.getElementById("phoneEdit").value;
    contacts[index][2] = document.getElementById("emailEdit").value;

    if(index == 0){
        document.getElementById("contact1").text = document.getElementById("nameEdit").value;
    }
    else if(index == 1){
        document.getElementById("contact2").text = document.getElementById("nameEdit").value;
    }
    else {
        document.getElementById("contact3").text = document.getElementById("nameEdit").value;
    }

    displayContact(event,index);
}

//getPositionInArray
function indexOf(name) {
    for (var row = 0; row < contacts.length; row++) {
        for (var col = 0; col < contacts[row].length; col++) {
            if(name == contacts[row][col]){
                return row;
            }
        }
    }
}

//Home button is pushed
//it hides all the info
function hideInfo(event){
    document.getElementById("info").style.display = "none";
}