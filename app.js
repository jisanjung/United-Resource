var mobileMenu = document.getElementById("mobile-menu");

mobileMenu.addEventListener("click", function() {
    var mobileNav = document.getElementById("mobile-nav");

    if (mobileNav.style.opacity === "1") {
        mobileNav.style.opacity = "0";
        } else {
            mobileNav.style.opacity = "1";
        }
});