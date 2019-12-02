// Classes
class Car {
  constructor(make, color, milage) {
    this.id = this.generateID();
    this.make = make;
    this.color = color;
    this.milage = milage;
    this.date = todays_date();
  }

  generateID() {
    var id = (todays_date() + total_cars_registered);
    total_cars_registered += 1;
    return id
  }
}

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

    delete this.cars_by_color[car.color]

    // Use filter method to only keep cars that don't match the
    // to-delete, and save them back in the same array
    this.cars_by_date = this.cars_by_date.filter(car => car.id !== car_to_delete)

    return car
  }
}


// Global variables
var total_cars_registered = 0;
var car_collection = new CarCollection;


// On load
$(function () {
  populate_car_list();
})


function todays_date() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var date = yyyy + mm + dd
  return date
}


function populate_car_list() {
  $('#car_list').html("")
  var s = ""
  // 'car' here is the same as 'cars_by_date[i]' in the old function
  car_collection.cars_by_date.forEach(car => {
    s += `<div>${car.id}  -  ${car.make}  -  ${car.color}  -  ${car.milage}</div>`
  })
  $('#car_list').html(s)
}

// On click from form submission
// 'Event' is an object that contains details about the event
// That just happened. Generated when we do something with the page
// This one is tied to the specific submit button on the form
// We can use it to find out stuff and do stuff
// Here we use it to prevent the default behaviour
$('#enter_car').submit(function (event) {
  event.preventDefault()
  console.log("Sucess!")

  var car = new Car(
    $('#car_make').val(),
    $('#car_color').val(),
    $('#car_milage').val()
  )

  car_collection.add_car(car)

  $('#info_box').html(`You have submitted a: ${car.color} ${car.make} that has driven ${car.milage} miles. <br>
    The ID number is: ${car.id} <br>
    The Date today is: ${car.date}`)

  populate_car_list();
  console.log(car_collection.cars_by_color)
});

// On click from delete
$('#delete_car').submit(function (event) {
  event.preventDefault()
  var car_to_delete = $('#car_id').val()
  var car = car_collection.delete_car(car_to_delete);
  if (car === undefined) {
    $('#info_box2').html(`Car not found`)
  } else {
    $('#info_box2').html(`You have deleted ${car.id}`)
  }
  console.log(car_collection.cars_by_date)
  populate_car_list();

})