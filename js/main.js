var masthead,
    slides,
    buttons,
    contents,
    container,
    i,
    k;

/*Slider*/
masthead = document.querySelector(".mh-image");

slides = [
    "<figure><img src='img/sun.jpg' alt='sun'><figcaption>Solar Energy</figcaption></figure>",
    "<figure><img src='img/wind-1.jpg' alt='wind-1'><figcaption>Wind Energy</figcaption></figure>",
    "<figure><img src='img/wind-2.jpg' alt='wind-2'><figcaption>Wind Energy</figcaption></figure>",
    "<figure><img src='img/dam.jpg' alt='dam'><figcaption>Water Energy</figcaption></figure>"
];
i = 0;
function fadeOut() {
    "use strict";
    masthead.style.opacity = 0;
}
function runSlides() {
    "use strict";
    masthead.style.opacity = 1;
    if (i > 3) {
        i = 0;
    }
    masthead.innerHTML = slides[i];
    i += 1;
    setTimeout(fadeOut, 5000);
}
runSlides();
setInterval(runSlides, 6000);

/*Button*/

buttons = document.querySelectorAll("button");
contents = [
    "<img src=\"img/share.jpg\" class=\"clearfix\"><p>For those who are renting appartments, or don't have enough space to install solar panels on their roofs, shared solar systems could be provided.</p>",
    "<img src=\"img/gov.jpg\" class=\"clearfix\"><p>Government could invest more on the development of green energy. As the system is more and more mature, the cost of it will decrease.</p>",
    "<img src=\"img/career.jpg\" class=\"clearfix\"><p>If more career opportunitis in the green energy industry could be provided by investors, charities and governments, more people will be able to contribute to this field so as to make green energy more affordable</p>"
];

container = document.querySelector(".container");
container.innerHTML = contents[0];

function handleClick(ev) {
    "use strict";
    for (i = 0; i < buttons.length; i += 1) {
        buttons[i].removeAttribute("class");
    }
    if (ev.target.innerHTML === "Shared Systems") {
        container.innerHTML = contents[0];
    } else if (ev.target.innerHTML === "Government Support") {
        container.innerHTML = contents[1];
    } else if (ev.target.innerHTML === "Career Opportunities") {
        container.innerHTML = contents[2];
    }
    ev.target.setAttribute("class", "active");
    
}

for (k = 0; k < buttons.length; k += 1) {
    buttons[k].addEventListener("click", handleClick, false);
}
