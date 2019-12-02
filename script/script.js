// Global variables
var car_collection = new CarCollection;


// On load
$(function () {
  // Initiating a 'dummy' car
  car_collection.add_car(new Car ("Ford", "Green", 10000))
  populate_car_list();
})




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