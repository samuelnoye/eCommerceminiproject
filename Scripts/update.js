let retriveLocalStroge = (eventUpd) => {

    let MyItemList = JSON.parse(localStorage.getItem('MyItemList'));

    let i = parseInt(eventUpd) - 1

    let name1 = document.getElementById("inputName1")
    let desc = document.getElementById('inputDescription1')
    let cat = document.getElementById('inputCategory1')
    let qty = document.getElementById('inputQuantity1')
    let input1 = document.getElementById('input1')

    name1.value = MyItemList[i].name
    desc.value = MyItemList[i].desc
    cat.value = MyItemList[i].cat
    qty.value = MyItemList[i].qty
    input1.value = i





}

let updateLocalStroge = () => {


    let data = window.localStorage.getItem('MyItemList');
    if (data != null) {

        let name1 = document.getElementById("inputName1").value
        let desc1 = document.getElementById('inputDescription1').value
        let cat1 = document.getElementById('inputCategory1').value
        let qty1 = document.getElementById('inputQuantity1').value
        let i = document.getElementById('input1').value


        let list = JSON.parse(data);
        list[i].name = name1;
        list[i].desc = desc1;
        list[i].cat = cat1;
        list[i].qty = qty1;


        if (name1 == "") {
            window.alert(" Name not entered");
        } else if (desc1 == "") {
            window.alert(" Description is empty");
        } else if (cat1 == "") {
            window.alert(" Category not selected");
        } else if (qty1 == "") {
            window.alert(" Quantity not filled");
        } else if (qty1 < 0) {
            window.alert(" Quantity invalid");

        } else {
            window.localStorage.setItem('MyItemList', JSON.stringify(list));

            window.alert(" Updated Successfully");
            document.querySelector('form').reset();
            location.href = '/index.html';
        }


    }
}
let clear = () => {
    document.querySelector('form1').reset();
}





document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit1').addEventListener('click', updateLocalStroge);

});
retriveLocalStroge(localStorage.getItem("eventUpd"));