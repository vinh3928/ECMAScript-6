"use strict";

var project = {
  handler: function handler() {
    return "Foo";
  },
  Cars: function Cars(make, mpg, type) {
    this.make = make;
    this.mpg = mpg;
    this.type = type;
    this.miles = 0;
    this.gas = 0;
  },
  carMethods: function carMethods() {
    var _this = this;

    this.Cars.prototype.drive = function (miles) {
      var milesIn = miles;
      if (_this.Cars.gas > 0) {}
    };
    this.Cars.prototype.fillUp = function () {
      _this.gas = 20;
      return 20;
    };
  }
};

module.exports = project;
