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
var random = ""
var list = ""
const li = document.querySelectorAll('li')

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
    technologyName.push(technology.value)
    console.log(technologyName)
    var list = document.createElement('li')
    ul[1].appendChild(list)
    list.innerHTML = technologyName
    var random = studentsName[Math.floor(Math.random()*studentsName.length)]
    random = studentsName.indexOf(random)
    studentsName.splice(random, 1 )
})

button[1].addEventListener('click',function randomize(){
    let random = studentsName[Math.floor(Math.random()*studentsName.length)]
    random = studentsName.indexOf(random)
    studentsName.splice(random, 1 )
    li.forEach(function(i){
        random == i.textContent && (i.style.textDecoration = "line-throug")
    })
    list.innerHTML = technologyName + "-" + random
})

button[2].addEventListener('click',function(){
    ul[0].innerHTML = ''
    ul[1].innerHTML = ''
    studentsName.length = 0
    technologyName.length = 0
})


// button[1].addEventListener('click',function randomize(min, max){
//     event.preventDefault()
//     let random = studentsName[Math.floor(Math.random()*studentsName.length)]
//     console.log(random)
//     random = studentsName.indexOf(random)
//     console.log(random)
//     studentsName.splice(random, 1 )
//     console.log(studentsName)
    
    
// })




//   for(i = 0; i < studentsName.length; i++ ){
//     var ul = document.getElementsByTagName('ul');
//     var list = document.createElement('li');
//     ul[0].appendChild(list)
//     list.innerHTML = studentsName[i]
//     console.log(studentsName)
//   }
//   studentsName.forEach(element => {
//     var ul = document.getElementsByTagName('ul');
//     list = document.createElement('li');
//     ul[0].appendChild(list)
//     list.innerHTML = studentsName
// });

