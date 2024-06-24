// Get the header element
const headerElement = document.querySelector('header');
console.log(headerElement);

// Get all the section elements
const sectionElements = document.querySelectorAll('section');
console.log(sectionElements);

// Get the section element with class="current"
const currentSection = document.querySelector('section.current');
console.log(currentSection);

// Get the section that comes after the current section
const nextSection = currentSection.nextElementSibling;
console.log(nextSection);

// Get the h2 node from the section before the 'current' section
const previousSection = currentSection.previousElementSibling;
const h2InPreviousSection = previousSection.querySelector('h2');
console.log(h2InPreviousSection);

// Get the div that contains the section that has an h2 with a class of 'highlight'
const divWithHighlight = document.querySelector('h2.highlight').closest('div');
console.log(divWithHighlight);

// Get all the sections that contain an H2 (using a single statement)
const sectionsWithH2 = document.querySelectorAll('section h2');
const sectionsWithH2Array = Array.from(sectionsWithH2).map(h2 => h2.parentElement);
console.log(sectionsWithH2Array);
