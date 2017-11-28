(function() {
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('nav-menu')[0];
    var burgerContain = document.getElementsByClassName('nav-contain')[0];
    var burgerNav = document.getElementsByClassName('nav-list')[0];
  
    burgerMenu.addEventListener('click', function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function (el) {
        el.classList.toggle('open');
      });
    }, false);
})();