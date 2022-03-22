"use strict"

function main(){
    let ul = document.createElement('ul');
    let li = document.createElement('li');

    let div = document.querySelector('div.list');

    div.appendChild(ul);

    for (let i=0; i < arrayBooks.length; i ++ ){
        let bName = arrayBooks[i].name;
        let bAuth = arrayBooks[i].author;
        let bRead = arrayBooks[i].readBook;

        if (bRead == true){
            let string = document.createTextNode("You already readed "+bName+" by "+bAuth);
            let li = document.createElement('li');
            ul.append(li);
            li.append(string);            
        }
        else{
            let string = document.createTextNode("You not readed "+bName+" by "+bAuth);
            let li = document.createElement('li');
            ul.append(li);
            li.append(string);            
        }
    
    }
}

document.addEventListener('DOMContentLoaded',main);