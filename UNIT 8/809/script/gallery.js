"use strict";
let index = 0;

function showGallery(){
    let bName = arrayBooks[index].name;
    let bAuth = arrayBooks[index].author;

    let divGallery = document.querySelector('div.gallery');

    let h3 = document.createElement('h3');
    divGallery.append(h3);
    h3.append(bName);

    let p = document.createElement('p');
    divGallery.append(p);
    p.append("by "+bAuth);
}

function buttonIndexPrevious(){
    let previousButton = document.createElement("input");
    previousButton.setAttribute("type","button");
    previousButton.setAttribute("id","previous");
    previousButton.setAttribute("value","Previous");

    let divGallery = document.querySelector('div.gallery');

    divGallery.append(previousButton);
    previousButton.addEventListener('click',indexPrevious);
}

function indexPrevious(){
    index --;
    refresh();
}

function buttonIndexAdd(){
    let nextButton = document.createElement("input");
        nextButton.setAttribute("type","button");
        nextButton.setAttribute("id","next");
        nextButton.setAttribute("value","Next");

    let divGallery = document.querySelector('div.gallery');

    divGallery.append(nextButton);
    nextButton.addEventListener('click',indexAdd);
}

function indexAdd(){
    index ++;
    refresh();
}

function refresh(){
    let divGallery = document.querySelector('div.gallery');
    let h3 = document.querySelector('h3');
    let p = document.querySelector('p');

    divGallery.removeChild(h3);
    divGallery.removeChild(p);

    let buttonNext = document.querySelector("#next");
    let buttonPrevious = document.querySelector("#previous");

    divGallery.removeChild(buttonNext);
    divGallery.removeChild(buttonPrevious);

    showGallery();
    buttonIndexPrevious();
    buttonIndexAdd();
}

document.addEventListener('DOMContentLoaded',showGallery);
document.addEventListener('DOMContentLoaded',buttonIndexPrevious);
document.addEventListener('DOMContentLoaded',buttonIndexAdd);
