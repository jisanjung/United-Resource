var mobileMenu = document.getElementById("mobile-menu");

mobileMenu.addEventListener("click", function() {
    var mobileNav = document.getElementById("mobile-nav");

    if (mobileNav.style.transform === "translateY(0px)" && mobileNav.style.opacity === "1") {
        mobileNav.style.transform = "translateY(-150px)";
        mobileNav.style.opacity = "0";
        } else {
            mobileNav.style.transform = "translateY(0px)";
            mobileNav.style.opacity = "1";
        }
});