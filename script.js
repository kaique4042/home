/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 600);

        }, 2500);

    }

});


/* ==========================
   MENU HAMBÚRGUER
========================== */

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        if(navMenu.classList.contains("active")){

            menuBtn.innerHTML = "✕";

        }else{

            menuBtn.innerHTML = "☰";

        }

    });

}


/* ==========================
   FECHAR MENU AO CLICAR
========================== */

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        if(menuBtn){

            menuBtn.innerHTML = "☰";

        }

    });

});


/* ==========================
   BOTÃO VOLTAR AO TOPO
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(topBtn){

        if(window.scrollY > 300){

            topBtn.style.display = "block";

        }else{

            topBtn.style.display = "none";

        }

    }

});

if(topBtn){

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}


/* ==========================
   ANIMAÇÕES AO ROLAR
========================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if(sectionTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


/* ==========================
   HEADER AO ROLAR
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(header){

        if(window.scrollY > 80){

            header.style.background = "rgba(0,0,0,0.95)";

        }else{

            header.style.background = "rgba(0,0,0,0.85)";

        }

    }

});