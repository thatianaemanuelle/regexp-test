var mocha = require("mocha");
var chai = require("chai");
var url = require("./url");
var expect = chai.expect;

describe("url", function() {
  describe("#findURLsInText", function() {
    describe("when there is no url in the text", function() {
      it("should return an empty array", function() {

      });
    })

    describe("when there is one url in the text", function() {
      describe("and it has HTTPS", function() {
        it("should return the url in an array", function() {

        });
      });

      describe("and it has HTTP", function() {
        it("should return the url in an array", function() {

        });
      });

      describe("and it has www", function() {
        it("should return the url in an array", function() {

        });
      });

      describe("and it only the domain", function() {
        it("should return the url in an array", function() {

        });
      });
    })

    describe("when there are three urls in the text", function() {
      it("should return the urls in an array", function() {

      });
    })
  });
});
