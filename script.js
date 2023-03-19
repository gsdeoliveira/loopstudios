body = document.querySelector("body")
topo = document.querySelector(".topo")
burger_icon = document.querySelector(".burger-icon img")
burger_menu = document.querySelector(".burger-menu")
main_tittle = document.querySelector(".main-tittle")

burger_icon.addEventListener("click", () => {
    
    if (burger_menu.style.display == 'block') {
        main_tittle.style.display = 'flex'
        burger_icon.src = 'images/icon-hamburger.svg'
        topo.classList.remove('topo-mobile')
        body.style.overflow = 'visible'
        burger_menu.style.display = 'none'
        
    }
    
    else {
        main_tittle.style.display = 'none'
        burger_icon.src = 'images/icon-close.svg'
        topo.classList.add('topo-mobile')
        body.style.overflow = 'hidden'
        burger_menu.style.display = 'block'
    }


})
