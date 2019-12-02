describe("Car class", function() {

  it("Should generate today's date", function() {
    // Mocking the date by creating a mock date object
    var baseTime = new Date(2019,09,23);
    // Telling Jasmine about our mock date
    jasmine.clock().mockDate(baseTime);
    // NB off by one 'error' in the origional script
    // required to account for zero based month system
    expect(Car.todays_date()).toEqual("20191023")
  })

  it("Should generate an ID number", function() {
    // Setting up a mock date object
    // Setting our variable
    total_cars_registered = 1
    var baseTime = new Date(2019, 09, 23);
    jasmine.clock().mockDate(baseTime);
    // Testing the ID generation output
    expect(Car.generateID()).toEqual("201910231")
    // Testing that the variable increases as it should
    expect(total_cars_registered).toEqual(2)
  })

  it("Should construct a 'car'", function() {
    total_cars_registered = 1
    var baseTime = new Date(2019, 09, 23);
    jasmine.clock().mockDate(baseTime);

    var car = new Car("Ford", "Red", 100)

    expect(car.id).toEqual("201910231")
    expect(car.make).toEqual("Ford")
    expect(car.color).toEqual("Red")
    expect(car.milage).toEqual(100)
    expect(car.date).toEqual("20191023")

  })
})
