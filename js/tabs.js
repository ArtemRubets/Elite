document.querySelector('#tab-head').addEventListener('click', TabHead);

function TabHead(e) {
    let dataTab = (e.target.getAttribute('data-tab'));
    let tabItem = document.querySelectorAll('.tab-items');
    let tab = document.querySelectorAll('.tab');
    for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove('active')
    }
    e.target.classList.add('active');
    for (let i = 0; i < tabItem.length; i++) {
        if (dataTab == i) {
            tabItem[i].style.display = 'block'
        } else {
            tabItem[i].style.display = 'none'
        }
    }
}