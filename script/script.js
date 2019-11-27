var total_cars_registered = 0;

class Car {
  constructor(id, make, color, milage, date) {
    this.id = id;
    this.make = make;
    this.color = color;
    this.milage = milage;
    this.date = date;
  }
}

function generateID (){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth()+1).padStart(2, '0');
  var yyyy = today.getFullYear();
  id = yyyy + mm + dd + '-' + total_cars_registered
  total_cars_registered += 1;
  return id
}

$('#enter_car').submit(function(event){
  event.preventDefault()
  console.log("Sucess!")
  var id = generateID()
  console.log(id)

});