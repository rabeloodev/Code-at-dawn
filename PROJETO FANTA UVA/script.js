gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 75%',
        end: '50% 30%',
        scrub: true,
        markers: true
    },
});

tl.to(
    '#fanta',
    {
        top: '120%',
        left: '08%',
    },
    'uvas'
);

tl.to(
  '#uvas',
  {
    top: '100%',
    left: '08%',
  },
  'uvas'  
);

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.there',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true, 
        markers: true,
    }
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        top: '110%',
        left: '-100%',
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);
