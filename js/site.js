//Get the user entered string from the page
//controller function
function getString(){

    document.getElementById("alert").classList.add("invisible");

    let originalString = document.getElementById("originalString").value;

    let revString = reverseString(originalString);

    displayString(revString);
}

//Reverse the string
//logic function
function reverseString(originalString){

    let revString = [];

    //reverse string with a for loop
    let userString = document.getElementById("originalString").value;
    for (let i = userString.length - 1; i >= 0; i--){
        revString += userString[i];
    }
    return revString;
}

//Display the message
//view function
function displayString(revString){
    
    //Display message to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    //Show the alert box
    document.getElementById("alert").classList.remove("invisible");

}