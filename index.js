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
  drivers.sort(function(a,b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {

}


function totalRevenue(drivers) {
  let sum = 0
  drivers.forEach(function (driver){ sum += driver.revenue})
  return sum
}

function averageRevenue(drivers) {
  let average = 0
  drivers.forEach(function (driver){average += driver.revenue})
  average = average/drivers.length
  return average
}
