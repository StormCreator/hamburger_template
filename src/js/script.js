 console.log('dadada');
 const $hamburgerBtn = document.querySelector(".hamburger-btn__burger");
    let menu = document.querySelector('nav');
    let isMenuOpen = false;
    $hamburgerBtn.addEventListener("click", () => {
        if (!isMenuOpen) {
            $hamburgerBtn.classList.add("open");
            menu.classList.add('mobile__menu');
            menu.classList.remove('menu');
            
        } else {
            $hamburgerBtn.classList.remove("open");
            menu.classList.remove('mobile__menu');
            menu.classList.add('menu');
        }

        isMenuOpen = !isMenuOpen;
    });