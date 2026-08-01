/* ==========================================================
                    PROJECT FOREVER
                    SCRIPT.JS
========================================================== */

const loadingScreen = document.getElementById("loading-screen");

const lockScreen = document.getElementById("lock-screen");

const intro = document.getElementById("intro");

const introVideo = document.getElementById("introVideo");

const hero = document.getElementById("hero");

const unlockBtn = document.getElementById("unlockBtn");

const secretAnswer = document.getElementById("secretAnswer");

const message = document.getElementById("message");

const bgMusic = document.getElementById("bgMusic");

const playVoice = document.getElementById("playVoice");

const voiceNote = document.getElementById("voiceNote");

/* ===========================
   CINEMATIC AUDIO DUCKING
=========================== */

let fadeInterval;

function fadeMusic(target){

    clearInterval(fadeInterval);

    fadeInterval=setInterval(()=>{

        if(bgMusic.volume<target){

            bgMusic.volume=Math.min(bgMusic.volume+0.02,target);

        }

        else if(bgMusic.volume>target){

            bgMusic.volume=Math.max(bgMusic.volume-0.02,target);

        }

        else{

            clearInterval(fadeInterval);

        }

    },40);

}

voiceNote.addEventListener("play",()=>{

    fadeMusic(0.08);

});

voiceNote.addEventListener("pause",()=>{

    fadeMusic(0.40);

});

voiceNote.addEventListener("ended",()=>{

    fadeMusic(0.40);

});

const startJourney = document.getElementById("startJourney");

const surpriseBtn = document.getElementById("surpriseBtn");

/* ==========================================================
                    LOADING
========================================================== */

window.addEventListener("load",()=>{

    loadingScreen.style.display="flex";
    lockScreen.style.display="none";

    setTimeout(()=>{

        loadingScreen.style.display="none";
        lockScreen.style.display="flex";

    },3000);

});
/* ==========================================================
                    SECRET ANSWER
========================================================== */

const correctAnswer="rose";

unlockBtn.addEventListener("click",()=>{

const answer=secretAnswer.value
.trim()
.toLowerCase();

if(answer===correctAnswer){

message.innerHTML=`

<div style="color:#8dffb1;font-size:22px;line-height:1.8;">

<b>Areyyy waahh madam ji...😁❤️</b>

<br><br>

It means you really know everything about us🥹✨

<br><br>

Welcome to our little world...

</div>

`;

setTimeout(()=>{

lockScreen.style.opacity="0";

lockScreen.style.visibility="hidden";

startIntro();

},1500);

}

else{

message.innerHTML=`

<div style="color:#ff9ca5;font-size:22px;line-height:1.8;">

<b>Awww...😭</b>

<br><br>

Itni jaldi bhool gyi ap to?

<br><br>

Huhhh😏 Chalo Ek aur chance diya aapko

</div>

`;

}

});
/* ==========================================================
                    START INTRO
========================================================== */

function startIntro(){

intro.classList.add("active");

/* Background Music */

bgMusic.volume=0.4;

bgMusic.play().catch(()=>{});

/* Intro Video */

introVideo.play().catch(()=>{});

/* Heart Burst */

// heartBurst();

/* After 8 Seconds */

setTimeout(()=>{

intro.classList.remove("active");

hero.scrollIntoView({

behavior:"smooth"

});

/*
setTimeout(()=>{
    heartBurst();
    heroExplosion();
},500);
*/



},5000);

}

/* ==========================================================
                    HEART BURST
========================================================== */

function heartBurst(){

const container=document.createElement("div");

container.className="hearts";

document.body.appendChild(container);

for(let i=0;i<30;i++){

const heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=

(Math.random()*3+3)+"s";

heart.style.fontSize=

(Math.random()*18+18)+"px";

container.appendChild(heart);

}

setTimeout(()=>{

container.remove();

},7000);

}

/* ==========================================================
                    HERO BUTTON
========================================================== */

startJourney.addEventListener("click",()=>{

document.getElementById("gallery")

.scrollIntoView({

behavior:"smooth"

});

});

/* ==========================================================
                    VOICE NOTE
========================================================== */

