//Query Selectors
let ouvrirModal1 = document.querySelector(".js-modal1")
let preview = document.querySelector(".preview")
let ajoutPhoto = document.querySelector(".js-ajoutPhoto")
let backButton = document.querySelector(".backButton")

//ouverture et fermeture de la modal1

const openModal1 = function(e) {
    e.preventDefault
    modal1.style.display = null
    modal1.addEventListener("click", closeModal1)
    //Bouton croix qui ferme la modal 1
    modal1.querySelector(".js-modal1-close").addEventListener("click", closeModal1)
    //Fermer la modal 1 quand on clic à l'exterieur
    modal1.querySelector(".js-modal1-stop").addEventListener("click", stopPropagation)
}

//Fonction de fermeture de la modal 1
const closeModal1 = function (e) {
    if (modal1 === null) return
    e.preventDefault
    modal1.style.display = "none"
    modal1.removeEventListener("click", closeModal1)
    modal1.querySelector(".js-modal1-close").removeEventListener("click", closeModal1)
    modal1.querySelector(".js-modal1-stop").removeEventListener("click", stopPropagation)
}

const stopPropagation = function (e) {
    e.stopPropagation()
}

//Ouverture de la modal1 avec le bouton Modifier
ouvrirModal1.addEventListener("click", openModal1)

//Partie qui permet de gérer la modal2

//Bouton ajouter photo qui ferme la modal1 et ouvre la modal2

ajoutPhoto.addEventListener("click", (event) =>{
    
    event.preventDefault
    modal1.style.display = "none"
    modal2.style.display = null
    
    modal2.addEventListener("click", closeModal2)
    //Bouton croix qui ferme la modale 2
    modal2.querySelector(".js-modal2-close").addEventListener("click", closeModal2)
    //Fermer la modal2 quand on clic à l'exterieur
    modal2.querySelector(".js-modal2-stop").addEventListener("click", stopPropagation)
})

//Bouton de retour arrière

backButton.addEventListener("click", () => {
    preview.innerHTML = ` <i class="fa-regular fa-image fa-6x"></i> ` //Permet d'afficher l'icône par défaut si on ferme la modal avec une image en preview
    
    let erreurMessage= document.querySelector(".msgErreur")
    if(erreurMessage){
        erreurMessage.remove()
    }
    
    modal1.style.display = null
    modal2.style.display = "none"
    reset.click()
})

//Fonction qui s'occupe de fermer la modal2
const closeModal2 = function (e) {
    if (modal2 === null) return
    e.preventDefault
    
    preview.innerHTML = `<i class="fa-regular fa-image fa-6x"></i>` //Permet d'afficher l'icône par défaut si on ferme la modal avec une image en preview
    
    let erreurMessage= document.querySelector(".msgErreur")
    if(erreurMessage){
        erreurMessage.remove()
    }
    
    modal2.style.display = "none"
    modal2.removeEventListener("click", closeModal1)
    modal2.querySelector(".js-modal2-close").removeEventListener("click", closeModal1)
    modal2.querySelector(".js-modal2-stop").removeEventListener("click", stopPropagation)
    reset.click()
}

//Le bouton echap ferme la modal1 et 2
window.addEventListener("keydown" , function(e){
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal1(e)
        closeModal2(e)
    }
})