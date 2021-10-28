let tl = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease: "power1.inOut",
  },
  repeat: -1,
  yoyo: true,
});
tl.set("#Shadow", {
  transformOrigin: "50% 100%",
})
  .fromTo(
    "#Robot",
    {
      y: 2.5,
    },
    {
      y: -2.5,
    }
  )
  .to(
    "#Shadow",
    {
      scale: 0.75,
    },
    "<"
  );