playVoice.addEventListener("click",()=>{

voiceNote.play();

});

/* ==========================================================
                    SURPRISE
========================================================== */

surpriseBtn.addEventListener("click",()=>{

alert(

"\n\nHappiee Girlfriend's Day Billu Badmos❤️\n\nI Love You Forever🥹😚🫂"

);

});
/* ==========================================================
                    ENTER KEY SUPPORT
========================================================== */

secretAnswer.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

unlockBtn.click();

}

});

/* ==========================================================
                    MUSIC FADE IN
========================================================== */

function fadeInMusic(){

bgMusic.volume=0;

const fade=setInterval(()=>{

if(bgMusic.volume<0.4){

bgMusic.volume+=0.02;

}

else{

clearInterval(fade);

}

},120);

}

bgMusic.addEventListener("play",fadeInMusic);

/* ==========================================================
                    INTRO VIDEO ENDED
========================================================== */

introVideo.addEventListener("ended",()=>{

intro.classList.remove("active");

hero.scrollIntoView({


behavior:"smooth"

});


    startHeroCelebration();

});

/* ==========================================================
                    IMAGE PRELOAD
========================================================== */

const images=[

"assets/photos/hero.jpg",

"assets/photos/gallery1.jpg",

"assets/photos/gallery2.jpg",

"assets/photos/gallery3.jpg",

"assets/photos/gallery4.jpg",

"assets/photos/gallery5.jpg",

"assets/photos/gallery6.jpg"

];

images.forEach(src=>{

const img=new Image();

img.src=src;

});

/* ==========================================================
                    SMOOTH BUTTON EFFECT
========================================================== */

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px) scale(1.04)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

/* ==========================================================
                    SURPRISE EFFECT
========================================================== */

surpriseBtn.addEventListener("click",()=>{

heartBurst();

});

/* ==========================================================
                    FINAL CONSOLE MESSAGE
========================================================== */

console.log("❤️ Project Forever Loaded Successfully ❤️");

/* ==========================================
        HERO OPENING EFFECTS
========================================== */

const heroEffects=document.getElementById("hero-effects");

const particles=[
"❤️",
"💖",
"💕",
"💗",
"💘",
"💝",
"✨",
"⭐",
"🌟",
"💫",
"🦋",
"🩷",
"🌸",
"🌹"
];

function createEffect(){

const el=document.createElement("span");

el.className="effect";

el.innerHTML=

particles[
Math.floor(
Math.random()*particles.length
)
];

el.style.left=Math.random()*100+"vw";

el.style.fontSize=

(18+Math.random()*26)+"px";

el.style.animationDuration=

(4+Math.random()*4)+"s";

el.style.animationDelay=

(Math.random()*0.5)+"s";

heroEffects.appendChild(el);

setTimeout(()=>{

el.remove();

},8000);

}

function heroExplosion(){

for(let i=0;i<140;i++){

setTimeout(()=>{

createEffect();

},i*25);

}

}

/* ==========================================
        START HERO EFFECTS
========================================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

heroExplosion();

},3500);

});

/* ==========================
   HERO CELEBRATION
========================== */

const heroFx=document.getElementById("hero-effects");

const heroEmojis=[
"💖","💕","💞","💗","💓","💘",
"❤️","🩷","💝","🌹","🌸","🌺",
"✨","⭐","🌟","🦋","🥰","😍",
"😘","💋","🎀","🎉","🎊","🤍"
];

function startHeroCelebration(){

    let count=0;

    const interval=setInterval(()=>{

        const el=document.createElement("span");

        el.className="hero-particle";

        el.innerHTML=
        heroEmojis[
        Math.floor(Math.random()*heroEmojis.length)
        ];

        el.style.left=Math.random()*100+"vw";

        el.style.fontSize=
        (18+Math.random()*30)+"px";

        el.style.animationDuration=
        (8+Math.random()*7)+"s";

        heroFx.appendChild(el);

        setTimeout(()=>{
            el.remove();
        },16000);

        count++;

        if(count>220){

            clearInterval(interval);

        }

    },60);

}