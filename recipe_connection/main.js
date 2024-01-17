const cities = require("cities");
var myCity = cities.zip_lookup("72022");
console.log(myCity);
var seaside = cities.findByCityAndState("seaside", "ca");
console.log(seaside);
var ft_ord = cities.zipLookup("93940");
console.log(ft_ord);
var pg = cities.findByCityAndState("pacific grove", "ca");
console.log(pg);
