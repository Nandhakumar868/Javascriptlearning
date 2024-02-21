let popupbutton = document.getElementById("add-popup-button");
let popupbackground = document.querySelector(".popupoverlay");
let popupwindow = document.querySelector(".popup");
let cancelbutton = document.getElementById("cancelpopup");

popupbutton.addEventListener("click",()=>{
    popupbackground.style.display = "block";
    popupwindow.style.display = "block";
});

cancelbutton.addEventListener("click",(event)=>{
    event.preventDefault();
    popupbackground.style.display = "none";
    popupwindow.style.display = "none";
});

let addnewbook = document.getElementById("addbook");
let BookTitleInput = document.getElementById("book-title-input");
let AuthorNameInput = document.getElementById("author-name-input");
let DescriptionInput = document.getElementById("description-input");
let containers = document.querySelector(".container");

addnewbook.addEventListener("click",(event)=>{
    event.preventDefault();
    let div = document.createElement("div");
    div.classList.add("book-container");
    div.innerHTML = `<h2>${BookTitleInput.value}</h2>
    <h5>${AuthorNameInput.value}</h5>
    <p>${DescriptionInput.value}</p>`
    containers.append(div);
    popupbackground.style.display = "none";
    popupwindow.style.display = "none";
});