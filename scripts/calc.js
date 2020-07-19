Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {               // The calculator has changed to display a change in requirements
        this.value += number;                       // and show that testing will need to be rewritten to make sure 
    } else {                                        // that the new code passes
        alert("Error!");
    }
}