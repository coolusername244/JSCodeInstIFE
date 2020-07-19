//this test is expecting the result of addition to be 42. check calc for function

describe("calculator", function(){
    describe("Addition tests", function(){
        it("should return 42", function(){
            expect(addition(20,22)).toBe(42);
        });
    });
});