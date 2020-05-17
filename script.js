function generatePassword() {

    /// ask for length
    var l = window.prompt("What is the length of the password from 8 to 128")

    /// making sure length meets criteria 
    if (l < 8 || l > 128) {

        // alert("The minimum is 8 and maximum is 128")

        l = window.prompt("Pick a number between 8 and 128")

    }

    else {

        // asking what values desired in the password elements
        var length = l,
            charset = "",
            retVal = "", lower = "", upper = "", number = "", special = "";


        lower = window.prompt("do you want lower case ( y or n ) ?");

        if (lower === "y") {
            charset += "abcdefghijklmnopqrstuvwxyz";
        }


        upper = window.prompt("do you want upper case ( y or n ) ?");
        if (upper === "y") {
            charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }


        number = window.prompt("do you want numbers ( y or n ) ?");
        if (number === "y") {
            charset += "0123456789";
        }

        special = window.prompt("do you want special characters (y or n)?");
        if (special === "y") {
            charset += "-*%$#@!&()_+~";
        }

        // generates the password using the included characters

        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        var pass = document.getElementById("password");

        pass.innerHTML = retVal;

    }


}
