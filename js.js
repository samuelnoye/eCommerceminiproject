let tbody = document.querySelector('#tab1');
let stockStatus = document.querySelector('.available');


//create element for table 
const createElement = (i, rowObj) => {
    console.log(rowObj)


    //set status color
    statusColor = (qty) => {
        if (qty == 0) {
            return "outofstock"

        } else if (qty < 21) {
            return "almostoutofStock";
        } else {
            return "instock";
        }
    }
    statusColor();


    let table = `    <td>${i + 1 }</td>
                       <td>${rowObj.name}</td>
                       <td>${rowObj.desc}</td>
                       <td>${rowObj.cat}</td>
                       <td>${rowObj.qty}</td>
                       <td><i class="fa fa-edit ${ i + 1 }"></i></td>
                       <td><i class="fa fa-trash ${ i + 1 }"></i></td>
                       <td><div class="available  ${statusColor(rowObj.qty)}" ></div></td>`




    let createElement1 = document.createElement("tr")

    createElement1.className = `row${i}`
    createElement1.innerHTML = table

    return createElement1
}

//show data to table
const showData = () => {
    let MyItemList = JSON.parse(localStorage.getItem('MyItemList'))


    let itemlength = MyItemList.length
    for (let i = 0; i < itemlength; i++) {
        let row_ob = {
            cat: MyItemList[i].cat,
            desc: MyItemList[i].desc,
            id: MyItemList[i].id,
            name: MyItemList[i].name,
            qty: MyItemList[i].qty,

        }
        let item = createElement(i, row_ob)
        statusColor();
        tbody.append(item)


    }



    //get delete button
    delBtn = document.querySelectorAll('.fa-trash')

    delBtn.forEach(Element => {
        Element.addEventListener('click', (e) => {
            let eventdel = e.target.className.match(/\d+/g, '')
            console.log(eventdel)
            delStroge(eventdel)
        })
    })

    //get edit button
    updBtn = document.querySelectorAll('.fa-edit')
    console.log(updBtn)
    updBtn.forEach(Element => {
        Element.addEventListener('click', (e) => {
            let eventUpd = e.target.className.match(/\d+/g, '')
            console.log(eventUpd)

            localStorage.setItem("eventUpd", eventUpd);
            location.href = '/templates/update.html';
        })
    })

    //return tbody

}



//delete item
let delStroge = (eventdel) => {

    //localStorage.setItem('eventUpd', JSON.stringify(eventUpd))
    let MyItemList = JSON.parse(localStorage.getItem('MyItemList'));
    let indexData = [+eventdel - 1]
        //console.log(indexData)
    MyItemList.splice(indexData, 1);
    localStorage.setItem('MyItemList', JSON.stringify(MyItemList));
    window.location.reload()
}

//total items
const allItems = () => {
    let tnp = document.getElementById('tp');
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
    document.getElementById("tq").innerText = countQuantity();
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

    showData()
    allItems()
    updateSummary()
    document.getElementById("tc").innerText = countCategory().length;
});