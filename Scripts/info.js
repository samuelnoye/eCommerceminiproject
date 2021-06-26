//total items
const allItems = () => {
    let tnp = document.getElementById('tp1');
    tnp.innerText = JSON.parse(localStorage.MyItemList).length;

}


//total stock
const countQuantity = () => {
    let localStorageItems = JSON.parse(localStorage.getItem("MyItemList"));
    let totalNumber = 0;

    for (let item of localStorageItems) {
        totalNumber += parseInt(item.qty);
    }

    return totalNumber;

}

const updateSummary = () => {
    document.getElementById("tq1").innerText = countQuantity();
}

//total category
const getCategory = () => {
    return localStorage.getItem("MyItemList") ? JSON.parse(localStorage.getItem("MyItemList")) : [];
}

const countCategory = () => {
    let countItems = [];

    let storeData = getCategory();
    for (let item of storeData) {
        if (!countItems.includes(item.cat)) {
            countItems.push(item.category);
        }
    }
    return countItems;
}








document.addEventListener('DOMContentLoaded', () => {


    allItems()
    updateSummary()
    document.getElementById("tc1").innerText = countCategory().length;
});