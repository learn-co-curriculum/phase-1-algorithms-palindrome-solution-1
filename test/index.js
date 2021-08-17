const chai = require("chai");
global.expect = chai.expect;
const isPalindrome = require("../index");

describe("isPalindrome", () => {
  it("returns true if the word is a palindrome", () => {
    expect(isPalindrome("abba")).to.be.true;
    expect(isPalindrome("racecar")).to.be.true;
    expect(isPalindrome("a")).to.be.true;
  });

  it("returns false if the word not is a palindrome", () => {
    expect(isPalindrome("robot")).to.be.false;
    expect(isPalindrome("ab")).to.be.false;
  });
});
