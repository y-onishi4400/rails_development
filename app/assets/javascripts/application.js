!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){var t=function(e){for(len=0,e=escape(e),i=0;i<e.length;i++,len++)"%"==e.charAt(i)&&("u"==e.charAt(++i)&&(i+=3,len++),i++);return len};window.onload=function(){var e=document.getElementById("message_message_text"),n=document.getElementById("c-validation__entry");null!=e&&null!=n&&(n.disabled=!0,e.addEventListener("keyup",function(){var r=e.value,o=t(r);n.disabled=0==o}));var r=document.getElementById("c-validation__area"),o=document.getElementById("c-validation__count"),l=document.getElementById("c-validation__submit");if(null!=r){var i=r.value,u=t(i);o.innerHTML=u,r.addEventListener("keyup",function(){var e=r.value,n=t(e);o.innerHTML=n,0==n?(r.style.borderColor="red",l.disabled=!0):n>=238?(r.style.borderColor="red",l.disabled=!0):(r.style.borderColor="#4E84FF",l.disabled=!1)})}}}]);