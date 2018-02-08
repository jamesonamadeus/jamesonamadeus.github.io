//burger
(function () {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('nav-menu')[0];
  var burgerContain = document.getElementsByClassName('nav-contain')[0];
  var burgerNav = document.getElementsByClassName('nav-list')[0];

  burgerMenu.addEventListener(
    'click',
    function toggleClasses() {
      [body, burgerContain, burgerNav].forEach(function (el) {
        el.classList.toggle('open');
      });
    },
    false
  );
})();

//smooth scrolling
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  offset: -30,
  easing: 'easeInOutQuad'
});

//fade intro
code = document.getElementById('code');
code.classList.toggle('fade');

setTimeout(function () {
  mockup = document.getElementById('mockup');
  mockup.style.display = 'block';

  var tmax_optionsGlobal = {
    repeat: -1,
    repeatDelay: 0.65,
    yoyo: true
  };

  CSSPlugin.useSVGTransformAttr = true;

  var tl = new TimelineMax(tmax_optionsGlobal),
    path = '#mockup *',
    stagger_val = 0.009,
    duration = 4;

  $.each($(path), function (i, el) {
    tl.set($(this), {
      x: '+=' + getRandom(-1000, 1000),
      y: '+=' + getRandom(-1000, 1000),
      rotation: '+=' + getRandom(-720, 720),
      scale: 0,
      opacity: 0
    });
  });

  var stagger_opts_to = {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: Power4.easeOut
  };

  tl.staggerTo(path, duration, stagger_opts_to, stagger_val);

  var $svg = $('svg');
  $svg.hover(
    function () {
      tl.timeScale(0.15);
    },
    function () {
      tl.timeScale(1);
    });

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
}, 3000);
