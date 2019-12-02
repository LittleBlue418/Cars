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
})
