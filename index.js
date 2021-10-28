document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

  api = 'http://api.weatherapi.com/v1/forecast.json?key=20c6c008ae4e401998b121207212510%20&q=New%20York%20City&days=5&aqi=no&alerts=no'

  fetch(api)
      .then(response => response.json())
      .then(data => {
          //These three return a number that is the avg temp for the day in question
          todayTemp = data.forecast.forecastday[0].day.avgtemp_f
          tomorrowTemp = data.forecast.forecastday[1].day.avgtemp_f
          theNextDayTemp = data.forecast.forecastday[2].day.avgtemp_f
         
          //define variables
          detailImage = document.querySelector("#Jacket > img.detail-image")
         
          
          document.querySelector("#Jacket > img:nth-child(1)")
          //The function tempZones takes a number as an argument.
          //It then returns the jacket that coorisponds to the range that the arg fits into.
          function tempZones(temp) {
              if (temp > 65) {
                  return detailImage.src = 'tshirt.png'
              }
              if (temp >= 59) {
                return detailImage.src = 'hoody.png'
              }
              if (temp >= 50) {
                return detailImage.src = 'Black-Leather-Jacket-PNG.png'
              }
              if (temp >= 40) {
                  return detailImage.src = 'wintercoat.png'
              }
              if (temp > 25) {
                  return detailImage.src = 'Jacket-Download-PNG.png'
              }
              else { return detailImage.src = 'extremecold.jpeg' }
          }
          
        
              //update Avg Temp Display
              //default
              AvgTempDisplay = document.querySelector("#Temp")
              AvgTempDisplay.innerHTML = `Average ${todayTemp}`
             tempZones(todayTemp)
              //tomorrow
              tomorrow = document.querySelector("body > div.dropdown > div > a:nth-child(1)")
              tomorrow.addEventListener('click', () => {
                  AvgTempDisplay.innerHTML = `Average ${tomorrowTemp}`
                  
                  tempZones(tomorrowTemp)

              })
              //the next day
              tndAvgTemp = document.querySelector("body > div.dropdown > div > a:nth-child(2)")
              tndAvgTemp.addEventListener('click', () => {
                  AvgTempDisplay.innerHTML = `Average ${theNextDayTemp}`
                  tempZones(theNextDayTemp)

              })
              //reset
              homeBtn = document.querySelector("body > div.dropdown > button")
              homeBtn.addEventListener('click', () => {
                  AvgTempDisplay.innerHTML = `Average ${todayTemp}`
                  tempZones(tomorrowTemp)
              })
             

          
          
    
      
      })



const userJacket = document.getElementById('user-form')
userJacket.addEventListener('submit', (event) => {
  event.preventDefault()

  const newJacketObject = {}
  newJacketObject.name = document.querySelector('#user-jacket-name').value
  newJacketObject.img = document.querySelector('#jacket-img').value
    console.log(newJacketObject)

})
  
});