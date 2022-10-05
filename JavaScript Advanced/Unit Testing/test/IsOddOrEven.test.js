let {assert} = require("chai");
let {isOddOrEven} = require("../07. JS-Advanced-Unit-Testing-and-Error-Handling-Exercise-Resources/isOddOrEven");

describe("test isOddOrEven functionality", ()=>{
    describe("test isOddOrEven with incorrect value", ()=>{
        it("Result should be undefine with array argument", ()=>{
        assert.equal(isOddOrEven([]), undefined)
        });
    
        it("Result should be undefine with empty object argument", ()=>{
        assert.equal(isOddOrEven({}), undefined)
        });

        it("Result should be undefine with object argument", ()=>{
        assert.equal(isOddOrEven({name: "Pesho"}))
        });

        it("Result should be undefine with number argument", ()=>{
        assert.equal(isOddOrEven(1), undefined)
        });

        it("Result should be undefine with boolean argument", ()=>{
        assert.equal(isOddOrEven(true), undefined)
        });
    })

    describe("test isOddOrEven with correct value", ()=>{
        it("Result should be even with `Love`", ()=>{
            assert.equal(isOddOrEven("love"), "even")
        })

        it("Result should be odd with `Todor`", ()=>{
            assert.equal(isOddOrEven("Todor"), "odd")
        })
    })
})
