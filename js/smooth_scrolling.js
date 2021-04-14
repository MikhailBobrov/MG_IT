// Smooth Scrolling - option 2
// $('#navbar a, .btn').on('click', function (e) {
//     if (this.hash !== '') {
//         e.preventDefault();
//
//         const hash = this.hash;
//
//         $('html, body').animate(
//             {
//                 scrollTop: $(hash).offset().top - 100,
//             },
//             800
//         );
//     }
// });

//  Option 3

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});
