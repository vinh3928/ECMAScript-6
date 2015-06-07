// Creating a constructor function
var Cars = function (make, mpg, type) {
    this.make = make;
    this.mpg = mpg;
    this.type = type;
    this.miles = 0;
    this.gas = 0;
    this.distance = 0;
};

Cars.prototype.fillUp = function () {
  this.gas = 20;
};

// creating an instant of Cars
var honda = new Cars(Honda, 25, sedan);


// logs out "Honda"
console.log(honda.make);
// logs out "sedan"
console.log(honda.type);

// gas starts at 0 then fills up to 20
honda.fillUp();
// logs out 20
console.log(honda.gas);
