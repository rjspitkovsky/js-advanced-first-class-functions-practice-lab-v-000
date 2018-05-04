// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function (driver) {return console.log(driver.name)})
}

function logDriversByHometown(drivers, location) {
  return drivers.forEach(function (driver) {if (driver.hometown === location) {
    console.log(driver.name)
  }})
}

function driversByRevenue(drivers) {
  return drivers.sort(function (a,b))
}


function totalRevenue(drivers) {
  let sum = 0
  drivers.forEach(function (driver){ sum += driver.revenue})
  return sum 
}
