var total_cars_registered = 0;

class Car {
  constructor(make, color, milage) {
    this.id = this.generateID();
    this.make = make;
    this.color = color;
    this.milage = milage;
    this.date = this.todays_date();
  }

  generateID() {
    var id = (this.todays_date() + total_cars_registered);
    total_cars_registered += 1;
    return id
  }

  todays_date() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var date = yyyy + mm + dd
    return date
  }
}