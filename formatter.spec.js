var mocha = require("mocha");
var chai = require("chai");
var formatter = require("./formatter");
var expect = chai.expect;

describe("formatter", function() {
  describe("#valueToAPIFormat", function() {
    describe("when there is no value", function() {
      it("should return 0", function() {
        expect(formatter.valueToAPIFormat("")).to.eq("0")
      })
    })

    describe("when the value is an integer", function() {
      it("should add a comma and two zeros", function() {
        expect(formatter.valueToAPIFormat("43")).to.eq("43.00");
      });
    });

    describe("when the value uses dot to separate", function() {
      describe("and have two decimal numbers", function() {
        it("should return the value", function() {
          expect(formatter.valueToAPIFormat("12.30")).to.eq("12.30");
        });
      });

      describe("and have three decimal numbers", function() {
        it("should round the number upward", function() {
          expect(formatter.valueToAPIFormat("53.999")).to.eq("54.00");
        });
      })
    });

    describe("when the value uses comma to separate", function() {
      describe("and have two decimal numbers", function() {
        it("should return the value", function() {
          expect(formatter.valueToAPIFormat("12,30")).to.eq("12.30");
        });
      });

      describe("and have three decimal numbers", function() {
        it("should round the number upward", function() {
          expect(formatter.valueToAPIFormat("53,999")).to.eq("54.00");
        });
      })
    });
  });
});
