/* Quand on ajoute un étudiant ca le stock dans un tableau , idem pour les veilles 
(Créer un formulaire en html , Créer une liste en js)
Quand on appuie sur le bouton assigner , le programme assigne aléatoirement 2 élèves et 1 technologie en les supprimant de la liste 
Quand on appuie sur le bouton rafraichir la liste retourne à 0*/

const form = document.querySelectorAll('form')
const button = document.querySelectorAll('button')
const student = document.querySelector('#Input1')
const technology = document.querySelector('#Input2')
var ul = document.getElementsByTagName('ul')
const studentsName = []
const technologyName = []


form[0].addEventListener('submit', function(event) {
    event.preventDefault()
    studentsName.push(student.value)
    var list = document.createElement('li')
    ul[0].appendChild(list)
    list.innerHTML = studentsName[studentsName.length - 1]
    this.reset()
    
})



form[1].addEventListener('submit',function(event){
    event.preventDefault()
    var li = document.querySelectorAll('li')
    var list = document.createElement('li')
    let random = studentsName[Math.floor(Math.random()*studentsName.length)]
    technologyName.push(technology.value)
    ul[1].appendChild(list)
    list.innerHTML = technologyName[technologyName.length -1] + ' - ' + random
    li.forEach(function(i){
        random == i.textContent && (i.style.textDecoration = "line-through")
    })
    random = studentsName.indexOf(random)
    studentsName.splice(random, 1 )
    this.reset()
})

button[2].addEventListener('click',function(){
    ul[0].innerHTML = ''
    ul[1].innerHTML = ''
    studentsName.length = 0
    technologyName.length = 0
})