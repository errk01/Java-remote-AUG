
// let el = document.getElementById('username');
// let inputs = document.getElementsByTagName('input')
// let inError = document.getElementsByClassName('error')


// console.log(inputs.length)
// console.log(inError.length)


// let firstButton = document.querySelector('button')
// let inError = document.querySelectorAll('input.error')


// console.log(firstButton)
// console.log(inError)


// let links = document.querySelectorAll('a')
// let arrayOfLinks = Array.from(links)

// let linkCount = links.length;

// let fitstLink = links[0]



// links.forEach(function(link){

// })


// let listItems = document.querySelector('ul').children

// console.log(listItems.length)

// let selectedItem = document.querySelector('li.selected')

// let first = selectedItem.previousElementSibling;
// let last = selectedItem.nextElementSibling;
// let list = selectedItem.parentElement;

// let header = selectedItem.parentElement.parentElement;
// let section = selectedItem.parentElement.parentElement.nextElementSibling;

// console.log(section)


// let div = document.querySelector('div')
// let a = document.querySelector('a')

// console.log(a.innerHTML)
// console.log(div.innerHTML)

// a.innerHTML = "Updated link text"


// let a = document.querySelector('a')

// console.log(a.href)


// a.name = 'new link name'

// a.target = "_blank"

// document.querySelector('.first').remove()

////////// Remember this  tag for the home work.........

// create the new html tag
// let newLi = document.createElement('li')
// // add the text for the new html tag
// newLi.innerHTML = "item 2"

// // select the area to attaach the tag
// let list = document.querySelector('ul')
// // add the tag to the selected child tag to the parent tag
// list.appendChild(newLi)


let el = document.getElementById('myEl')


el.addEventListener('click', function(event){
    console.log('clicked')
})


el.addEventListener('mouseover', function(event){
    el.innerHTML = 'hovered over button'
})



document.querySelector('.outer').addEventListener('click', function(event){
console.log('target',event.target)
console.log('currentTarget',event.currentTarget)

})







