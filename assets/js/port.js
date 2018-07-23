import anime from "animejs";

// anime({
//     targets: '.sect-1',
//     translateX: [{
//             value: 100,
//             duration: 1200
//         },
//         {
//             value: 100,
//             duration: 1200
//         }
//     ],
//     background: '#000',
//     duration: 2000,
//     loop: true,
// });
try {
    (() => console.log("hello!"))
} catch (error) {
    console.error("something went bloody");
}
var links = document.querySelectorAll('.nav-item');

let options = {
    rootMargin: `10px`,
    treshold: 1.0
}
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            links.forEach(llink => {
                link.style.backgroundColor = 'white';
                link.style.color = 'white';
            })
            observer.unobserve(entry.target)
        } else {
            link.style.backgroundColor = '#000';
            link.style.color = '#000'
        }
        console.log(entry.isIntersecting);
    })
}