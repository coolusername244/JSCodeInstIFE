function addition (num1, num2) {
    if(typeof(num1) == "number" && typeof(num2) == "number") {      // This function is checking to see if both parameters are numbers, if they are, then its job is to add them together
    return num1 + num2;
    } else {
        return "Error!";            // if one of the parameters are not a number, it will return an error - DEFENSIVE PROGRAMMING
    }           
}