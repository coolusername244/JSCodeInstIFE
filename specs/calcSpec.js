// we now have 3 tests that will pass within Jasmine

describe("calculator", function(){              // this is the name of what we are testing and will be showed in Jasmine
    describe("Addition tests", function(){      // specifically what we are testing
        it("should return 42", function(){      // what we expect to see
            expect(addition(20,22)).toBe(42);   // addition function in use with expected outcome - will return true/false
        });
        it("should return 26", function() {
            expect(addition(7, 19)).toBe(26);
        })
        it("should return 100", function() {
            expect(addition(90, 10)).toBe(100);
        })
    });
});