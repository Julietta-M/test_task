parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".page"),t=document.querySelector(".theme-light"),c=document.querySelector(".theme-dark"),s=document.querySelector(".theme-gray"),i=document.querySelector(".theme-light-button"),n=document.querySelector(".theme-dark-button"),o=document.querySelector(".theme-gray-button"),m=document.querySelector(".header__selector");function a(){e.classList.contains("dark-theme")&&e.classList.remove("dark-theme"),e.classList.contains("medium-theme")&&e.classList.remove("medium-theme"),e.classList.add("light-theme")}function l(){e.classList.contains("light-theme")&&e.classList.remove("light-theme"),e.classList.contains("medium-theme")&&e.classList.remove("medium-theme"),e.classList.add("dark-theme")}function r(){e.classList.contains("light-theme")&&e.classList.remove("light-theme"),e.classList.contains("dark-theme")&&e.classList.remove("dark-theme"),e.classList.add("medium-theme")}t.onclick=function(){a()},c.onclick=function(){l()},s.onclick=function(){r()},i.onclick=function(){a()},n.onclick=function(){l()},o.onclick=function(){r()},m.onchange=function(e){"theme-light"===e.target.value&&a(),"theme-dark"===e.target.value&&l(),"theme-gray"===e.target.value&&r()};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.816b538a.js.map