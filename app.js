var mobileMenu = document.getElementById("mobile-menu");

mobileMenu.addEventListener("click", menuToggle);

function menuToggle() {
    var mobileNav = document.getElementById("mobile-nav");
    var deviceWidth = window.matchMedia("(min-width: 475px)");

    if (mobileNav.style.transform === "translateY(0px)" && mobileNav.style.opacity === "1") {
        mobileNav.style.transform = "translateY(-250px)";
        mobileNav.style.opacity = "0";
        } else {
            mobileNav.style.transform = "translateY(0px)";
            mobileNav.style.opacity = "1";
        }
}