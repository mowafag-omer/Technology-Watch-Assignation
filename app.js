/* Quand on ajoute un étudiant ca le stock dans un tableau , idem pour les veilles 
(Créer un formulaire en html , Créer une liste en js)
Quand on appuie sur le bouton assigner , le programme assigne aléatoirement 2 élèves et 1 technologie en les supprimant de la liste 
Quand on appuie sur le bouton rafraichir la liste retourne à 0*/

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
})


form[1].addEventListener('submit', function(event) {
  console.log(studentsName)
  
  event.preventDefault()
  let rstd
  sn.length != 0 && (rstd = sn[Math.floor(Math.random() * sn.length)])

  sn.length != 0 && technologie.push([techInput.value, rstd])  
  sn.splice(sn.indexOf(rstd), 1)
  
  list[0].querySelectorAll('li').forEach(function(i){
    rstd == i.textContent && (i.style.textDecoration = 'line-through')
  })

  let output = ''

  technologie.forEach(function(name){
    output += "<li>" + name[0] + ' - ' + name[1] + "</li>"
  })

  list[1].innerHTML = output   
  this.reset()
})
