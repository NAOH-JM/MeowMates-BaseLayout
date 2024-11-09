/*===SHOW MENU===*/
const showMenu = (toggleID, navID) =>{
    const toggle = document.getElementById(toggleID)
    const nav = document.getElementById(navID)

    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')