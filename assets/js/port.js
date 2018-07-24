//Intersection observer
var sect1 = document.querySelector("section");

var menu = document.querySelector(".menu");
var navlinks = document.querySelectorAll(".nav-item:not(.logo)");
var socialLinks = document.querySelectorAll(".nav-item>i");

var options = {
  root: null,
  rootMargin: "-11px",
  treshold: 1.0
};
var myobsvr = new IntersectionObserver(callback, options);

function callback(entries, self) {
  entries.forEach(entry => {
    if (entry.isIntersecting == 0) {
      menu.style.backgroundColor = "black";
      navlinks.forEach(link => (link.style.color = "white"));
      socialLinks.forEach(link => (link.style.backgroundColor = "white"));
      socialLinks.forEach(link => (link.style.backgroundColor = "white"));
    } else {
      navlinks.forEach(link => (link.style.color = "black"));
      navlinks.forEach(link => (menu.style.backgroundColor = "white"));
      socialLinks.forEach(link => (link.style.backgroundColor = "black"));
    }
    console.log(`the ratio is : ${entry.intersectionRatio}`);
  });
}

myobsvr.observe(sect1);
//End intersection observer

// Region 1
let mainNavLinks = document.querySelector(".summon li a");

mainNavLinks.addEventListener("click", e => {
  mainNavLinks == e.target
    ? mainNavLinks.parentNode.classList.add("active")
    : mainNavLinks.classList.remove("active");
});
// End region 1
