// Global var to store all cars sold
var total_cars_registered = 0;

// Global dictionary to store all car objects
var cars = {};

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

// On click from form submission
$('#enter_car').submit(function(event){
  event.preventDefault()
  console.log("Sucess!")

  car = new Car
  cars[car.id] = car
  $('#info_box').html(`You have submitted a: ${car.color} ${car.make} that has driven ${car.milage} miles. <br>
    The ID number is: ${car.id} <br>
    The Date today is: ${car.date}`)
});