

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
    smooth: 1,
    effects: true,
})



function banner () {
    gsap.from(".sectionHero", {
    opacity: 0,
    duration: 2,
})

gsap.from("picture:nth-child(2)", {
    y: 100,
    duration: 1,
})

gsap.from("picture:nth-child(1)", {
    y: -100,
    duration: 1,
})

gsap.from(".cards", {
    opacity: 0,
    filter: "blur(10px)",
    y: 50,
    stagger: 0.5,
    scrollTrigger: {
        trigger: ".cards",
        scrub: true,
        end: "0% 40%",
        start: "0% 70%"
    }
})

gsap.from("footer", {
    y: -500,
    immediateRender: true,
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidadeOnRefresh: true,
    }
})



const textSS = document.querySelectorAll(".textSplit");
textSS.forEach(text => {
    const textS = SplitText.create(text, {
    type: "lines, chars, words",
    mask: "lines"
})

gsap.from(textS.chars, {
    y: 20,
    opacity: 0,
    stagger: 0.05,
    duration: 0.05,
    scrollTrigger: {
        trigger: text,
    }
})
})
}


const animar = gsap.timeline({
    onComplete(){
    banner();
    gsap.to("#preloader", {
    opacity: 0,
    display: "none",
    })
}}

    
);

animar.to("#preloader path", {
    duration: 1,
    strokeDashoffset: 0,
})

animar.to("#preloader path", {
    duration: .5,
    fill: "rgb(163, 0, 0)",
})





