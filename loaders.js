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
                id: "l8",
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
            },
            
            {
                id: "l18",
                name: "Spinner",
                html: '<div class="loader-l18"></div>',
                css: `/* HTML: <div class="loader-l18"></div> */
.loader-l18 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
}
.loader-l18::before,
.loader-l18::after {    
  content:"";
  grid-area: 1/1;
  --c:no-repeat radial-gradient(farthest-side,#25b09b 92%,#0000);
  background: 
    var(--c) 50%  0, 
    var(--c) 50%  100%, 
    var(--c) 100% 50%, 
    var(--c) 0    50%;
  background-size: 12px 12px;
  animation: l18 1s infinite;
}
.loader-l18::before {
  margin: 4px;
  filter: hue-rotate(45deg);
  background-size: 8px 8px;
  animation-timing-function: linear
}

@keyframes l18 { 
  100%{transform: rotate(.5turn)}
}`
            },
            
            {
                id: "l19",
                name: "Spinner",
                html: '<div class="loader-l19"></div>',
                css: `/* HTML: <div class="loader-l19"></div> */
.loader-l19 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: #25b09b;
  animation: l15 1s infinite linear;
}
.loader-l19::before,
.loader-l19::after {    
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: l19 2s infinite;
}
.loader-l19::after {
  margin: 8px;
  animation-duration: 3s;
}
@keyframes l19{ 
  100%{transform: rotate(1turn)}
}`
            },
            
            {
                id: "l20",
                name: "Spinner",
                html: '<div class="loader-l20"></div>',
                css: `/* HTML: <div class="loader-l20"></div> */
.loader-l20 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-color: #ccc #0000;
  animation: l20 1s infinite linear;
}
.loader-l20::before,
.loader-l20::after {    
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
}
.loader-l20::before {
  border-color: #f03355 #0000;
  animation: inherit; 
  animation-duration: .5s;
  animation-direction: reverse;
}
.loader-l20::after {
  margin: 8px;
}
@keyframes l20{ 
  100%{transform: rotate(1turn)}
}`
            },
            
            {
                id: "l21",
                name: "Spinner Planets",
                html: '<div class="loader-l21"></div>',
                css: `/* HTML: <div class="loader-l21"></div> */
.loader-l21 {
  width: 70px;
  aspect-ratio: 1;
  background:
    radial-gradient(farthest-side,#ffa516 90%,#0000) center/16px 16px,
    radial-gradient(farthest-side,green   90%,#0000) bottom/12px 12px;
  background-repeat: no-repeat;
  animation: l21 1s infinite linear;
  position: relative;
}
.loader-l21::before {    
  content:"";
  position: absolute;
  width: 8px;
  aspect-ratio: 1;
  inset: auto 0 16px;
  margin: auto;
  background: #ccc;
  border-radius: 50%;
  transform-origin: 50% calc(100% + 10px);
  animation: inherit;
  animation-duration: 0.5s;
}
@keyframes l21 { 
  100%{transform: rotate(1turn)}
}`
            },
            
            {
                id: "l22",
                name: "Spinner Sds",
                html: '<div class="loader-l22"></div>',
                css: `/* HTML: <div class="loader-l22"></div> */
.loader-l22 {
  width: 50px;
  aspect-ratio: 1;
  --c:no-repeat radial-gradient(farthest-side,#514b82 92%,#0000);
  background: 
    var(--c) 50%  0, 
    var(--c) 50%  100%, 
    var(--c) 100% 50%, 
    var(--c) 0    50%;
  background-size: 10px 10px;
  animation: l22 1s infinite;
  position: relative;
}
.loader-l22::before {    
  content:"";
  position: absolute;
  inset:0;
  margin: 3px;
  background: repeating-conic-gradient(#0000 0 35deg,#514b82 0 90deg);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 3px),#000 0);
  border-radius: 50%;
}
@keyframes l22 { 
  100%{transform: rotate(.5turn)}
}`
            },
            
            {
                id: "l23",
                name: "Spinner Settings",
                html: '<div class="loader-l23"></div>',
                css: `/* HTML: <div class="loader-l23"></div> */
.loader-l23 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  color: #854f1d;
  background: radial-gradient(farthest-side, currentColor calc(100% - 6px),#0000 calc(100% - 5px) 0);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 13px),#000 calc(100% - 12px));
  border-radius: 50%;
  animation: l23 2s infinite linear;
}
.loader-l23::before,
.loader-l23::after {    
  content: "";
  grid-area: 1/1;
  background:
    linear-gradient(currentColor 0 0) center,
    linear-gradient(currentColor 0 0) center;
  background-size: 100% 10px,10px 100%;
  background-repeat: no-repeat;
}
.loader-l23::after {
   transform: rotate(45deg);
}

@keyframes l23 { 
  100%{transform: rotate(1turn)}
}`
            },
            
            {
                id: "l24",
                name: "Spinner Grower",
                html: '<div class="loader-l24"></div>',
                css: `/* HTML: <div class="loader-l24"></div> */
.loader-l24 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #514b82;
  animation:
    l24-1 0.8s infinite linear alternate,
    l24-2 1.6s infinite linear;
}
@keyframes l24-1{
   0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
   12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
   25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
   50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
   75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
   100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
}
@keyframes l24-2{ 
  0%    {transform:scaleY(1)  rotate(0deg)}
  49.99%{transform:scaleY(1)  rotate(135deg)}
  50%   {transform:scaleY(-1) rotate(0deg)}
  100%  {transform:scaleY(-1) rotate(-135deg)}
}`
            },
            
            {
                id: "l25",
                name: "Spinning World",
                html: '<div class="loader-l25"></div>',
                css: `/* HTML: <div class="loader-l25"></div> */
.loader-l25 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background: conic-gradient(#25b09b 25%,#f03355 0 50%,#514b82 0 75%,#ffa516 0);
  animation: l25 2s infinite linear;
}
.loader-l25::before,
.loader-l25::after {
   content: "";
   grid-area: 1/1;
   margin: 15%;
   border-radius: 50%;
   background: inherit;
   animation: inherit;
}
.loader-l25::after {
   margin: 25%;
   animation-duration: 3s;
}
@keyframes l25 {
  100% {transform: rotate(1turn)}
}`
            },
            
            {
                id: "l26",
                name: "Classic Spinner",
                html: '<div class="loader-l26"></div>',
                css: `/* HTML: <div class="loader-l26"></div> */
.loader-l26 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background:
    linear-gradient(0deg ,rgb(0 0 0/50%) 30%,#0000 0 70%,rgb(225 225 225/100%) 0) 50%/8% 100%,
    linear-gradient(90deg,rgb(0 0 0/25%) 30%,#0000 0 70%,rgb(225 225 225/75% ) 0) 50%/100% 8%;
  background-repeat: no-repeat;
  animation: l26 1s infinite steps(12);
}
.loader-l26::before,
.loader-l26::after {
   content: "";
   grid-area: 1/1;
   border-radius: 50%;
   background: inherit;
   opacity: 0.915;
   transform: rotate(30deg);
}
.loader-l26::after {
   opacity: 0.83;
   transform: rotate(60deg);
}
@keyframes l26 {
  100% {transform: rotate(1turn)}
}`
            },
            
            {
                id: "l27",
                name: "Eclipse",
                html: '<div class="loader-l27"></div>',
                css: `/* HTML: <div class="loader-l27"></div> */
.loader-l27 {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #514b82;
  -webkit-mask: radial-gradient(circle closest-side at 50% 40%,#0000 94%, #000);
  transform-origin: 50% 40%;
  animation: l27 1s infinite linear;
}
@keyframes l27 {
  100% {transform: rotate(1turn)}
}`
            },
            
            {
                id: "l28",
                name: "Spinner Dots",
                html: '<div class="loader-l28"></div>',
                css: `/* HTML: <div class="loader-l28"></div> */
.loader-l28 {
  width: 50px;
  aspect-ratio: 1;
  display:grid;
  -webkit-mask: conic-gradient(from 15deg,#0000,#000);
  animation: l28 1s infinite steps(12);
}
.loader-l28,
.loader-l28:before,
.loader-l28:after{
  background:
    radial-gradient(closest-side at 50% 12.5%,
     #f03355 96%,#0000) 50% 0/20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%,
     #f03355 96%,#0000) 0 50%/80% 20% repeat-x;
}
.loader-l28:before,
.loader-l28:after {
  content: "";
  grid-area: 1/1;
  transform: rotate(30deg);
}
.loader-l28:after {
  transform: rotate(60deg);
}

@keyframes l28 {
  100% {transform:rotate(1turn)}
}`
            },
            
            {
                id: "l29",
                name: "Spinner Family",
                html: '<div class="loader-l29"></div>',
                css: `/* HTML: <div class="loader-l29"></div> */
.loader-l29 {
  --d:22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: #25b09b;
  box-shadow: 
    calc(1*var(--d))      calc(0*var(--d))     0 0,
    calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
    calc(0*var(--d))      calc(1*var(--d))     0 2px,
    calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
    calc(-1*var(--d))     calc(0*var(--d))     0 4px,
    calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
    calc(0*var(--d))      calc(-1*var(--d))    0 6px;
  animation: l29 1s infinite steps(8);
}
@keyframes l29{
  100% {transform: rotate(1turn)}
}`
            },
            
            {
                id: "l30",
                name: "Play Square",
                html: '<div class="loader-l30"></div>',
                css: `/* HTML: <div class="loader-l30"></div> */
.loader-l30 {
    width: 40px;
    height: 40px;
    --c:no-repeat linear-gradient(orange 0 0);
    background: var(--c),var(--c),var(--c),var(--c);
    background-size: 21px 21px;
    animation: l30 1.5s infinite cubic-bezier(0.3,1,0,1);
}
@keyframes l30 {
   0%   {background-position: 0    0,100% 0   ,100% 100%,0 100%}
   33%  {background-position: 0    0,100% 0   ,100% 100%,0 100%;width:60px;height: 60px}
   66%  {background-position: 100% 0,100% 100%,0    100%,0 0   ;width:60px;height: 60px}
   100% {background-position: 100% 0,100% 100%,0    100%,0 0   }
}`
            },
            
            {
                id: "l31",
                name: "Break Box",
                html: '<div class="loader-l31"></div>',
                css: `/* HTML: <div class="loader-l31"></div> */
.loader-l31 {
  width: 40px;
  height: 20px;
  background: cyan;
  position: relative;
  animation: l31-0 1.5s infinite linear;
}
.loader-l31:before,
.loader-l31:after {
   content:"";
   position: absolute;
   background: inherit; 
   bottom: 100%;
   width: 50%;
   height: 100%;
   animation: inherit;
   animation-name: l31-1;
}
.loader-l31:before {
  left: 0;
  transform-origin: bottom left;
  --s:-1;
}
.loader-l31:after {
  right: 0;
  transform-origin: bottom right;
}
@keyframes l31-0 {
   0%,10%   {transform:translateY(0%)    scaleY(1)}
   49.99%   {transform:translateY(-50%)  scaleY(1)}
   50%      {transform:translateY(-50%)  scaleY(-1)}
   90%,100% {transform:translateY(-100%) scaleY(-1)}
}
@keyframes l31-1 {
   10%,90% {transform: rotate(0deg)}
   50%     {transform: rotate(calc(var(--s,1)*180deg))}
}`
            },
            
            {
                id: "l32",
                name: "Circle Cam",
                html: '<div class="loader-l32"></div>',
                css: `/* HTML: <div class="loader-l32"></div> */
.loader-l32 {
  width: 40px;
  aspect-ratio: 1;
  color: #f03355;
  position: relative;
  background: radial-gradient(10px,currentColor 94%,#0000);
}
.loader-l32:before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background:
    radial-gradient(9px at bottom right,#0000 94%,currentColor) top    left,
    radial-gradient(9px at bottom left ,#0000 94%,currentColor) top    right,
    radial-gradient(9px at top    right,#0000 94%,currentColor) bottom left,
    radial-gradient(9px at top    left ,#0000 94%,currentColor) bottom right;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  animation: l32 1.5s infinite cubic-bezier(0.3,1,0,1);
}
@keyframes l32 {
   33%  {inset:-10px;transform: rotate(0deg)}
   66%  {inset:-10px;transform: rotate(90deg)}
   100% {inset:0    ;transform: rotate(90deg)}
}`
            },
            
            {
                id: "l33",
                name: "Play Box 2",
                html: '<div class="loader-l33"></div>',
                css: `/* HTML: <div class="loader-l32"></div> */
.loader-l33 {
  width: 60px;
  aspect-ratio: 1;
  --c:no-repeat linear-gradient(orange 0 0);
  background:
    var(--c) left   20px top    0,
    var(--c) top    20px right  0,
    var(--c) right  20px bottom 0,
    var(--c) bottom 20px left   0;
  background-size:calc(100%/3) calc(100%/3);
  animation: 
    l33-1 .75s infinite alternate linear,
    l33-2 1.5s infinite;
}
@keyframes l33-1 {
 90%,100% {background-size:calc(2*100%/3) calc(100%/3),calc(100%/3) calc(2*100%/3)}
}
@keyframes l33-2 {
 0%,49.99% {transform:scaleX(1)}
 50%,100%  {transform:scaleX(-1)}
}`
            },
            
            {
                id: "l34",
                name: "Squares",
                html: '<div class="loader-l34"></div>',
                css: `/* HTML: <div class="loader-l34"></div> */
.loader-l34 {
  --c:no-repeat linear-gradient(#00626D 0 0);
  background: 
    var(--c),var(--c),var(--c),
    var(--c),var(--c),var(--c),
    var(--c),var(--c),var(--c);
  background-size: 16px 16px;
  animation: 
    l34-1 1s infinite,
    l34-2 1s infinite;
}
@keyframes l34-1 {
  0%,100% {width:45px;height: 45px}
  35%,65% {width:65px;height: 65px}
}
@keyframes l34-2 {
  0%,40%  {background-position: 0 0,0 50%, 0 100%,50% 100%,100% 100%,100% 50%,100% 0,50% 0,  50% 50% }
  60%,100%{background-position: 0 50%, 0 100%,50% 100%,100% 100%,100% 50%,100% 0,50% 0,0 0,  50% 50% }
}`
            },
            
            {
                id: "l35",
                name: "Circle Slice",
                html: '<div class="loader-l35"></div>',
                css: `/* HTML: <div class="loader-l35"></div> */
.loader-l35 {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
}
.loader-l35:before,
.loader-l35:after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  background: #f03355;
  -webkit-mask:repeating-linear-gradient(#000 0 5px,#0000 0 10px);
  animation: l35 1.5s infinite;
}
.loader-l35:after {
  -webkit-mask:repeating-linear-gradient(#0000 0 5px,#000 0 10px);
  --s:-1;
}
@keyframes l35 {
  0%,
  10% {transform: translate(0) rotate(0)}
  35% {transform: translate(calc(var(--s,1)*50%)) rotate(0)}
  66% {transform: translate(calc(var(--s,1)*50%)) rotate(calc(var(--s,1)*180deg))}
  90%,
  100% {transform: translate(0) rotate(calc(var(--s,1)*180deg))}
}`
            },
            
            {
                id: "l36",
                name: "Triangles",
                html: '<div class="loader-l36"></div>',
                css: `/* HTML: <div class="loader-l36"></div> */
.loader-l36 {
  width: 60px;
  aspect-ratio: 1.154;
  --c: #0000 ,#25b09b 2deg 59deg,#0000 61deg;
  --c1:conic-gradient(from 149deg at top   ,var(--c));
  --c2:conic-gradient(from -31deg at bottom,var(--c));
  background:
    var(--c1) top,
    var(--c1) bottom right,
    var(--c2) bottom,
    var(--c1) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  animation: l36 1s infinite;
}
@keyframes l36 {
  80%,100%{background-position: bottom right,bottom left,bottom,top}
}`
            },
            
            {
                id: "l37",
                name: "Circles From Square",
                html: '<div class="loader-l37"></div>',
                css: `/* HTML: <div class="loader-l37"></div> */
.loader-l37 {
  width: 50px;
  aspect-ratio: 1;
  color: #398EB6;
  position: relative;
  animation: l40 .5s infinite alternate;
}
.loader-l37:before,
.loader-l37:after {
  content: "";
  position: absolute;
  inset: 0;
  background-size: 25px 25px;
  background-position: 0 0,100% 0,100% 100%,0 100%;
  background-repeat: no-repeat;
}
.loader-l37:before {
  background-image:
    radial-gradient(farthest-side at top    left ,currentColor 96%,#0000),
    radial-gradient(farthest-side at top    right,currentColor 96%,#0000),
    radial-gradient(farthest-side at bottom right,currentColor 96%,#0000),
    radial-gradient(farthest-side at bottom left ,currentColor 96%,#0000);
  animation: l37-1 1s infinite;
}
.loader-l37:after {
  background-image: 
    radial-gradient(farthest-side at top    left ,#0000 94%,currentColor 96%),
    radial-gradient(farthest-side at top    right,#0000 94%,currentColor 96%),
    radial-gradient(farthest-side at bottom right,#0000 94%,currentColor 96%),
    radial-gradient(farthest-side at bottom left ,#0000 94%,currentColor 96%);
  animation: l37-2 1s infinite;
}
@keyframes l37-1 {
  0%,10%,90%,100% {inset:0}
  40%,60% {inset:-10px}
}
@keyframes l37-2 {
  0%,40%  {transform: rotate(0)}
  60%,100%{transform: rotate(90deg)}
}`
            },
            
            {
                id: "l38",
                name: "Progress Bar",
                html: '<div class="loader-l38"></div>',
                css: `/* HTML: <div class="loader-l38"></div> */
.loader-l38 {
  width: 120px;
  height: 20px;
  background:
   linear-gradient(#FFF 0 0) 0/0% no-repeat
   rgba(225, 225, 225, 0.3);
  animation: l38 2s infinite linear;
}
@keyframes l38 {
    100% {background-size:100%}
}`
            },
            
            {
                id: "l39",
                name: "Progress Pattern",
                html: '<div class="loader-l39"></div>',
                css: `/* HTML: <div class="loader"></div> */
.loader-l39 {
  width: 120px;
  height: 22px;
  border-radius: 20px;
  color: #514b82;
  border: 2px solid;
  position: relative;
}
.loader-l39::before {
  content: "";
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  border-radius: inherit;
  background: currentColor;
  animation: l39 2s infinite;
}
@keyframes l39 {
    100% {inset:0}
}`
            },
            
            {
                id: "l40",
                name: "Battery Charging",
                html: '<div class="loader-l40"></div>',
                css: `/* HTML: <div class="loader-l40"></div> */
.loader-l40 {
  width: 80px;
  height: 40px;
  color: #FFF;
  border: 2px solid currentColor;
  border-right-color: transparent;
  padding: 3px;
  background: 
    repeating-linear-gradient(90deg,currentColor 0 10px,#0000 0 15px) 
    0/0% no-repeat content-box content-box;
  position: relative;
  box-sizing: border-box;
  animation: l40 2s infinite steps(6);
}
.loader-l40::before {
  content: "";
  position: absolute;
  top: -2px;
  bottom: -2px;
  left: 100%;
  width: 10px;
  background:
    linear-gradient(
        #0000   calc(50% - 7px),currentColor 0 calc(50% - 5px),
        #0000 0 calc(50% + 5px),currentColor 0 calc(50% + 7px),#0000 0) left /100% 100%,
    linear-gradient(currentColor calc(50% - 5px),#0000        0 calc(50% + 5px),currentColor 0) left /2px 100%,
    linear-gradient(#0000        calc(50% - 5px),currentColor 0 calc(50% + 5px),#0000        0) right/2px 100%;
  background-repeat:no-repeat;
}
@keyframes l40 {
    100% {background-size:120%}
}`
            },
            
            {
                id: "l41",
                name: "Liquid Grow",
                html: '<div class="loader-l41"></div>',
                css: `/* HTML: <div class="loader-l41"></div> */
.loader-l41 {    
  --r1: 154%;
  --r2: 68.5%;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%; 
  background:
    radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%,#269af2 80%),
    radial-gradient(var(--r1) var(--r2) at bottom,#269af2 79.5%,#0000 80%),
    radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%,#269af2 80%),
    #0000;
  background-size: 50.5% 220%;
  background-position: -100% 0%,0% 0%,100% 0%;
  background-repeat:no-repeat;
  animation: l41 2s infinite linear;
}
@keyframes l41 {
    33%  {background-position:    0% 33% ,100% 33% ,200% 33% }
    66%  {background-position: -100%  66%,0%   66% ,100% 66% }
    100% {background-position:    0% 100%,100% 100%,200% 100%}
}`
            },
            
            {
                id: "l42",
                name: "Infinity",
                html: '<div class="loader-l42"></div>',
                css: `/* HTML: <div class="loader-l42"></div> */
.loader-l42 {
  height: 4px;
  width: 130px;
  --c:no-repeat linear-gradient(#6100ee 0 0);
  background: var(--c),var(--c),#d7b8fc;
  background-size: 60% 100%;
  animation: l42 3s infinite;
}
@keyframes l42 {
  0%   {background-position:-150% 0,-150% 0}
  66%  {background-position: 250% 0,-150% 0}
  100% {background-position: 250% 0, 250% 0}
}`
            },
            
            {
                id: "l43",
                name: "Dots Fill",
                html: '<div class="loader-l43"></div>',
                css: `/* HTML: <div class="loader-l43"></div> */
.loader-l43 {
  width: 120px;
  height: 20px;
  -webkit-mask: radial-gradient(circle closest-side,#000 94%,#0000) left/20% 100%;
  background: linear-gradient(#FFF 0 0) left/0% 100% no-repeat #404040;
  animation: l43 2s infinite steps(6);
}
@keyframes l43 {
    100% {background-size:120% 100%}
}`
            },
            
            {
                id: "l44",
                name: "Zx Play",
                html: '<div class="loader-l44"></div>',
                css: `/* HTML: <div class="loader-l44"></div> */
.loader-l44 {
  height: 30px;
  aspect-ratio: 3;
  --c:no-repeat linear-gradient(#514b82 0 0);
  background:
    var(--c) calc(0*100%/5) 50%,
    var(--c) calc(1*100%/5) 50%,
    var(--c) calc(2*100%/5) 50%,
    var(--c) calc(3*100%/5) 50%,
    var(--c) calc(4*100%/5) 50%,
    var(--c) calc(5*100%/5) 50%;
  background-size:calc(100%/6 + 1px) 50%;
  animation: l44 1s infinite cubic-bezier(0.5,170,0.5,-170);
}
@keyframes l44 {
    14.28% {background-position: calc(0*100%/5) 51%, calc(1*100%/5) 50%, calc(2*100%/5) 50%, calc(3*100%/5) 50%, calc(4*100%/5) 50%, calc(5*100%/5) 50%}
    28.57% {background-position: calc(0*100%/5) 50%, calc(1*100%/5) 51%, calc(2*100%/5) 50%, calc(3*100%/5) 50%, calc(4*100%/5) 50%, calc(5*100%/5) 50%}
    42.85% {background-position: calc(0*100%/5) 50%, calc(1*100%/5) 50%, calc(2*100%/5) 51%, calc(3*100%/5) 50%, calc(4*100%/5) 50%, calc(5*100%/5) 50%}
    57.14% {background-position: calc(0*100%/5) 50%, calc(1*100%/5) 50%, calc(2*100%/5) 50%, calc(3*100%/5) 51%, calc(4*100%/5) 50%, calc(5*100%/5) 50%}
    71.42% {background-position: calc(0*100%/5) 50%, calc(1*100%/5) 50%, calc(2*100%/5) 50%, calc(3*100%/5) 50%, calc(4*100%/5) 51%, calc(5*100%/5) 50%}
    85.71% {background-position: calc(0*100%/5) 50%, calc(1*100%/5) 50%, calc(2*100%/5) 50%, calc(3*100%/5) 50%, calc(4*100%/5) 50%, calc(5*100%/5) 51%}
}`
            },
            
            {
                id: "l45",
                name: "Infinity",
                html: '<div class="loader-l45"></div>',
                css: `/* HTML: <div class="loader-l44"></div> */
.loader-l45 {
  width: 60px;
  display: flex;
  align-items: flex-start;
  aspect-ratio: 1;
}
.loader-l45:before,
.loader-l45:after {
  content: "";
  flex: 1;
  aspect-ratio: 1;
  --g: conic-gradient(from -90deg at 10px 10px,#94005E 90deg,#0000 0);
  background: var(--g), var(--g), var(--g);
  filter: drop-shadow(30px 30px 0 #94005E);
  animation: l45 1s infinite;
}
.loader-l45:after {
  transform: scaleX(-1);
}
@keyframes l45 {
   0%   {background-position:0     0, 10px 10px, 20px 20px}
   33%  {background-position:10px  10px}
   66%  {background-position:0    20px,10px 10px,20px 0   }
   100% {background-position:0     0, 10px 10px, 20px 20px}
}`
            },
            
            {
                id: "l46",
                name: "Wavy 1",
                html: '<div class="loader-l46"></div>',
                css: `/* HTML: <div class="loader-l46"></div> */
.loader-l46 {
  display: inline-grid;
  padding: 5px;
  background: #0000;
  filter: blur(4px) contrast(12);
}
.loader-l46:before {
  content: "";
  height: 40px;
  aspect-ratio: 3;
  --c: #0000 64%,#F5FF00 66% 98%,#0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%,var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%,var(--c)) 100% 100%;
  background-size: calc(200%/3) 50%;
  background-repeat: repeat-x;
  -webkit-mask: repeating-linear-gradient(90deg,#000 0 10%,#0000 0 20%);
  animation: l46 .8s infinite linear;
}
@keyframes l46{
  to {background-position: -200% 0,-100% 100%}
}`
            },
            
            {
                id: "l47",
                name: "Mask",
                html: '<div class="loader-l47"></div>',
                css: `/* HTML: <div class="loader-l47"></div> */
.loader-l47 {
  display: inline-grid;
  padding: 5px;
  background: #0000;
  filter: blur(4px) contrast(12);
}
.loader-l47:before,
.loader-l47:after {
  content: "";
  grid-area: 1/1;
  height: 40px;
  aspect-ratio: 3;
  --c: #0000 64%,#00C7FF 66% 98%,#0000 101%;
  background:
    radial-gradient(35% 146% at 50% 159%,var(--c)) 0 0,
    radial-gradient(35% 146% at 50% -59%,var(--c)) 100% 100%;
  background-size: calc(200%/3) 50%;
  background-repeat: repeat-x;
  clip-path: inset(0 100% 0 0);
  animation: l47 1.5s infinite linear;
}
.loader-l47:after {
  scale: -1 1;
}
@keyframes l47{
  50% {clip-path: inset(0)}
  to {clip-path: inset(0 0 0 100%)}
}`
            },
            
            {
                id: "l48",
                name: "Signal",
                html: '<div class="loader-l48"></div>',
                css: `/* HTML: <div class="loader-l48"></div> */
.loader-l48 {
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #FFF;
  box-shadow: 0 0 0 0 #FFF;
  animation: l48 1.5s infinite linear;
  position: relative;
}
.loader-l48:before,
.loader-l48:after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 0 #FFF;
  animation: inherit;
  animation-delay: -0.5s;
}
.loader-l48:after {
  animation-delay: -1s;
}
@keyframes l48 {
    100% {box-shadow: 0 0 0 40px #0000}
}`
            },
            
            {
                id: "l49",
                name: "Cloud",
                html: '<div class="loader-l49"></div>',
                css: `/* HTML: <div class="loader"></div> */
.loader-l49 {
  width: 108px;
  height: 60px;
  color: #269af2;
  --c: radial-gradient(farthest-side,currentColor 96%,#0000);
  background: 
    var(--c) 100% 100% /30% 60%,
    var(--c) 70%  0    /50% 100%,
    var(--c) 0    100% /36% 68%,
    var(--c) 27%  18%  /26% 40%,
    linear-gradient(currentColor 0 0) bottom/67% 58%;
  background-repeat: no-repeat;
  position: relative;
}
.loader-l49:after {
  content: "";
  position: absolute;
  inset: 0;
  background: inherit;
  opacity: 0.4;
  animation: l49 1s infinite;
}
@keyframes l49{
  to {transform:scale(1.8);opacity:0}
}`
            },
            
            {
                id: "l50",
                name: "Squares",
                html: '<div class="loader-l50"></div>',
                css: `/* HTML: <div class="loader-l50"></div> */
.loader-l50 {
  width: 50px;
  aspect-ratio: 1;
  color: #FFF;
  border: 2px solid;
  display: grid;
  box-sizing: border-box;
  animation: l50 4s infinite linear;
}
.loader-l50::before,
.loader-l50::after {
  content: "";
  grid-area: 1/1;
  margin: auto;
  width: 70.7%;
  aspect-ratio: 1;
  border: 2px solid;
  box-sizing: content-box;
  animation: inherit;
}
.loader-l50::after {
  width: 50%;
  aspect-ratio: 1;
  border: 2px solid;
  animation-duration: 2s;
}
@keyframes l50{
  100% {transform:rotate(1turn)}
}`
            },
            
            {
                id: "l51",
                name: "Triangle Spin",
                html: '<div class="loader-l51"></div>',
                css: `/* HTML: <div class="loader-l51"></div> */
.loader-l51 {
  width: 50px;
  aspect-ratio: 1.154;
  display: grid;
  color: #FFF;
  background:
    linear-gradient(to bottom left ,#0000 calc(50% - 1px),currentColor 0 calc(50% + 1px),#0000 0) right/50% 100%,
    linear-gradient(to bottom right,#0000 calc(50% - 1px),currentColor 0 calc(50% + 1px),#0000 0) left /50% 100%,
    linear-gradient(currentColor 0 0) bottom/100% 2px;
  background-repeat: no-repeat;
  transform-origin: 50% 66%;
  animation: l51 4s infinite linear;
}
.loader-l51::before,
.loader-l51::after {
  content: "";
  grid-area: 1/1;
  background: inherit;
  transform-origin: inherit;
  animation: inherit;
}
.loader-l51::after {
  animation-duration: 2s;
}
@keyframes l51{
  100% {transform:rotate(1turn)}
}`
            },
            
            {
                id: "l52",
                name: "ChatGPT",
                html: '<div class="loader-l52"></div>',
                css: `/* HTML: <div class="loader-l52"></div> */
.loader-l52 {
  width: 60px;
  height: 25px;
  border: 2px solid white;
  box-sizing: border-box;
  border-radius: 50%;
  display: grid;
  animation: l2 2s infinite linear;
}
.loader-l52:before,
.loader-l52:after {
  content: "";
  grid-area: 1/1;
  border: 2px solid white;
  border-radius: 50%;
  animation: inherit;
  animation-duration: 3s;
}
.loader-l52:after {
  --s:-1;
}
@keyframes l52 {
   100% {transform:rotate(calc(var(--s,1)*1turn))}
}`
            },
            
            {
                id: "l53",
                name: "Flower",
                html: '<div class="loader-l53"></div>',
                css: `/* HTML: <div class="loader-l53"></div> */
.loader-l53{
  width: 25px;
  height: 50px;
  display: grid;
  color: #FFF;
  background:
    linear-gradient(currentColor 0 0) top/100% 2px,
    radial-gradient(farthest-side at  top, #0000 calc(100% - 2px),currentColor calc(100% - 1px) ,#0000) top,
    linear-gradient(currentColor 0 0) bottom/100% 2px,
    radial-gradient(farthest-side at  bottom, #0000 calc(100% - 2px),currentColor calc(100% - 1px) ,#0000) bottom;
  background-size: 100% 1px,100% 50%; 
  background-repeat: no-repeat;
  animation: l18 4s infinite linear;
}
.loader-l53::before,
.loader-l53::after {
  content: "";
  grid-area: 1/1;
  background: inherit;
  border: inherit;
  animation: inherit;
}
.loader-l53::after {
  animation-duration: 2s;
}
@keyframes l53 {
  100% {transform: rotate(1turn)}
}`
            },
            
            {
                id: "l54",
                name: "Lolli",
                html: '<div class="loader-l54"></div>',
                css: `/* HTML: <div class="loader-l54"></div> */
.loader-l54 {
  --b: 5px; 
  width: calc(12*var(--b));
  aspect-ratio: 1;
  border-radius: 50%;
  background: 
    repeating-radial-gradient(calc(2*var(--b)) at top,#0000 -1px,#0067FF 0 calc(50% - 1px),#0000 50% calc(100% - 1px)) calc(50% + var(--b)) 100%, 
    repeating-radial-gradient(calc(2*var(--b)) at bottom,#0067FF -1px,#0000 0 calc(50% - 1px),#0067FF 50% calc(100% - 1px)) 50% 0;
  background-size: 150% 50%;
  background-repeat: no-repeat;
  mask: 
    radial-gradient(calc(1.5*var(--b)) at calc(100% - var(--b)/2) 0, #0000 calc(100%/3), #0067FF calc(100%/3 + 1px) 110%, #0000 0) calc(50% + var(--b)/2) 
     100%/calc(3*var(--b)) 50% exclude no-repeat, 
    conic-gradient(#0067FF 0 0);
  animation: l54 1s infinite linear;
}
@keyframes l54 {
  100% {transform: rotate(1turn)}
}`
            },
            
            {
                id: "l55",
                name: "Friendly Squares",
                html: '<div class="loader-l55"></div>',
                css: `/* HTML: <div class="loader-l55"></div> */
.loader-l55 {
  width: 55px;
  aspect-ratio: 1;
  --g1:conic-gradient(from  90deg at top    3px left  3px,#0000 90deg,#fff 0);
  --g2:conic-gradient(from -90deg at bottom 3px right 3px,#0000 90deg,#fff 0);
  background:
    var(--g1),var(--g1),var(--g1),var(--g1), 
    var(--g2),var(--g2),var(--g2),var(--g2);
  background-position: 0 0,100% 0,100% 100%,0 100%;
  background-size: 25px 25px;
  background-repeat: no-repeat;
  animation: l55 1.5s infinite;
}
@keyframes l55 {
  0%   {background-size:35px 15px,15px 15px,15px 35px,35px 35px}
  25%  {background-size:35px 35px,15px 35px,15px 15px,35px 15px}
  50%  {background-size:15px 35px,35px 35px,35px 15px,15px 15px}
  75%  {background-size:15px 15px,35px 15px,35px 35px,15px 35px}
  100% {background-size:35px 15px,15px 15px,15px 35px,35px 35px}
}`
            },
            
            {
                id: "l56",
                name: "Circles Play",
                html: '<div class="loader-l56"></div>',
                css: `/* HTML: <div class="loader-l56"></div> */
.loader-l56 {
  width: 65px;
  aspect-ratio: 1;
  position: relative;
}
.loader-l56:before,
.loader-l56:after {
  content: "";
  position: absolute;
  border-radius: 50px;
  box-shadow: 0 0 0 3px inset #FFF800;
  animation: l56 2.5s infinite;
}
.loader-l56:after {
  animation-delay: -1.25s;
}
@keyframes l56{
  0% {
    inset: 0 35px 35px 0;
  }
  12.5% {
    inset: 0 35px 0 0;
  }
  25% {
    inset: 35px 35px 0 0;
  }
  37.5% {
    inset: 35px 0 0 0;
  }
  50% {
    inset: 35px 0 0 35px;
  }
  62.5% {
    inset: 0 0 0 35px;
  }
  75% {
    inset: 0 0 35px 35px;
  }
  87.5% {
    inset: 0 0 35px 0;
  }
  100% {
    inset: 0 35px 35px 0;
  }
}`
            },
            
            {
                id: "l57",
                name: "Circle Square Play",
                html: '<div class="loader-l57"></div>',
                css: `/* HTML: <div class="loader-l57"></div> */
.loader-l57 {
  width: 75px;
  aspect-ratio: 1; 
  display: grid;
}
.loader-l57:before,
.loader-l57:after {
  content: "";
  grid-area: 1/1;
  width: 35px;
  aspect-ratio: 1;
  box-shadow: 0 0 0 3px #fff inset;
  filter: drop-shadow(40px 40px 0 #fff);
  animation: l57 2s infinite alternate;
}
.loader-l57:after {
  margin: 0 0 0 auto; 
  filter: drop-shadow(-40px 40px 0 #fff);
  animation-delay: -1s;
}
@keyframes l57 {
  0%,10%   {border-radius:0}
  30%,40%  {border-radius:50% 0}
  60%,70%  {border-radius:50%}
  90%,100% {border-radius:0 50%}
}`
            },
            
            {
                id: "l58",
                name: "Flower",
                html: '<div class="loader-l58"></div>',
                css: `/* HTML: <div class="loader-l58"></div> */
.loader-l58 {
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin-top: -30px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  transform-origin: 50% 116.5%;
  animation: l58 2s infinite linear; 
}
.loader-l58:before {
  content:"";
  min-width: 233%;
  height: 233%;
  background: 
    radial-gradient(farthest-side,#00DA3C 90%,#0000) top,
    radial-gradient(farthest-side,#00CBE7 90%,#0000) left,
    radial-gradient(farthest-side,#FD8603 90%,#0000) bottom,
    radial-gradient(farthest-side,#F4F328 90%,#0000) right;
  background-size: 43% 43%;
  background-repeat: no-repeat;
  animation: inherit;
  animation-direction: reverse;
}
@keyframes l58 {
  100% {transform: rotate(360deg)}
}`
            },
            
            {
                id: "l59",
                name: "Clock",
                html: '<div class="loader-l59"></div>',
                css: `/* HTML: <div class="loader-l59"></div> */
.loader-l59 {
  --c1:#673b14;
  --c2:#f8b13b;
  width: 40px;
  height: 80px;
  border-top: 4px solid var(--c1);
  border-bottom: 4px solid var(--c1);
  background: linear-gradient(90deg, var(--c1) 2px, var(--c2) 0 5px,var(--c1) 0) 50%/7px 8px no-repeat;
  display: grid;
  overflow: hidden;
  animation: l59-0 2s infinite linear;
}
.loader-l59::before,
.loader-l59::after {
  content: "";
  grid-area: 1/1;
  width: 75%;
  height: calc(50% - 4px);
  margin: 0 auto;
  border: 2px solid var(--c1);
  border-top: 0;
  box-sizing: content-box;
  border-radius: 0 0 40% 40%;
  -webkit-mask: 
    linear-gradient(#000 0 0) bottom/4px 2px no-repeat,
    linear-gradient(#000 0 0);
  -webkit-mask-composite: destination-out;
          mask-composite: exclude;
  background: 
    linear-gradient(var(--d,0deg),var(--c2) 50%,#0000 0) bottom /100% 205%,
    linear-gradient(var(--c2) 0 0) center/0 100%;
  background-repeat: no-repeat;
  animation: inherit;
  animation-name: l59-1;
}
.loader-l59::after {
  transform-origin: 50% calc(100% + 2px);
  transform: scaleY(-1);
  --s:3px;
  --d:180deg;
}
@keyframes l59-0 {
  80%  {transform: rotate(0)}
  100% {transform: rotate(0.5turn)}
}
@keyframes l59-1 {
  10%,70%  {background-size:100% 205%,var(--s,0) 100%}
  70%,100% {background-position: top,center}
}`
            },
            
            {
                id: "l60",
                name: "Line",
                html: '<div class="loader-l60"></div>',
                css: `/* HTML: <div class="loader-l60"></div> */
.loader-l60 {
  width: 60px;
  height: 16px;
  display: grid;
}
.loader-l60:before,
.loader-l60:after {
  content: "";
  grid-area: 1/1;
  --c:no-repeat linear-gradient(#046D8B 0 0);
  background: var(--c), var(--c), var(--c);
  animation: l60-1 1.5s infinite linear, l60-2 1.5s infinite linear;
  transform: scale(var(--s,1)) translate(3px,-3px);
}
.loader-l60:after {
  --s:-1;
}
@keyframes l60-1 {
  0%,
  3%    {background-size: 0    4px,4px 0   ,0    4px}
  16.67%{background-size: 100% 4px,4px 0   ,0    4px}
  33.33%{background-size: 100% 4px,4px 100%,0    4px}
  46%,
  54%   {background-size: 100% 4px,4px 100%,100% 4px}
  66.67%{background-size: 0    4px,4px 100%,100% 4px}
  83.33%{background-size: 0    4px,4px 0   ,100% 4px}
  96%,
  100%  {background-size: 0    4px,4px 0   ,0    4px}
}
@keyframes l60-2 {
  0%,49.9%{background-position: 0    0,100% 0   ,100% 100%}
  50%,100%{background-position: 100% 0,100% 100%,0    100%}
}`
            },
            
            {
                id: "l61",
                name: "3 Circles",
                html: '<div class="loader-l61"></div>',
                css: `/* HTML: <div class="loader-l61"></div> */
.loader-l61 {
  width: 70px;
  height: 26px;
  background: #d0af03;
  border-radius: 50px;
  --c:no-repeat radial-gradient(farthest-side,#000 92%,#0000);
  --s:18px 18px;
  -webkit-mask:
    var(--c) left  4px top 50%,
    var(--c) center,
    var(--c) right 4px top 50%,
    linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;
          mask-composite:exclude;
  animation: l61 1.5s infinite;
}
@keyframes l61 {
  0%    {-webkit-mask-size:0    0  ,0    0  ,0    0  ,auto}
  16.67%{-webkit-mask-size:var(--s),0    0  ,0    0  ,auto}
  33.33%{-webkit-mask-size:var(--s),var(--s),0    0  ,auto}
  50%   {-webkit-mask-size:var(--s),var(--s),var(--s),auto}
  66.67%{-webkit-mask-size:0    0  ,var(--s),var(--s),auto}
  83.33%{-webkit-mask-size:0    0  ,0    0  ,var(--s),auto}
  100%  {-webkit-mask-size:0    0  ,0    0  ,0    0  ,auto}
}`
            },
            
            {
                id: "l62",
                name: "Clone",
                html: '<div class="loader-l62"></div>',
                css: `/* HTML: <div class="loader-l62"></div> */
.loader-l62 {
  width: 22px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #F10C49;
  animation: l62 1.5s infinite linear;
}
@keyframes l62 {
  0%    {box-shadow: 
          0 -30px #F4DD51, calc(30px*0.707) calc(-30px*0.707) #E3AAD6,30px 0 #F4DD51, 0 0 #E3AAD6,
          0 0 #F4DD51, 0 0 #E3AAD6,0 0 #F4DD51, 0 0 #E3AAD6}
  12.5% {box-shadow: 
          0 0 #F4DD51, calc(30px*0.707) calc(-30px*0.707) #E3AAD6,30px 0 #F4DD51, calc(30px*0.707) calc(30px*0.707) #E3AAD6,
          0 0 #F4DD51, 0 0 #E3AAD6,0 0 #F4DD51, 0 0 #E3AAD6}
  25%   {box-shadow: 
          0 0 #F4DD51, 0 0 #E3AAD6,30px 0 #F4DD51, calc(30px*0.707) calc(30px*0.707) #E3AAD6,
          0 30px #F4DD51, 0 0 #E3AAD6,0 0 #F4DD51, 0 0 #E3AAD6}
  37.5% {box-shadow: 
          0 0 #F4DD51, 0 0 #E3AAD6,0 0 #F4DD51, calc(30px*0.707) calc(30px*0.707) #E3AAD6,
          0 30px #F4DD51, calc(-30px*0.707) calc(30px*0.707) #E3AAD6,0 0 #F4DD51, 0 0 #E3AAD6}
  50%   {box-shadow: 
          0 0 #F4DD51, 0 0 #E3AAD6,0 0 #F4DD51, 0 0 #E3AAD6,
          0 30px #F4DD51, calc(-30px*0.707) calc(30px*0.707) #E3AAD6,-30px 0 #F4DD51, 0 0 #E3AAD6}
  62.5% {box-shadow: 
          0 0 #F4DD51, 0 0 #E3AAD6,0 0 #F4DD51, 0 0 #E3AAD6,
          0 0 #F4DD51, calc(-30px*0.707) calc(30px*0.707) #E3AAD6,-30px 0 #F4DD51, calc(-30px*0.707) calc(-30px*0.707) #E3AAD6}
  75%   {box-shadow: 
          0 -30px #F4DD51, 0 0 #E3AAD6,0 0 #F4DD51, 0 0 #E3AAD6,
          0 0 #F4DD51, 0 0 #E3AAD6,-30px 0 #F4DD51, calc(-30px*0.707) calc(-30px*0.707) #E3AAD6}
  87.5% {box-shadow: 
          0 -30px #F4DD51, calc(30px*0.707) calc(-30px*0.707) #E3AAD6,0 0 #F4DD51, 0 0 #E3AAD6,
          0 0 #F4DD51, 0 0 #E3AAD6,0 0 #F4DD51, calc(-30px*0.707) calc(-30px*0.707) #E3AAD6}
  100%  {box-shadow: 
          0 -30px #F4DD51, calc(30px*0.707) calc(-30px*0.707) #E3AAD6,30px 0 #F4DD51, 0 0 #E3AAD6,
          0 0 #F4DD51, 0 0 #E3AAD6,0 0 #F4DD51, 0 0 #E3AAD6}

}`
            },
            
            {
                id: "l63",
                name: "Blob 1",
                html: '<div class="loader-l63"></div>',
                css: `/* HTML: <div class="loader-l63"></div> */
.loader-l63 {
  width: 120px;
  height: 60px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background: #0000;
  filter: blur(5px) contrast(10) hue-rotate(60deg);
  mix-blend-mode: darken;
}
.loader-l63:before,
.loader-l63:after {
  content: "";
  width: 40px;
  border-radius: 50%;
  background: #ff00ff;
  animation: l63 1s infinite alternate;
}
.loader-l63:after {
  --s:-1;
}
@keyframes l63{
  90%,100% {transform: translate(calc(var(--s,1)*30px))}
}`
            },
            
            {
                id: "l64",
                name: "Blob 2",
                html: '<div class="loader-l64"></div>',
                css: `/* HTML: <div class="loader-l64"></div> */
.loader-l64 {
  width: 100px;
  aspect-ratio: 1;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  background: #0000;
  filter: blur(5px) contrast(10) hue-rotate(300deg);
  mix-blend-mode: darken;
}
.loader-l64:before,
.loader-l64:after{ 
  content: "";
  grid-area: 1/1; 
  width: 40px;
  height: 40px;
  background: #ffff00;
  animation: l64 2s infinite;
}
.loader-l64:after{ 
  animation-delay: -1s;
}
@keyframes l64{
  0%   {transform: translate(   0,0)}
  25%  {transform: translate(100%,0)}
  50%  {transform: translate(100%,100%)}
  75%  {transform: translate(   0,100%)}
  100% {transform: translate(   0,0)}
}`
            },
            
            {
                id: "l65",
                name: "Blob 3",
                html: '<div class="loader-l65"></div>',
                css: `/* HTML: <div class="loader-l65"></div> */
.loader-l65{
  width: 100px;
  aspect-ratio: 1;
  padding: 10px;
  box-sizing: border-box;
  display: grid;
  background: #0000;
  filter: blur(5px) contrast(10);
  mix-blend-mode: darken;
}
.loader-l65:before,
.loader-l65:after{
  content: "";
  grid-area: 1/1;
  background:
    linear-gradient(#FFF 0 0) left,
    linear-gradient(#FFF 0 0) right;
  background-size: 20px 40px;
  background-origin: content-box;
  background-repeat: no-repeat;
}
.loader-l65:after {
  height: 20px;
  width:  20px;
  margin: auto 0;
  border-radius: 50%;
  background: #FFF;
  animation: l65 1s infinite;
}
@keyframes l65{
  90%,100% {transform: translate(300%)}
}`
            },
            
            {
                id: "l66",
                name: "Blob 4",
                html: '<div class="loader-l66"></div>',
                css: `/* HTML: <div class="loader-l66"></div> */
.loader-l66 {
  width: 80px;
  aspect-ratio: 1;
  border: 10px solid #0000;
  padding: 5px;
  box-sizing: border-box;
  background: 
    radial-gradient(farthest-side,#fff 98%,#0000 ) 0 0/20px 20px no-repeat,
    conic-gradient(from 90deg at 10px 10px,#0000 90deg,#fff 0) content-box,
    conic-gradient(from -90deg at 40px 40px,#0000 90deg,#fff 0) content-box,
    #000;
  filter: blur(4px) contrast(10);
  animation: l66 2s infinite;
}
@keyframes l66 {
  0%   {background-position:0 0}
  25%  {background-position:100% 0}
  50%  {background-position:100% 100%}
  75%  {background-position:0% 100%}
  100% {background-position:0% 0}
}`
            },
            
            {
                id: "l67",
                name: "Blob 4",
                html: '<div class="loader-l67"></div>',
                css: `/* HTML: <div class="loader-67"></div> */
.loader-l67 {
  width: 80px;
  aspect-ratio: 1;
  border: 10px solid #0000;
  box-sizing: border-box;
  background: 
    radial-gradient(farthest-side,#fff 98%,#0000) 0    0/20px 20px,
    radial-gradient(farthest-side,#fff 98%,#0000) 100% 0/20px 20px,
    radial-gradient(farthest-side,#fff 98%,#0000) 100% 100%/20px 20px,
    radial-gradient(farthest-side,#fff 98%,#0000) 0 100%/20px 20px,
    linear-gradient(#fff 0 0) 50%/40px 40px,
    #000;
  background-repeat:no-repeat;
  filter: blur(4px) contrast(10);
  animation: l67 0.8s infinite;
}
@keyframes l67 {
  100%  {background-position:100% 0,100% 100%,0 100%,0 0,center}
}`
            },
            
            {
                id: "l68",
                name: "Blob Dots",
                html: '<div class="loader-l68"></div>',
                css: `/* HTML: <div class="loader-l67"></div> */
.loader-l68 {
  height: 50px;
  aspect-ratio: 2;
  border: 10px solid #000;
  box-sizing: border-box;
  background: 
    radial-gradient(farthest-side,#fff 98%,#0000) left/20px 20px,
    radial-gradient(farthest-side,#fff 98%,#0000) left/20px 20px,
    radial-gradient(farthest-side,#fff 98%,#0000) center/20px 20px,
    radial-gradient(farthest-side,#fff 98%,#0000) right/20px 20px,
    #000;
  background-repeat: no-repeat;
  filter: blur(4px) contrast(10);
  animation: l68 1s infinite;
}
@keyframes l68 {
  100%  {background-position:right,left,center,right}
}`
            },
            
            {
                id: "l69",
                name: "Blob",
                html: '<div class="loader-l69"></div>',
                css: `/* HTML: <div class="loader-l69"></div> */
.loader-l69 {
  width: 80px;
  aspect-ratio: 1;
  border: 10px solid #000;
  box-sizing: border-box;
  background: 
    radial-gradient(farthest-side,#fff 98%,#0000) top,
    radial-gradient(farthest-side,#fff 98%,#0000) top,
    radial-gradient(farthest-side,#fff 98%,#0000) left,
    radial-gradient(farthest-side,#fff 98%,#0000) right,
    radial-gradient(farthest-side,#fff 98%,#0000) bottom,
    #000;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  filter: blur(4px) contrast(10); 
  animation: l69 2s infinite;
}
@keyframes l69 {
  0%   {background-position:top,top,left,right,bottom}
  25%  {background-position:right,top,left,right,bottom}
  50%  {background-position:bottom,top,left,right,bottom}
  75%  {background-position:left,top,left,right,bottom}
  100% {background-position:top,top,left,right,bottom}
}`
            },
            
            {
                id: "l70",
                name: "Mango",
                html: '<div class="loader-l70"><div class="loader-l70-1"></div></div>',
                css: `/* HTML: <div class="loader-l70"><div class="loader-l70-1"></div></div> */
 .loader-l70 {
  width: 3em;
  height: 3em;
  cursor: not-allowed;
  border-radius: 50%;
  border: 2px solid #444;
  box-shadow: -10px -10px 10px #6359f8, 0px -10px 10px 0px #9c32e2, 10px -10px 10px #f36896, 10px 0 10px #ff0b0b, 10px 10px 10px 0px#ff5500, 0 10px 10px 0px #ff9500, -10px 10px 10px 0px #ffb700;
  animation: l70 0.7s linear infinite;
}

.loader-l70-1{
  border:0;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@keyframes l70 {
  to {
    transform: rotate(360deg);
  }
}
`
            },
            
            {
                id: "l71",
                name: "Meta Ai",
                html: '<div class="loader-l71"><div class="loader-71-1"></div></div>',
                css: `/* HTML: <div class="loader-l71"><div class="loader-l71-1"></div></div> */ 
.loader-l71 {
  background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
  width: 60px;
  height: 60px;
  animation: l71 1.7s linear infinite;
  text-align: center;
  border-radius: 50px;
  filter: blur(1px);
  box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
}

.loader-l71-1 {
  background-color: rgb(36, 36, 36);
  width: 100px;
  height: 100px;
  border-radius: 50px;
  filter: blur(10px);
}

@keyframes l71{
  to {
    transform: rotate(360deg);
  }
}`
            }
        ];