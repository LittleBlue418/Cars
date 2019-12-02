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
})
