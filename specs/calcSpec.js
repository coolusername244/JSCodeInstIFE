describe("calculator", function(){              
    describe("Addition tests", function(){      
        it("should return 42", function(){      
            expect(addition(20,22)).toBe(42);   
        });
        it("should return 26", function() {
            expect(addition(7, 19)).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function() { // To make sure that only numbers are entered, we test that if 2 strings are put in as perameters, it returns the error - ref calc.js
            expect(addition("Hitchhikers", "Guide")).toBe("Error!");
        });
    });
});