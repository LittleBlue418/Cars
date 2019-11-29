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
  for (i = 0; i < cars_by_date.length; i++) {
    var car = cars_by_date[i]
    if (car.id === car_to_delete) {
      cars_by_date.splice(i)
    }
  }
}

// On click from form submission
$('#enter_car').submit(function(event){
  event.preventDefault()
  console.log("Sucess!")

  var car = new Car
  cars_by_id[car.id] = car
  cars_by_color[car.color] = car
  cars_by_date.push(car)

  $('#info_box').html(`You have submitted a: ${car.color} ${car.make} that has driven ${car.milage} miles. <br>
    The ID number is: ${car.id} <br>
    The Date today is: ${car.date}`)

  console.log(cars_by_date)
});

$('#delete_car').submit(function(event) {
  event.preventDefault()
  var car_to_delete = $('#car_id').val()
  delete_car(car_to_delete);
  console.log(cars_by_date)

})