// Global var to store all cars sold
var total_cars_registered = 0;

// Global dictionary to store all car objects
var cars = {};

// Class of car
class Car {
  constructor(id, make, color, milage, date) {
    this.id = id;
    this.make = make;
    this.color = color;
    this.milage = milage;
    this.date = date;
  }


}

// Getting unique ID number using the date & total cars sold
function generateID (){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth()+1).padStart(2, '0');
  var yyyy = today.getFullYear();
  id = yyyy + mm + dd + '-' + total_cars_registered
  total_cars_registered += 1;
  return id
}

// On click from form submission
$('#enter_car').submit(function(event){
  event.preventDefault()
  console.log("Sucess!")

  var id = generateID()
  var make = $('#car_make').val();
  var color = $('#car_color').val();
  var milage = $('#car_milage').val();


  car = new Car (id, make, color, milage, 23)
  cars[id] = car
  $('#info_box').html(`You have submitted a: ${car.make} that is ${car.color} and has driven ${car.milage} miles`)
});