"use strict";

function main(){
    let book1 = {
        name : "Harry potter",
        author : "J.K Rowling",
        readBook : false
    }

    let book2 = {
        name : "Peppa va a la piscina",
        author : "Irene Pons Julia",
        readBook : true
    }

    let book3 = {
        name : "TEO en la nieve",
        author : "Violeta Denou",
        readBook : false
    }

    let arrayBooks = [book1 , book2, book3];

    let ul = document.createElement(ul);
    let li = document.createElement(li);

    div.appendChild(ul);

    for (let i=0; arrayBooks.length; i ++ ){
        let bName = arrayBooks[i].name;
        let bAuth = arrayBooks[i].author;
        let bRead = arrayBooks[i].readBook;

        ul.appendChild(li);
        li.appendChild(bName);
        ul.appendChild(li);
        li.appendChild(bAuth);
        ul.appendChild(li);
        if (bRead == true){
            let readed = document.createTextNode("Readed");
        }
        else{
            let readed = document.createTextNode("Not Readed");
        }
            li.appendChild(readed);
    }
    
}