"use strict";

// prototypes

const Person = function (firstName, year) {
  this.firstName = firstName;
  this.year = year;
};

const jayram = new Person("Jayram", 1996);
console.log(jayram);

Person.prototype.calcAge = function () {
  console.log(2025 - this.year);
};

jayram.calcAge();
