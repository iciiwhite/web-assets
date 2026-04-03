/*!
 * Lonely Icons – Professional Use License
 * Copyright (c) 2025 Lonely Tech. All rights reserved.
 *
 * Licensed under the Lonely Icons License Agreement.
 * You are permitted to use this software and the accompanying icon set
 * in any project, personal or commercial, provided that:
 *   - You do NOT modify, adapt, translate, or create derivative works
 *     of the software or the icons.
 *   - You do not remove or alter this license notice or any copyright
 *     notice.
 *   - You retain the name "Lonely Icons" and link to www.lonely.com
 *     in any publicly accessible documentation or credits.
 *
 * This software is provided "AS IS", without warranty of any kind.
 *
 * Official website: https://lonelykiller.github.io
 */
(function(){const e={replace:function(e){if(!e.classList.contains("lonely"))return;const t=Array.from(e.classList).find(e=>e.startsWith("l-"));if(!t)return;const n=t.substring(2);if(!LONELY_ICONS[n])return;const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("viewBox","0 0 24 24"),o.setAttribute("fill","currentColor"),o.setAttribute("role","img"),o.setAttribute("aria-label",n+" icon"),o.style.width="1em",o.style.height="1em",o.style.verticalAlign="-0.125em",o.innerHTML=LONELY_ICONS[n],e.innerHTML="",e.appendChild(o)},init:function(){document.querySelectorAll(".lonely").forEach(this.replace.bind(this));const e=new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{1===e.nodeType&&(e.classList&&e.classList.contains("lonely")?this.replace(e):e.querySelectorAll&&e.querySelectorAll(".lonely").forEach(e=>this.replace(e)))})})});e.observe(document.body,{childList:!0,subtree:!0}),window.LonelyIcons=this}};if("loading"===document.readyState)document.addEventListener("DOMContentLoaded",()=>e.init());else e.init();const LONELY_ICONS={


};})();