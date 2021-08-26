let q = document.querySelector.bind(document)
// let div = document.querySelector.bind('div')
let qa = document.querySelectorAll.bind(document)



// Get the header element
let first = q('header');
// Get all the section elements
let second = qa('section')
// Get the section element with class="current"
let three = q('section.current')
// document.getElementsByClassName('current')
// Get the section that comes after the current section
let four = q('section.current').nextElementSibling
// Get the h2 node from the section before the 'current' section
let five = q('section.current').previousElementSibling.children[0];
// Get the div that contains the section that has an h2 with a class of 'highlight'
let six = q('h2.highlight').parentElement.parentElement
// Get all the sections that contain an H2 (using a single statement);

let seven = Array.from(qa('section h2')).map(function(el){
    return el.parentElement
})

console.log(five)