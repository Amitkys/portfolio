// Demo 
const hello = new SplitType('#Hello');
gsap.from('#Hello .char', {
    x: -50,
    stagger: 0.05,
    duration: 2,
    delay: 0.09,
    ease: "power3.out",
    // repeat: -1,
    // yoyo: true,
    opacity: 0
    
    
});

const titles = gsap.utils.toArray('.animate-para');
    const t1 = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });
    titles.forEach(title => {
      const splitTitle = new SplitType(title);
      t1.from(splitTitle.chars, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.04,
        duration: 1,
        ease: "power1.inOut",
      }, "<")
      .to(splitTitle.chars, {
        opacity: 0,
        y: -20,
        rotateX: 90,
        stagger: 0.04,
        ease: "power1.inOut",
      }, "+=1");
});