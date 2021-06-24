 let tbody = document.querySelector('#tab1');
 let stockStatus = document.querySelector('.available');



 const createElement = (i, rowObj) => {
     console.log(rowObj)

     let qty = rowObj.qty
     let status

     if (qty == 0) {
         status = "red";

     } else if (qty < 21) {
         status = "orange";
     } else {
         status = "green";
     }


     let table = `    <td>${i + 1 }</td>
                        <td>${rowObj.name}</td>
                        <td>${rowObj.desc}</td>
                        <td>${rowObj.cat}</td>
                        <td>${rowObj.qty}</td>
                        <td><i class="fa fa-edit "></i></td>
                        <td><i class="fa fa-trash ${ i + 1 }"></i></td>
                        <td><div class="available">${status}</div></td>`




     let createElement1 = document.createElement("tr")

     createElement1.className = `row${i}`
     createElement1.innerHTML = table

     return createElement1
 }


 const showData = () => {
     let MyItemList = JSON.parse(localStorage.getItem('MyItemList'))
         //console.log(MyItemList)

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

         tbody.append(item)




     }
     updBtn = document.querySelectorAll('.fa-edit')
     console.log(updBtn)
     updBtn.forEach(Element => {
         Element.addEventListener('click', (e) => {
             let eventUpd = e.target.className.match(/\d+/g, '')
             console.log(eventUpd)
             retriveLocalStroge(eventUpd)
         })
     })

     delBtn = document.querySelectorAll('.fa-trash')
     console.log(delBtn)
     delBtn.forEach(Element => {
         Element.addEventListener('click', (e) => {
             let eventdel = e.target.className.match(/\d+/g, '')
             console.log(eventdel)
             delStroge(eventdel)
         })
     })

     //return tbody
 }


 let retriveLocalStroge = (eventUpd) => {

     //localStorage.setItem('eventUpd', JSON.stringify(eventUpd))
     let MyItemList = JSON.parse(localStorage.getItem('MyItemList'));
     let indexData = [+eventUpd - 1]
     console.log(MyItemList)
     MyItemList.name = document.getElementById("inputName1").value
     MyItemList.desc = document.getElementById('inputDescription1').value
     MyItemList.cat = document.getElementById('inputCategory1').value
     MyItemList.qty = document.getElementById('inputQuantity1').value




     //localStorage.setItem('MyItemList', JSON.stringify(MyItemList));
     location.href = '/templates/update.html';
 }

 let delStroge = (eventdel) => {

     //localStorage.setItem('eventUpd', JSON.stringify(eventUpd))
     let MyItemList = JSON.parse(localStorage.getItem('MyItemList'));
     let indexData = [+eventdel - 1]
     MyItemList.splice(indexData, 1);
     localStorage.setItem('MyItemList', JSON.stringify(MyItemList));
     window.location.reload()
 }






 // function clearStorage() {
 //     //clears the entire localStorage
 //     localStorage.clear()
 //     console.log("clear records");
 // }

 // function removeItem() {
 //     //deletes item from localStorage
 //     var key = document.getElementById('removeKey').value;
 //     localStorage.removeItem(key)
 //     console.log("remove items");
 // }

 document.addEventListener('DOMContentLoaded', () => {
     //document.getElementById('submit').addEventListener('click', addItem);
     showData()

 });