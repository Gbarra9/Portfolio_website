// SELECT DOM ITEMS

// JS variable declarations and store an element value
// NOTE: querySelector grabs first element
// querySelector method will select input passed by user, (.menu-btn is selected)

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')

// Method querySelectorAll grab all elements with matching input and puts them into node list of elements (similar to an array)
// Grabs all elements with class of '.nav-item'
const navItems = document.querySelectorAll('nav-item')

// SET INITIAL STATE OF MENU
// declare a variable using let, variable value will be reassigned at different times 
let showMenu = false

// addEventListener - action will take place when clicked
// after clicking, toggleMenu function will happen
menuBtn.addEventListener('click', toggleMenu)
// declare/define toggleMenu function

function toggleMenu() {
  // if menu,the overlay with portrait and nav items, is not shown
  // then show overlay when menuBtn is clicked
  if (!showMenu) {
    // classList can be used to add class, input chosen 'close'
    menuBtn.classList.add('close')
    menu.classList.add('show')
    menuNav.classList.add('show')
    menuBranding.classList.add('show')
    // method forEach Loops through every item in array
    // pass the variable we want to represent as each item, variable can be given any name
    // for each item in array add show class
    navItems.forEach(item => item.classList.add('show'))
    // SET MENU STATE (RESET MENU STATE)
    // showMenu is true because menu overlay is open on screen
    showMenu = true
  } else {
    // if menu overlay is true and shown, remove classes
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('show')
    menuBranding.classList.remove('show')
    // method forEach Loops through every item in array
    // pass the variable we want to represent as each item, variable can be given any name
    // for each item in array remove show class
    navItems.forEach(item => item.classList.remove('show'))
    // SET MENU STATE (RESET MENU STATE)
    // showMenu is now false
    showMenu = false
  }
}