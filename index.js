// get the link element by its ID
const link = document.getElementById('myLink');

// get the element to which you want to add the class
const targetElement = document.getElementById('popup');
const targetElement2 = document.getElementById('triangle');

// add an event listener to the link element
link.addEventListener('click', () =>  {

  targetElement.classList.toggle('hide'); // add the class to the target element
  targetElement2.classList.toggle('hide'); // add the class to the target element
});
