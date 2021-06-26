const localStorageContent = localStorage.getItem('MyItemList');

let items;
if (localStorageContent === null) {
    items = []
} else {
    items = JSON.parse(localStorageContent);
}






const addItem = (ev) => {

    let itemName = document.getElementById("inputName").value
    let itemDesc = document.getElementById('inputDescription').value
    let itemCat = document.getElementById('inputCategory').value
    let itemQty = document.getElementById('inputQuantity').value



    ev.preventDefault(); //to stop the form submitting
    let myItemList = {
        id: Date.now(),
        name: itemName,
        desc: itemDesc,
        cat: itemCat,
        qty: itemQty,

    }
    items.push(myItemList);
    //.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //saving to localStorage
    if (itemName == "") {
        window.alert(" Name not entered");
    } else if (itemDesc == "") {
        window.alert(" Description is empty");
    } else if (itemCat == "") {
        window.alert(" Category not selected");
    } else if (itemQty == "") {
        window.alert(" Quantity not filled");
    } else if (itemQty < 0) {
        window.alert(" Quantity invalid");

    } else {
        localStorage.setItem('MyItemList', JSON.stringify(items));

        window.alert(" Item added Successfully");
        document.querySelector('form').reset();
        location.href = '/index.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', addItem);

});