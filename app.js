const form = document.querySelectorAll('form')
const list = document.querySelectorAll('ul')
const studentInput = document.querySelector('#Input1')
const techInput = document.querySelector('#input2')
let studentsName = [], technologie = [], random, output1 = '', output2 = '', students, techs

window.onload = () => {
  students = JSON.parse(localStorage.getItem('student')) 
  techs = JSON.parse(localStorage.getItem('tech')) 
  
  students.forEach((i) => studentsName.push(i))
  techs.forEach((i) => technologie.push(i) )

  // studentsName.forEach((i) => output1 += "<li>" + i + "</li>")
  // technologie.forEach((i) => output2 += "<li>" + i[0] + ' - ' + i[1] + "</li>")

  list[0].innerHTML = studentsName.map(i => "<li>" + i + "</li>").join('') 
  list[1].innerHTML = technologie.map(i => `<li> ${i[0]} - ${i[1]}</li>`).join('') 
}

form[0].addEventListener('submit', (event) => {
  event.preventDefault()
  studentsName.push(studentInput.value)
  localStorage.setItem("student", JSON.stringify(studentsName))
  list[0].innerHTML += "<li>" + studentInput.value + "</li>"
  form[0].reset()  
})

form[1].addEventListener('submit', (event) => {
  event.preventDefault()
  random = [Math.floor(Math.random() * studentsName.length)]
  technologie.push([techInput.value, studentsName[random]])
  localStorage.setItem("tech", JSON.stringify(technologie))
  list[1].innerHTML += "<li>" + techInput.value + ' - ' + studentsName[random] + "</li>"
  form[1].reset()
})

list[0].querySelectorAll('li').forEach((i) => {
  technologie.forEach((ts) => ts[1] == i.textContent && (i.style.textDecoration = 'line-through'))
}) 

document.querySelectorAll('button')[2].addEventListener('click', () =>{
  let a = [], b = []
  localStorage.setItem("student", JSON.stringify(a))
  localStorage.setItem("tech", JSON.stringify(b))
  location.reload()
})
