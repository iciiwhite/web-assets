        const loaderData = [
            {
                id: "l1",
                name: "Expanding Bars",
                html: '<div class="loader-l1"></div>',
                css: `.loader-l1 {
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#fff 0 0);
  --r1: radial-gradient(farthest-side at bottom,#fff 93%,#0000);
  --r2: radial-gradient(farthest-side at top   ,#fff 93%,#0000);
  background: 
    var(--c) ,var(--r1),var(--r2),
    var(--c) ,var(--r1),var(--r2),
    var(--c) ,var(--r1),var(--r2);
  background-repeat: no-repeat;
  animation: l1 1s infinite alternate;
}
@keyframes l1 {
  0%,10% {
    background-size: 8px 0,8px 4px,8px 4px;
    background-position: 0 50%,0 calc(50% - 2px),0 calc(50% + 2px),50% 50%,50% calc(50% - 2px),50% calc(50% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
 }
 90%,100% {
    background-size: 8px 100%,8px 4px, 8px 4px;
    background-position: 0 50%,0 -2px,0 calc(100% + 2px),50% 50%,50% -2px,50% calc(100% + 2px),100% 50%,100% -2px,100% calc(100% + 2px);
 }
}`
            },
            {
                id: "l2",
                name: "Conic Spinner",
                html: '<div class="loader-l2"></div>',
                css: `.loader-l2 {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--accent);
  --_m: conic-gradient(#0000 10%,#000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m); mask: var(--_m);
  -webkit-mask-composite: source-out; mask-composite: subtract;
  animation: l2 1s infinite linear;
}
@keyframes l2 {to{transform: rotate(1turn)}}`
            },
            {
                id: "l3",
                name: "Pulse Dots",
                html: '<div class="loader-l3"></div>',
                css: `.loader-l3 {
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l3 1s infinite linear alternate;
}
@keyframes l3 {
    0%  {box-shadow: 20px 0 #fff, -20px 0 #fff2; background: #fff }
    33% {box-shadow: 20px 0 #fff, -20px 0 #fff; background: #fff2}
    66% {box-shadow: 20px 0 #fff2,-20px 0 #fff; background: #fff }
    100%{box-shadow: 20px 0 #fff2,-20px 0 #fff2; background: #fff2}
}`
            },
            {
                id: "l4",
                name: "Loading Text",
                html: '<div class="loader-l4"></div>',
                css: `/* HTML: <div class="loader-l4"></div> */
.loader-l4 {
  width: fit-content;
  font-weight: bold;
  font-family: monospace;
  font-size: 20px;
  background: radial-gradient(circle closest-side,#000 94%,#0000) right/calc(200% - 1em) 100%;
  animation: l4 1s infinite alternate linear;
}
.loader-l4::before {
  content: "Loading...";
  line-height: 1em;
  color: #0000;
  background: inherit;
  background-image: radial-gradient(circle closest-side,#fff 94%,#000);
  -webkit-background-clip:text;
          background-clip:text;
}

@keyframes l4{
  100%{background-position: left}
}`
            },
            {
                id: "l5",
                name: "Dots 1",
                html: '<div class="loader-l5"></div>',
                css: `/* HTML: <div class="loader-l5"></div> */
.loader-l5 {
  width: 60px;
  fill: #FFFFFF;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side,#FFF 90%,#000000) 0/calc(100%/3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: l5 1s steps(4) infinite;
}
@keyframes l5 {to{clip-path: inset(0 -34% 0 0)}}`
            },
 
            {
                id: "l6",
                name: "Dots 2",
                html: '<div class="loader-l6"></div>',
                css: `/* HTML: <div class="loader-l6"></div> */
.loader-l6 {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side,#FFFFFF 90%,#0000) 0/calc(100%/3) 100% no-repeat;
  animation: l6 1s steps(3) infinite;
}
@keyframes l6 {to{background-position: 150%}}`
            },
            
            {
                id: "l7",
                name: "Dots 3",
                html: '<div class="loader-l7"></div>',
                css: `/* HTML: <div class="loader-l7"></div> */
.loader-l7 {
  width: 60px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side,#FFF 90%,#0000);
  background: 
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 50%;
  animation: l7 1s infinite linear;
}
@keyframes l7 {
    20%{background-position:0%   0%, 50%  50%,100%  50%}
    40%{background-position:0% 100%, 50%   0%,100%  50%}
    60%{background-position:0%  50%, 50% 100%,100%   0%}
    80%{background-position:0%  50%, 50%  50%,100% 100%}
}`
            },
            
            {
                id: "l",
                name: "Dots 4",
                html: '<div class="loader-l8"></div>',
                css: `/* HTML: <div class="loader-l8"></div> */
.loader-l8 {
  width: 60px;
  aspect-ratio: 4;
  --c:#FFFFFF 90%,#0000;
  background: 
    radial-gradient(circle closest-side at left  6px top 50%,var(--c)),
    radial-gradient(circle closest-side                     ,var(--c)),
    radial-gradient(circle closest-side at right 6px top 50%,var(--c));
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: l8 1s infinite alternate;
}
@keyframes l8 {
    to{width:25px;aspect-ratio: 1}
}`
            },
            
            {
                id: "l9",
                name: "Dorsts",
                html: '<div class="loader-l9"></div>',
                css: `/* HTML: <div class="loader"></div> */
.loader-l9 {
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l9 1s infinite linear alternate;
}
@keyframes l9 {
    0%  {box-shadow: 20px 0 #FFF, -20px 0 #0002;background: #FFF}
    33% {box-shadow: 20px 0 #FFF, -20px 0 #0002;background: #0002}
    66% {box-shadow: 20px 0 #0002,-20px 0 #FFF; background: #0002}
    100%{box-shadow: 20px 0 #0002,-20px 0 #FFF; background: #FFF }
}`
            },
            
            {
                id: "l10",
                name: "Dots",
                html: '<div class="loader-l10"></div>',
                css: `/* HTML: <div class="loaderl10"></div> */
.loader-l10 {
  width: 15px;
  aspect-ratio: 1;
  background: #FFFFFF;
  border-radius: 50%;
  animation: l10 1s infinite linear alternate;
}
@keyframes l10 {
    0%  {box-shadow: 15px 0,-25px 0}
    50% {box-shadow: 15px 0,-15px 0}
    100%{box-shadow: 25px 0,-15px 0}
}`
            },
            
            {
                id: "l",
                name: "Dots",
                html: '<div class="loader-l11"></div>',
                css: `/* HTML: <div class="loader-l11"></div> */
.loader-l11 {
  width: 60px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(circle closest-side,#FFF 90%,#0000);
  background: 
    var(--_g) 0%   50%,
    var(--_g) 50%  50%,
    var(--_g) 100% 50%;
  background-size: calc(100%/3) 100%;
  animation: l11 1s infinite linear;
}
@keyframes l11 {
    33%{background-size:calc(100%/3) 0%  ,calc(100%/3) 100%,calc(100%/3) 100%}
    50%{background-size:calc(100%/3) 100%,calc(100%/3) 0%  ,calc(100%/3) 100%}
    66%{background-size:calc(100%/3) 100%,calc(100%/3) 100%,calc(100%/3) 0%  }
}`
            },
            
            {
                id: "l12",
                name: "Dots",
                html: '<div class="loader-l12"></div>',
                css: `/* HTML: <div class="loader-l12"></div> */
.loader-l12 {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
}
.loader-l12::before,
.loader-l12::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #FFF;
}
.loader-l12::before {
  box-shadow: -25px 0;
  animation: l12-1 1s infinite linear;
}
.loader-l12::after {
  transform: rotate(0deg) translateX(25px);
  animation: l12-2 1s infinite linear;
}

@keyframes l12-1 {
    100%{transform: translateX(25px)}
}
@keyframes l12-2 {
    100%{transform: rotate(-180deg) translateX(25px)}
}`
            },
            
            {
                id: "l13",
                name: "Dots",
                html: '<div class="loader-l13"></div>',
                css: `/* HTML: <div class="loader-l13"></div> */
.loader-l13 {
  width: 4px;
  color: #FFF;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 
    19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 0px,
    19px 0     0 5px, 38px 0     0 5px, 57px 0     0 5px,
    19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 0px;
  transform: translateX(-38px);
  animation: l13 2s infinite linear;
}
@keyframes l13 {
  12.5% {box-shadow: 
    19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 5px,
    19px 0     0 5px, 38px 0     0 0px, 57px 0     0 5px,
    19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 0px}
  25%   {box-shadow: 
    19px -19px 0 5px, 38px -19px 0 0px, 57px -19px 0 5px,
    19px 0     0 0px, 38px 0     0 0px, 57px 0     0 0px,
    19px 19px  0 0px, 38px 19px  0 5px, 57px 19px  0 0px}
  50%   {box-shadow: 
    19px -19px 0 5px, 38px -19px 0 5px, 57px -19px 0 0px,
    19px 0     0 0px, 38px 0     0 0px, 57px 0     0 0px,
    19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 5px}
  62.5% {box-shadow: 
    19px -19px 0 0px, 38px -19px 0 0px, 57px -19px 0 0px,
    19px 0     0 5px, 38px 0     0 0px, 57px 0     0 0px,
    19px 19px  0 0px, 38px 19px  0 5px, 57px 19px  0 5px}
  75%   {box-shadow: 
    19px -19px 0 0px, 38px -19px 0 5px, 57px -19px 0 0px,
    19px 0     0 0px, 38px 0     0 0px, 57px 0     0 5px,
    19px 19px  0 0px, 38px 19px  0 0px, 57px 19px  0 5px}
  87.5% {box-shadow: 
    19px -19px 0 0px, 38px -19px 0 5px, 57px -19px 0 0px,
    19px 0     0 0px, 38px 0     0 5px, 57px 0     0 0px,
    19px 19px  0 5px, 38px 19px  0 0px, 57px 19px  0 0px}
}`
            },
            
            {
                id: "l14",
                name: "Dots",
                html: '<div class="loader-l14"></div>',
                css: `/* HTML: <div class="loader-14"></div> */
.loader-l14 {
  width: 32px;
  aspect-ratio: 1;
  --_g: no-repeat radial-gradient(farthest-side,#FFF 90%,#000);
  background: var(--_g), var(--_g), var(--_g), var(--_g);
  background-size: 40% 40%;
  animation: l14 1s infinite;
}
@keyframes l14 {
  0%  {background-position: 0 0      ,100% 0,100% 100%,0 100%}
  40%,
  50% {background-position: 100% 100%,100% 0,0    0   ,0 100%}
  90%,
  100%{background-position: 100% 100%,0 100%,0    0   ,100% 0}
}`
            },
            
            {
                id: "l15",
                name: "Spinner Semi",
                html: '<div class="loader-l15"></div>',
                css: `/* HTML: <div class="loader-l15"></div> */
.loader-l15 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid;
  border-color: #FFF #0000;
  animation: l15 1s infinite;
}
@keyframes l15 {to{transform: rotate(.5turn)}}`
            },
            
            {
                id: "l16",
                name: "Spinner",
                html: '<div class="loader-l16"></div>',
                css: `/* HTML: <div class="loader-l16"></div> */
.loader-l16 {
  width: 50px;
  --b: 8px; 
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1px;
  background: conic-gradient(#0000 10%,#f03355) content-box;
  -webkit-mask:
    repeating-conic-gradient(#0000 0deg,#000 1deg 20deg,#0000 21deg 36deg),
    radial-gradient(farthest-side,#0000 calc(100% - var(--b) - 1px),#000 calc(100% - var(--b)));
  -webkit-mask-composite: destination-in;
          mask-composite: intersect;
  animation:l16 1s infinite steps(10);
}
@keyframes l16 {to{transform: rotate(1turn)}}`
            },
            
            {
                id: "l17",
                name: "Spinner",
                html: '<div class="loader-l17"></div>',
                css: `/* HTML: <div class="loader-17"></div> */
.loader-l17 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  animation: l14 4s infinite;
}
.loader-l17::before,
.loader-l17::after {    
  content: "";
  grid-area: 1/1;
  border: 8px solid;
  border-radius: 50%;
  border-color: red red #0000 #0000;
  mix-blend-mode: darken;
  animation: l17 1s infinite linear;
}
.loader-l17::after {
  border-color: #0000 #0000 blue blue;
  animation-direction: reverse;
}
@keyframes l17{ 
  100%{transform: rotate(1turn)}
}`
            }
        ];