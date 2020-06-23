document.addEventListener("DOMContentLoaded", (evt) => {
    const nav = document.querySelector('ul')
    
    //Ajouter un element à la navigation
    const  newElm = document.createElement("li")
    newElm.textContent = 'Remerciements'
    nav.append(newElm)

    //Changer le style du menu
    nav.className = 'navbar'
    navItem = document.querySelectorAll('li')

    for (let i = 0; i < navItem.length; i++) {
        navItem[i].className = 'btn btn-outline-secondary'
    }

    //Ajouter un element à la navigation
    nav.removeChild(navItem[2])

    //Ajouter un titre
    const img = document.querySelectorAll('img')
    
    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener('mouseover', function() {
            this.setAttribute("title", "Image n°" + (i + 1)) 
        })
    }
})