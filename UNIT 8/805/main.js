"use strict";


function main(){
    
    for(let i=0; i<10; i++){
        createElement();
    }
    createButtons();

    function generateRandom(){
        return Math.floor(Math.random() * 11);
    }

    function createButtons(){
        let selectButton = document.createElement("input");
        selectButton.setAttribute("type","button");
        selectButton.setAttribute("id","select");
        selectButton.setAttribute("value","Select All");

        let deselectButton = document.createElement("input");
        deselectButton.setAttribute("type","button");
        deselectButton.setAttribute("id","deselect");
        deselectButton.setAttribute("value","Deselect All");

        form.appendChild(selectButton);
        form.appendChild(deselectButton);
    }

    function createElement() {
        let ul = document.createElement("ul");
        form.appendChild(ul);

        let li = document.createElement("li");
        ul.appendChild(li);

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        checkbox.setAttribute("id","checkbox");
        li.appendChild(checkbox);

        let label = document.createElement("label");
        checkbox.setAttribute("for","checkbox");
        let content = document.createTextNode(generateRandom());
        li.appendChild(label);
        label.appendChild(content);
    }

    function selectAll(){
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for(let i=0; checkboxes.length; i++){
            checkboxes[i].checked = true;
        }
    }

    function deselectAll(){
        let checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for(let i=0; checkboxes.length; i++){
            checkboxes[i].checked = false;
        }
    }

    select.addEventListener('click', selectAll);
    deselect.addEventListener('click', deselectAll);

}

document.addEventListener('DOMContentLoaded', main);