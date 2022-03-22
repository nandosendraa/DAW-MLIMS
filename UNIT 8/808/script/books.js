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

function showAddForm(){
        let add = document.querySelector('form.add');

        let ul = document.createElement("ul");
        add.appendChild(ul);

        let li = document.createElement("li");
        ul.appendChild(li);

        let textboxTitl = document.createElement("input");
        textboxTitl.setAttribute("type","text");
        textboxTitl.setAttribute("name","title");
        

        let labelTitl = document.createElement("label");
        textboxTitl.setAttribute("for","title");
        let contentTitl = document.createTextNode("Title: ");


        li.appendChild(labelTitl);
        li.appendChild(textboxTitl);
        labelTitl.appendChild(contentTitl);

        let li2 = document.createElement("li");
        ul.appendChild(li2);
        

        let textboxAuth = document.createElement("input");
        textboxAuth.setAttribute("type","text");
        textboxAuth.setAttribute("name","author");
        

        let labelAuth = document.createElement("label");
        textboxAuth.setAttribute("for","author");
        let contentAuth = document.createTextNode("Author: ");


        li2.appendChild(labelAuth);
        li2.appendChild(textboxAuth);
        labelAuth.appendChild(contentAuth);

        let addButtonFinal = document.createElement("input");
        addButtonFinal.setAttribute("type","button");
        addButtonFinal.setAttribute("id","addFinal");
        addButtonFinal.setAttribute("value","Add Book Final");

        let body = document.querySelector('body');

        body.append(addButtonFinal)

        addButtonFinal.addEventListener('click', addBooksFinal);


        let addButtonFirst = document.createElement("input");
        addButtonFirst.setAttribute("type","button");
        addButtonFirst.setAttribute("id","addFirst");
        addButtonFirst.setAttribute("value","Add Book First");

        body.append(addButtonFirst)

        addButtonFirst.addEventListener('click', addBooksFirst);

}

function addBooksFirst(){
    let inputTitle = document.querySelector("input[name='title']");
    let inputAuthor = document.querySelector("input[name='author']");

    let title = inputTitle.value;
    let author = inputAuthor.value;

    let newBook = {
        name: title,
        author: author,
        readBook: false
    }

    arrayBooks.unshift(newBook);

    refreshBooks();
}

function addBooksFinal(){
    let inputTitle = document.querySelector("input[name='title']");
    let inputAuthor = document.querySelector("input[name='author']");

    let title = inputTitle.value;
    let author = inputAuthor.value;

    let newBook = {
        name: title,
        author: author,
        readBook: false
    }

    arrayBooks.push(newBook);

    refreshBooks();
}

function refreshBooks() {
    console.log();
    let h3Books = document.querySelector("h3.listBooks")
    let ul = h3Books.querySelector("ul");
    h3Books.removeChild(ul);

    listBooks();
}

function sort(){
    arrayBooks.sort();
}

document.addEventListener('DOMContentLoaded',howManyBooks);
document.addEventListener('DOMContentLoaded',listBooks);
document.addEventListener('DOMContentLoaded',showAddForm);
