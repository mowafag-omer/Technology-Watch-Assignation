/* Quand on ajoute un étudiant ca le stock dans un tableau , idem pour les veilles 
(Créer un formulaire en html , Créer une liste en js)
Quand on appuie sur le bouton assigner , le programme assigne aléatoirement 2 élèves et 1 technologie en les supprimant de la liste 
Quand on appuie sur le bouton rafraichir la liste retourne à 0*/
const form = document.querySelectorAll('form')
const student = document.querySelector('#Input1')
const studentsName = []
let nameStudent = []

form[0].addEventListener('submit', function(event) {
  event.preventDefault()
  studentsName.unshift(student.value);
  console.log(studentsName);
  
})

studentsName.forEach(element => {
    nameStudent += "<li>" + element + "</li>";
    console.log(nameStudent)
});
var ul = document.getElementsByTagName('ul');
ul.innerHTML = nameStudent ;
console.log(nameStudent)

