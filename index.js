document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
  });


const display = document.querySelector("#Jacket")
const placeHolder = document.createElement('img')
placeHolder.src = 'Question-Mark.png'
display.append(placeHolder)

 liker = document.querySelector("#liker")

liker.addEventListener('click', () => {
    return console.log('test')
}
)
const userJacket = document.getElementById('user-form')
userJacket.addEventListener('submit', (event) => {
  event.preventDefault()

  const newJacketObject = {}
  newJacketObject.name = document.querySelector('#user-jacket-name').value
  newJacketObject.img = document.querySelector('#jacket-img').value
    console.log(newJacketObject)

})
  
