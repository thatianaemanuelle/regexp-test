var mocha = require("mocha");
var chai = require("chai");
var url = require("./url");
var expect = chai.expect;

describe("url", function() {
  describe("#findURLsInText", function() {
    describe("when there is no url in the text", function() {
      it("should return an empty array", function() {
        expect(url.findURLsInText("Oi tudo bem?")).to.be.an('array')
        expect(url.findURLsInText("Oi tudo bem?")).to.have.lengthOf(0);
      });
    })

    describe("when there is one url in the text", function() {
      describe("and it has HTTPS", function() {
        it("should return the url in an array", function() {
          var expectedUrls = ["https://www.google.com.br"];

          expect(url.findURLsInText("Oi, https://www.google.com.br")).to.be.deep.equal(expectedUrls);
        });
      });

      describe("and it has HTTP", function() {
        it("should return the url in an array", function() {
          var expectedUrls = ["http://www.google.com.br"];

          expect(url.findURLsInText("Oi, http://www.google.com.br")).to.be.deep.equal(expectedUrls);
        });
      });

      describe("and it has www", function() {
        it("should return the url in an array", function() {
          var expectedUrls = ["www.google.com.br"];

          expect(url.findURLsInText("Oi, www.google.com.br")).to.be.deep.equal(expectedUrls);
        });
      });

      describe("and it only the domain", function() {
        it("should return the url in an array", function() {
          var expectedUrls = ["google.com.br"];

          expect(url.findURLsInText("Oi, google.com.br")).to.be.deep.equal(expectedUrls);
        });
      });
    })

    describe("when there are three urls in the text", function() {
      it("should return the urls in an array", function() {
        var expectedUrls = [
          "google.com.br",
          "https://laboratoria.la",
          "www.yahoo.com"
        ];

        expect(url.findURLsInText("Oi, google.com.br https://laboratoria.la Mais um texto www.yahoo.com")).to.be.deep.equal(expectedUrls);
      });
    })
  });
});
