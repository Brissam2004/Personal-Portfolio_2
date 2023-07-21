const header = document.querySelector(".Navbar");
const sectionOne = document.querySelector("#sec-1");
const sectionOneOption = {
    rootMargin: "-100px 0px 0px 0px"
};
const sectionOneObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("Navbar-scrolled");
        } else {
            header.classList.remove('Navbar-scrolled');
        }
    });
}, sectionOneOption);
sectionOneObserver.observe(sectionOne);

const link1 = document.querySelector(".link-1");
const SectionOne = document.querySelector("#sec-1");
const SectionOneOption = {
    rootMargin: "-100px 0px 0px 0px"
};
const SectionOneObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            link1.classList.add("link-scrolled-1");
        } else {
            link1.classList.remove('link-scrolled-1');
        }
    });
}, SectionOneOption);
SectionOneObserver.observe(SectionOne);

const link2 = document.querySelector(".link-2");
const SEctionOne = document.querySelector("#sec-1");
const SEctionOneOption = {
    rootMargin: "-100px 0px 0px 0px"
};
const SEctionOneObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            link2.classList.add("link-scrolled-2");
        } else {
            link2.classList.remove('link-scrolled-2');
        }
    });
}, SEctionOneOption);
SEctionOneObserver.observe(SEctionOne);

const link3 = document.querySelector(".link-3");
const SeCtionOne = document.querySelector("#sec-1");
const SeCtionOneOption = {
    rootMargin: "-100px 0px 0px 0px"
};
const SeCtionOneObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            link3.classList.add("link-scrolled-3");
        } else {
            link3.classList.remove('link-scrolled-3');
        }
    });
}, SeCtionOneOption);
SeCtionOneObserver.observe(SeCtionOne);

const link4 = document.querySelector(".link-4");
const SecTionOne = document.querySelector("#sec-1");
const SecTionOneOption = {
    rootMargin: "-100px 0px 0px 0px"
};
const SecTionOneObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            link4.classList.add("link-scrolled-4");
        } else {
            link4.classList.remove('link-scrolled-4')
        }
    });
}, SecTionOneOption);
SecTionOneObserver.observe(SecTionOne);