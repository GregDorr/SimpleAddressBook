
var contacts = [["Greg Dorr", "651-783-2528", "dorrg@augsburg.edu"],
                ["Bob", "911", "Bob@bob.bob"],
                ["Peter", "7", "peter@peter.peter"],
                ["Tyler Motzko", "651-757-7513", "motzko@augsburg.edu"]];

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

<<<<<<< HEAD
=======
    document.getElementById("editButton").style.display = "inline";

>>>>>>> dorrWorking
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
<<<<<<< HEAD
=======

    document.getElementById("saveButton").style.display = "inline";
    document.getElementById("editButton").style.display = "none";
>>>>>>> dorrWorking
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
<<<<<<< HEAD
=======

    document.getElementById("saveButton").style.display = "none";
    document.getElementById("editButton").style.display = "inline";
>>>>>>> dorrWorking
}

//saves the data after it's been changed
function save(event){
    var index = indexOf(document.getElementById("name").innerHTML);

<<<<<<< HEAD
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
=======

        //if its a new contact
        contacts[index][0] = document.getElementById("nameEdit").value;
        contacts[index][1] = document.getElementById("phoneEdit").value;
        contacts[index][2] = document.getElementById("emailEdit").value;
        document.getElementById("" + index).innerHTML = document.getElementById("nameEdit").value;

        //clearing the edit values
        document.getElementById("nameEdit").value = "";
        document.getElementById("phoneEdit").value = "";
        document.getElementById("emailEdit").value = "";
>>>>>>> dorrWorking

    displayContact(event,index);
}

//getPositionInArray
function indexOf(name) {
    for (var row = 0; row < contacts.length; row++) {
<<<<<<< HEAD
        for (var col = 0; col < contacts[row].length; col++) {
            if(name == contacts[row][col]){
                return row;
            }
=======
        if (name == contacts[row][0]) {
            return row;
>>>>>>> dorrWorking
        }
    }
}

//Home button is pushed
//it hides all the info
function hideInfo(event){
    document.getElementById("info").style.display = "none";
<<<<<<< HEAD
=======
}

function createContact(){

    var length = contacts.length;

    //creating anew list item thats an anchor
    var node = document.createElement("LI");
    var anchor = document.createElement("A");

    //adding attribures to the anchor
    var att1 = document.createAttribute("data-toggle");
    att1.value = "tab";
    //adding an action listener
    var att2 = document.createAttribute("onclick");
    att2.value = "displayContact(event,"+(length)+")";
    //setting the id
    //adding the attributes to the item
    anchor.setAttributeNode(att1);
    anchor.setAttributeNode(att2);

    anchor.id = ""+length;

    anchor.innerHTML = "New Contact";

    //push a blank document to the array
    contacts.push([document.getElementById("nameEdit").value,
        document.getElementById("phoneEdit").value,
        document.getElementById("emailEdit").value]);

    //appending th new item to the list
    node.appendChild(anchor);
    document.getElementById("contacts").appendChild(node);

    //click on the tab and button
    document.getElementById(""+length).click();
    document.getElementById("editButton").click();
}

function newContact(event){

    //making sure the data is empty
    document.getElementById("nameEdit").value = "";
    document.getElementById("phoneEdit").value = "";
    document.getElementById("emailEdit").value = "";

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    //showing the edit contact info
    document.getElementById("info").style.display = "inline";
    showTextFields();
    createContact();
>>>>>>> dorrWorking
}