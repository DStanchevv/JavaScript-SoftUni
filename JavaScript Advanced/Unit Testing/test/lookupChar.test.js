let {assert} = require("chai");
let {lookupChar} = require("../07. JS-Advanced-Unit-Testing-and-Error-Handling-Exercise-Resources/charLookup");

describe("Test lookupChar with incorrect type", ()=>{
    it("Result should be undefined with first parameter", ()=>{
        assert.equal(lookupChar(5, 5), undefined);
    });

    it("Result should be undefined with second parameter", ()=>{
        assert.equal(lookupChar("Pesho", "Gosho"), undefined);
    });

    it("Result should be undefined with second parameter", ()=>{
        assert.equal(lookupChar("Pesho", 5.5), undefined);
    });

    it("Result should be undefined with first parameter", ()=>{
        assert.equal(lookupChar([], 0), undefined);
    })
})

describe("Test lookupChar with correct type but value of index is incorrect", ()=>{
    it("Result should be Incorrect index with bigger index", ()=>{
        assert.equal(lookupChar("Todor", 100), "Incorrect index");
    });
    
    it("Result should be Incorrect index with equal index", ()=>{
        assert.equal(lookupChar("Todor", 5), "Incorrect index");
    });
    
    it("Result should be Incorrect index with negative index", ()=>{
        assert.equal(lookupChar("Todor", -5), "Incorrect index");
    });
})

describe("Test lookupChar with correct type and value", ()=>{
    it("Result should be T with zero index", ()=>{
        assert.equal(lookupChar("Todor", 0), "T");
    });
    it("Result should be r with 4 index", ()=>{
        assert.equal(lookupChar("Todor", 4), "r");
    });
})