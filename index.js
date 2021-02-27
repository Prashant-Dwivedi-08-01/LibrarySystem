console.log("Welcome Nigga!");

//Object of Book
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Book
let index=0;
function Display(){

}

// Prototypes[Methods] in Display Object
//Implementing the add function
Display.prototype.add=function(book){
    console.log("Adding the book to UI");
    let tableBody=document.getElementById("tableBody");
    index+=1;
    let uiString=`<tr>
                    <th scope="row">${index}</th>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`
    tableBody.innerHTML += uiString;
}
//Implementing the clear function
Display.prototype.clear=function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}
//Implementing the validate function
Display.prototype.validate=function(book){
    if(book.name.length==0||book.author.length==0||book.type==undefined)
        return false;
    else 
        return true;
}
//Implementing the show function
Display.prototype.show=function(status,strong,message){
    let alert=document.getElementById("alert");
    let alertHTML=`<div class="alert alert-${status} alert-dismissible fade show" role="alert">
                        <strong>${strong}! </strong>${message}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`
    alert.innerHTML += alertHTML;
    
    setTimeout(() => {
        alert.innerHTML=``;
    }, 3000);
}
//Add Event Listener
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;
    let Travelling = document.getElementById("Travelling");
    let Programming = document.getElementById("Programming");
    let SciFic = document.getElementById("SciFic");
    if (Travelling.checked)
        type = Travelling.value;
    else if (Programming.checked)
        type = Programming.value;
    else if (SciFic.checked)
        type = SciFic.value;

    let book = new Book(name, author, type);
    console.log(book);

    //Creating the object of display
    let display = new Display();
    if(display.validate(book))
    {
        display.add(book);
        display.clear();
        display.show("success","Added","Good Job, Book is added successfully");
    }
    else
    {
        display.show("danger","Missing","You Should fill all the fields above");
    }
    e.preventDefault();

}