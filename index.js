let AddButton = document.getElementById("AddBook");
let AddNewBooks = document.querySelector(".PopupOverlay");
let AddButton1 = document.getElementById("adddbutton");
let CancelButton1 = document.getElementById("cancelbutton");
let BookName1 = document.getElementById("bookhead");
let AuthorName1 = document.getElementById("bookauthor");
let Description1 = document.getElementById("bookdesc");
let TotalContainer = document.querySelector(".container");
let NewContainer = document.getElementById("box-container");

AddButton.addEventListener("click",()=>{
    AddNewBooks.style.display = "flex";
}
);

CancelButton1.addEventListener("click",(event)=>{
    event.preventDefault();
    AddNewBooks.style.display = "none";
});

AddButton1.addEventListener("click",(event)=>{
    event.preventDefault();
    let a23 = BookName1.value;
    let sade = AuthorName1.value;
    let safsa = Description1.value;
    console.log(a23,sade,safsa);
    let div = document.createElement('div');
    div.setAttribute('class','box-container');
    div.innerHTML = `<h2>${BookName1.value}</h2>
    <h4>${AuthorName1.value}</h4>
    <p>${Description1.value}</p>`
    TotalContainer.append(div);
    console.log(div);
    AddNewBooks.style.display = "none";
});