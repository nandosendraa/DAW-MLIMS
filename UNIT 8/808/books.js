function howManyBooks(){
    let how = document.querySelector('h3.howManyBooks');
    let textBooks = document.createTextNode("You have "+arrayBooks.length+" books on the bookstore");

    how.append(textBooks);
}

function listBooks(){
    let ul = document.createElement('ul');
    let li = document.createElement('li');

    let h3 = document.querySelector('h3.listBooks');

    h3.append(ul);

    for (let i=0; i < arrayBooks.length; i ++ ){
        let bName = arrayBooks[i].name;
        let bAuth = arrayBooks[i].author;

            let string = document.createTextNode(bName+" by "+bAuth);
            let li = document.createElement('li');
            ul.append(li);
            li.append(string);              
    }

    let sortButton = document.createElement("input");
        sortButton.setAttribute("type","button");
        sortButton.setAttribute("id","sort");
        sortButton.setAttribute("value","Sort");

    h3.append(sortButton);

    sortButton.addEventListener('click', sort);
}

function sort(){
    arrayBooks.sort();
}

document.addEventListener('DOMContentLoaded',howManyBooks);
document.addEventListener('DOMContentLoaded',listBooks);
