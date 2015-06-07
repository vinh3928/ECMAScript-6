var car = require("../js/app.js")
    car.carMethods();

describe("running a muck", function () {
  it("testing link", function () {
    expect(car.handler()).toEqual("Foo");
  });
  it("checking out factory", function () {
    var honda = new car.Cars("Honda", "25", "sedan");
    expect(honda.type).toEqual("sedan");
  });
  it("car fill up gas", function () {
    var honda = new car.Cars("Honda", "25", "sedan");
    honda.fillUp();
    expect(honda.gas).toEqual(20);
  });
  it("No gas to drive", function () {
    var honda = new car.Cars("Honda", "25", "sedan");
    expect(honda.drive(30)).toEqual("Out of gas!");
  });
  it("Drive around town", function () {
    var honda = new car.Cars("Honda", "25", "sedan");
    honda.fillUp();
    honda.drive(70);
    expect(honda.distance).toEqual(70);
    expect(honda.gas).toEqual("17.20");
  });
  it("Status check", function () {
    var honda = new car.Cars("Honda", "25", "sedan");
    honda.fillUp();
    honda.drive(240);
    expect(honda.status()).toEqual("Make Honda, type sedan, gas at 10.40 gallons, distance traveled 240 miles")

  });
});


