document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    newJacket = {}
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
                if (temp <= 25) {
                    return 5
                }
                if (temp <= 35) {
                    return 4
                }
                if (temp <= 45) {
                    return 3
                }
                if (temp < 60) {
                    return 2
                }
                if (temp <= 65) {
                    return 1
                }
                if (temp >= 66) {
                    return 0
                }
            }
         
            function chooseJacket(zone) {
                if (zone === 0) {
                    return detailImage.src = 'tshirt.png'
                }
                if (zone === 1) {
                    return detailImage.src = 'hoody.png'
                }
                if (zone === 2) {
                    return detailImage.src = 'Black-Leather-Jacket-PNG.png'
                }
                if (zone === 3) {
                    return detailImage.src = 'wintercoat.png'
                }
                if (zone === 4) {
                    return detailImage.src = 'Jacket-Download-PNG.png'
                }
                if (zone === 5) { return detailImage.src = 'extremecold.jpeg' }
            }

            //update Avg Temp Display
            //default
            AvgTempDisplay = document.querySelector("#Temp")
            AvgTempDisplay.innerHTML = `Average ${todayTemp}`
            tempZones(todayTemp) === newJacket.id ? detailImage.src = newjacket.img : chooseJacket(tempZones(todayTemp))
            console.log(tempZones(todayTemp))
            console.log(newJacket.id)
            chooseJacket(tempZones(todayTemp))

            //tomorrow
            tomorrow = document.querySelector("body > div.dropdown > div > a:nth-child(1)")
            tomorrow.addEventListener('click', () => {
                AvgTempDisplay.innerHTML = `Average ${tomorrowTemp}`

                chooseJacket(tempZones(tomorrowTemp))
                tempZones(tomorrowTemp) === newJacket.id ? detailImage.src = newJacket.img : chooseJacket(tempZones(tomorrowTemp))


            })
            //the next day
            tndAvgTemp = document.querySelector("body > div.dropdown > div > a:nth-child(2)")
            tndAvgTemp.addEventListener('click', () => {
                AvgTempDisplay.innerHTML = `Average ${theNextDayTemp}`
                chooseJacket(tempZones(theNextDayTemp))
                tempZones(theNextDayTemp) === newJacket.id ? detailImage.src = newJacket.img : chooseJacket(tempZones(theNextDayTemp))


            })
            //reset
            homeBtn = document.querySelector("body > div.dropdown > button")
            homeBtn.addEventListener('click', () => {
                AvgTempDisplay.innerHTML = `Average ${todayTemp}`
               
                chooseJacket(tempZones(todayTemp))
                tempZones(todayTemp) === newJacket.id ? detailImage.src = newJacket.img : chooseJacket(tempZones(todayTemp))
                console.log(newJacket.img)
                console.log(tempZones(todayTemp))
                console.log(detailImage.src)
                

            })

               //create new jacket object with form and dropdown. it clocks an ID(zone) and a img src
               form = document.querySelector("#user-form")
               
               crisp = document.querySelector("#\\31 ") 
               chilly = document.querySelector("#\\32 ")
               cold = document.querySelector("#\\33 ")
   
               form.onsubmit = function (event) {
                   event.preventDefault()
                   newJacket.img = document.querySelector("#jacket-img").value
                      
   
                   console.log(newJacket)
               }
               crisp.addEventListener('click', () => {
               newJacket.id = 2 })
               chilly.addEventListener('click', () => {
                       newJacket.id = 3 })
                       cold.addEventListener('click', () => {
                           newJacket.id = 4 })
               
                    



            
          




        })



    

});