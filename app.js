const form = document.querySelectorAll('form')
const studentInput = document.querySelector('#Input1')
const techInput = document.querySelector('#input2')
const list = document.querySelectorAll('ul')
const studentsName = []
let   sn = []
const technologie = []

form[0].addEventListener('submit', function(event) {
  event.preventDefault()
  studentsName.push(studentInput.value)
  sn.push(studentInput.value)
  let output = ''

  studentsName.forEach(function(name){
    output += "<li>" + name + "</li>"
  })
  
  list[0].innerHTML = output  
  this.reset()
  highlight()
})

form[1].addEventListener('submit', function(event) {
  event.preventDefault()
  let rstd
  if(sn.length != 0){
    rstd = sn[Math.floor(Math.random() * sn.length)]
    technologie.push([techInput.value, rstd])
    sn.splice(sn.indexOf(rstd), 1)
  }

  let output = ''
  technologie.forEach(function(name){
    output += "<li>" + name[0] + ' - ' + name[1] + "</li>"
  })

  list[1].innerHTML = output   
  this.reset()
  highlight()
})

function highlight(){
  list[0].querySelectorAll('li').forEach(function(i){
    technologie.forEach(function(ts){
      ts[1] == i.textContent && (i.style.textDecoration = 'line-through')
    })
  })
}
