

var tl = gsap.timeline()
tl.from("#nav img,#nav h3 , #nav h4, #nav button",{
y:-100,
duration : 1,
delay:0.4,
stagger:0.5,
})
tl.from("#main h1",{
 y : 100,
 opacity:0,
 stagger:0.1,
})
tl.from("#left,#right,#papa",{
 x : -100,
 opacity:0,
 stagger:0.3,
})
tl.from("h5",{
 x : -100,
opacity:0,
})
tl.to("h5",{
y:35,
repeat : -1,
yoyo : 1,
})
