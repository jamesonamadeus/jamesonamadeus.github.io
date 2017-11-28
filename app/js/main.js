(function() {
    var body = document.body;
    var burgerMenu = document.getElementsByClassName('brgr-menu')[0];
    var burgerContain = document.getElementsByClassName('brgr-container')[0];
    var burgerNav = document.getElementsByClassName('brgr-nav')[0];
  
    burgerMenu.addEventListener('click', function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function (el) {
        el.classList.toggle('open');
      });
    }, false);
})();