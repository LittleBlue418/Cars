// Global var to store all cars sold
var total_cars_registered = 0;

// Global dictionary to store all car objects
var cars_by_id = {};
var cars_by_color = {};
var cars_by_date = [];


// Class of car
class Car {
  constructor() {
    this.id = this.generateID();
    this.make = this.generateMake();
    this.color = this.generateColor();
    this.milage = this.generateMilage();
    this.date = todays_date();
  }

  generateID (){
    var id = (todays_date() + total_cars_registered);
    total_cars_registered += 1;
    return id
  }

  generateMake () {
    var make = $('#car_make').val();
    return make
  }

  generateColor () {
    var color = $('#car_color').val();
    return color
  }

  generateMilage () {
    var milage = $('#car_milage').val();
    return milage
  }
}

function todays_date (){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth()+1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var date = yyyy + mm + dd
  return date
}

function delete_car(car_to_delete) {
  // Checks the number you have input
  // Returns if no car found
  if (cars_by_id[car_to_delete] === undefined) {
    console.log("Car not found")
    return
  }
  var car = cars_by_id[car_to_delete]
  // If car was found, deletes from id dictionary
  delete cars_by_id[car.id]

  delete cars_by_color[car.color]

  // Deletes cars from list: cars_by_date
  for (i = 0; i < cars_by_date.length; i++) {
    var car = cars_by_date[i]
    if (car.id === car_to_delete) {
      cars_by_date.splice(i,1)
      console.log(i)
    }
  }

  return car
}

function populate_car_list() {
  $('#car_list').html("")
  var s = ""
  for (i = 0; i < cars_by_date.length; i++) {
    var car = cars_by_date[i]
    s += `<div>${car.id}  -  ${car.make}  -  ${car.color}  -  ${car.milage}</div>`
  }
  $('#car_list').html(s)
}

// On click from form submission
$('#enter_car').submit(function(event){
  event.preventDefault()
  console.log("Sucess!")

  var car = new Car
  cars_by_id[car.id] = car
  cars_by_date.push(car)

  if (cars_by_color[car.color] === undefined) {
    cars_by_color[car.color] = [car]
  } else [
    cars_by_color[car.color].push(car)
  ]


  $('#info_box').html(`You have submitted a: ${car.color} ${car.make} that has driven ${car.milage} miles. <br>
    The ID number is: ${car.id} <br>
    The Date today is: ${car.date}`)

  populate_car_list();
  console.log(cars_by_color)
});

// On click from delete
$('#delete_car').submit(function(event) {
  event.preventDefault()
  var car_to_delete = $('#car_id').val()
  var car = delete_car(car_to_delete);
  if (car === undefined) {
    $('#info_box2').html(`Car not found`)
  } else {
    $('#info_box2').html(`You have deleted ${car.id}`)
  }
  console.log(cars_by_date)
  populate_car_list();

})