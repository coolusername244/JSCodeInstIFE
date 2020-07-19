describe("calculator", function(){       
    
    beforeEach(function(){                          // The 'beforeEach' function makes sure that the calculator has
        calc = new Calculator;                      // reset to 0 before starting the next test.
    });                                             // Without the 'beforeEach' function, the tests will fail and give
                                                    // a result of 68 because that is the total of all numbers below.
    describe("Addition tests", function(){          // The calculator will keep on adding until it is told to reset.
        it("should return 42", function(){    
            calc.add(20);
            calc.add(22);  
            expect(calc.value).toBe(42);   
        });
        it("should return 26", function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function() {
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});