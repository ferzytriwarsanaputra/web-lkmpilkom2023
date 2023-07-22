let hamburger = document.querySelector('.hamburger'),
    hamburger_item = document.querySelectorAll('.hamburger div'),
    hamburgerItem = document.querySelector(".hamburger-item");

hamburger.onclick = () => {
    hamburger_item[0].classList.toggle("hbg0");
    hamburger_item[1].classList.toggle("hbg1");
    hamburger_item[2].classList.toggle("hbg2");
    hamburgerItem.classList.toggle("hbg");
}