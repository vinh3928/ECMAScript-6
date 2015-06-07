var project = {
  handler: () => {
    return "Foo";
  },
  Cars(make, mpg, type) {
    this.make = make;
    this.mpg = mpg;
    this.type = type;
    this.miles = 0;
    this.gas = 0;
    this.distance = 0;
  },
  carMethods () {
    this.Cars.prototype.drive = function (miles) {
      for (let i = 0; i < miles; i ++) {
        if (this.gas > 0) {
          this.gas -= 1/this.mpg;
          this.distance += 1;
          this.gas = this.gas.toFixed(2);
        } else {
          return "Out of gas!"
        }
      }
    };
    this.Cars.prototype.fillUp = function () {
      this.gas = 20;
    };
    this.Cars.prototype.status = function () {
      return `Make ${this.make}, type ${this.type}, gas at ${this.gas} gallons, distance traveled ${this.distance} miles`;
    };
  }
};

module.exports = project;
