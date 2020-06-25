const form = document.querySelectorAll('form')
const studentInput = document.querySelector('#Input1')
const techInput = document.querySelector('#input2')
const list = document.querySelectorAll('ul')
let studentsName = [], technologie = [], randomName
 

form[0].addEventListener('submit', function(event) {
  event.preventDefault()
  studentsName.push(studentInput.value)
  list[0].innerHTML += "<li>" + studentInput.value + "</li>"  
  this.reset()
})

form[1].addEventListener('submit', function(event) {
  event.preventDefault()
  if(studentsName.length != 0){
    randomName = [Math.floor(Math.random() * studentsName.length)]
    console.log(randomName)
    
    // technologie.push([techInput.value, randomName])
    list[1].innerHTML += "<li>" + techInput.value + ' - ' + studentsName[randomName] + "</li>" 
    studentsName.splice(studentsName.indexOf(randomName), 1)
    list[0].querySelectorAll('li').forEach(function(i, k){
      randomName == k && (i.style.textDecoration = 'line-through')
    })  
  }
  this.reset()
  // let output = ''
  // technologie.forEach(function(name){
  //   output += "<li>" + name[0] + ' - ' + name[1] + "</li>"
  // })
})

// function lineThrough(){
//   list[0].querySelectorAll('li').forEach(function(i){
//     technologie.forEach(function(ts){
//       ts[1] == i.textContent && (i.style.textDecoration = 'line-through')
//     })
//   })
// }

