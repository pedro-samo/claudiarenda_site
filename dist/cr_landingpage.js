"use strict";var initFunctions={changeImageServecice:function(){var e=document.querySelectorAll(".cr-services__container_wrapper > div");e.forEach(function(e,s){return e.addEventListener("click",function(){var e,i,t;e=s,i=document.querySelector(".cr-services__title_image"),(t=document.createElement("img")).classList.add("cr-services__title_image","slide-in-left"),t.src=["https://github.com/pedro-samo/claudiarenda_site/blob/master/images/services_2.png","https://github.com/pedro-samo/claudiarenda_site/blob/master/images/services_3.png","https://github.com/pedro-samo/claudiarenda_site/blob/master/images/services_4.png","https://github.com/pedro-samo/claudiarenda_site/blob/master/images/services_5.png","https://github.com/pedro-samo/claudiarenda_site/blob/master/images/services_2.png","https://github.com/pedro-samo/claudiarenda_site/blob/master/images/services_3.png"][e],i.replaceWith(t)})})},carouselSlide:function(){new Splide(".splide").mount()}};window.addEventListener("DOMContentLoaded",function(e){initFunctions.changeImageServecice()});