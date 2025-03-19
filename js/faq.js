// document.addEventListener('DOMContentLoaded', function () {
//     const accordionItems = document.querySelectorAll('.accordion-item');

//     accordionItems.forEach(item => {
//         const header = item.querySelector('a');
//         header.addEventListener('click', function (e) {
//             e.preventDefault(); // Prevent default anchor behavior

//             const content = item.querySelector('.content');
//             const isActive = item.classList.contains('active');

//             // Close all accordion items
//             accordionItems.forEach(otherItem => {
//                 otherItem.classList.remove('active');
//                 otherItem.querySelector('.content').classList.remove('active');
//             });

//             // Open the clicked item if it was not already active
//             if (!isActive) {
//                 item.classList.add('active');
//                 content.classList.add('active');
//             }
//         });
//     });
// });

const items = document.querySelectorAll(".accordion a");
function toggleAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}
items.forEach(item => item.addEventListener('click', toggleAccordion));

document.querySelector('.region__map').addEventListener('mouseenter', function () {
    document.querySelector('.offers__attribute').classList.add(active);
});

document.querySelector('.region__map').addEventListener('mouseleave', function () {
    document.querySelector('.offers__attribute').classList.remove('active');
});