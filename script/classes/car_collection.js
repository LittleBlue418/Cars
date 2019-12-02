class CarCollection {
  constructor() {
    this.cars_by_id = {};
    this.cars_by_color = {};
    this.cars_by_date = [];
  }

  add_car(car) {
    // We use the square brackets to add to a dictionary
    // whatever is in the square brackets is the key, and then after the
    // Equals sign is the value
    this.cars_by_id[car.id] = car
    this.cars_by_date.push(car)

    if (this.cars_by_color[car.color] === undefined) {
      // Here car is in brackets to make sure we create a list rather than
      // Over writing the previous object with key 'red'
      this.cars_by_color[car.color] = [car]
    } else {
      // Appending to a list as with cars by date
      this.cars_by_color[car.color].push(car)
    }
  }

  delete_car(car_to_delete) {
    // Checks the number you have input
    // Returns if no car found
    if (this.cars_by_id[car_to_delete] === undefined) {
      console.log("Car not found")
      return
    }
    var car = this.cars_by_id[car_to_delete]
    // If car was found, deletes from id dictionary
    delete this.cars_by_id[car.id]

    // Bug fix - now filtering the list in the dictionary with the same color key and keeping
    // cars that do not match id rather than throwing away the whole list
    this.cars_by_color[car.color] = this.cars_by_color[car.color].filter(car => car.id !== car_to_delete)

    // Use filter method to only keep cars that don't match the
    // to-delete, and save them back in the same array
    this.cars_by_date = this.cars_by_date.filter(car => car.id !== car_to_delete)

    return car
  }
}