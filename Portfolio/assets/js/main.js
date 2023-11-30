/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
      console.log(tabs)

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        if (tabs[0].className.includes("filter-tab-active")) {
            
            // affichage enable disabled tab
            tabs[1].classList.add("filter-tab-active")
            tabs[0].classList.remove("filter-tab-active")

            // affichage enable disabled skills or project
            let test  = document.getElementsByClassName("skills__content");
            test[0].classList.remove("filters_disabled")
            let test2  = document.getElementsByClassName("projects__content");
            test2[0].classList.add("filters_disabled")
        } else if (tabs[1].className.includes("filter-tab-active")) {
            tabs[0].classList.add("filter-tab-active")
            tabs[1].classList.remove("filter-tab-active")
            let test  = document.getElementsByClassName("skills__content");
            test[0].classList.add("filters_disabled")
            let test2  = document.getElementsByClassName("projects__content");
            test2[0].classList.remove("filters_disabled")
        } else {
            alert('error');
        }
    })
})

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin : 'top',
    distance : '68px',
    duration : 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay:500})
sr.reveal(`.profile__profession`, {delay:600})
sr.reveal(`.profile__social`, {delay:700})
sr.reveal(`.profile__info-group`, {interval:100,delay:700})
sr.reveal(`.profile__buttons`, {delay:800})
sr.reveal(`.filters__content`, {delay:900})
sr.reveal(`.filters`, {delay:1000})
sr.reveal(`.form`, {delay:900})
