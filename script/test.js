
/*
The 'map' function returns a new array of the exact same legnth
as the old array, where each element is calculated from an element
in the origional list
*/
const numbers = [2, 4, 6, 8, 10];

const doubleNumbers = numbers.map(x => x*2)


const cars = [
  {color:"Red", date: 25},
  {color:"Blue", date: 40}
]
/*
Here we create a new constant, instruct it to look at the
origional list, and for each element in the old list extract
the date from each one and use this to create a new list

It takes the element (car.date) and turns it into a new element (date)
*/
const car_dates = cars.map(car => car.date)

/*
The filter here works in a similar way to the map function. we end up
with a new list, that contains all of the car objects which have the
color value of red
*/
const red_cars = cars.filter(car => car.color === "Red")

