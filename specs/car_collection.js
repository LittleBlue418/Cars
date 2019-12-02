describe("Car Collection Class", function() {

  it("should initialize empty", function() {
    var collection = new CarCollection
    expect(collection.cars_by_id).toEqual({})
    expect(collection.cars_by_color).toEqual({})
    expect(collection.cars_by_date).toEqual([])
  })

  it("Should add the car to cars by id, by color and by date", function(){
    var car = {id: 1, make: "Ford", color: "Red", milage: 1, date: 1}
    var collection = new CarCollection
    collection.add_car(car)
    expect(collection.cars_by_id).toEqual({1 : car})
    expect(collection.cars_by_color).toEqual({"Red" : [car]})
    expect(collection.cars_by_date).toEqual([car])
  })

  it("Should delete the car from cars by id, by color and by date", function() {
    var car = {id: 1, make: "Ford", color: "Red", milage: 1, date: 1}
    var car2 = {id: 2, make: "Mustang", color: "Red", milage: 2, date: 2}
    var collection = new CarCollection

    collection.add_car(car)
    collection.add_car(car2)
    collection.delete_car(car2.id)

    expect(collection.cars_by_id).toEqual({1 : car})
    expect(collection.cars_by_color).toEqual({"Red" : [car]})
    expect(collection.cars_by_date).toEqual([car])

    expect(collection.delete_car(car2)).toEqual(undefined)


  })
})